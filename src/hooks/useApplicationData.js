import { useState, useEffect } from "react";
import axios from "axios";


const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then((all) => {
        const days = all[0].data;
        const appointments = all[1].data;
        const interviewers = all[2].data;
        setState(prev => ({
          ...prev, days, appointments, interviewers
        }));
      });
  }, []);

  function updateSpots(day, days, appointments) {

    const selectedDay = days.find((randomDay) => randomDay.name === day);
    const selectedAppointments = selectedDay.appointments;

    let spots = 0;
    for (const selectedAppointment of selectedAppointments) {
      if (!appointments[selectedAppointment].interview) {
        spots++;
      }
    }
    selectedDay.spots = spots;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then((res) => {
        updateSpots(state.day, state.days, appointments);
        setState({
          ...state,
          appointments
        });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then((response) => {
        state.appointments[id].interview = null;
        updateSpots(state.day, state.days, state.appointments);
        setState({
          ...state,
          appointments,
          days: state.days
        });
      });
  }

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
