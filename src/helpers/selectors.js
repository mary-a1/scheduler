
function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find(dy => dy.name === day);
  // console.log(foundDay);

  if (!foundDay) {
    return [];
  }
  const appointmentIds = foundDay.appointments;

  const appointments = appointmentIds.map(id => {
    return state.appointments[id];
  });
  return appointments;
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const id = interview.interviewer;
  const interviewObj = {
    "student": interview.student,
    "interviewer": {
      id: id,
      name: state.interviewers[id].name,
      avatar: state.interviewers[id].avatar
    }
  };
  return interviewObj;
}


function getInterviewersForDay(state, day) {
  const foundDay = state.days.find(dy => dy.name === day);
  // console.log(foundDay);

  if (!foundDay) {
    return [];
  }
  const appointmentIds = foundDay.interviewers;

  const interviewers = appointmentIds.map(id => {
    return state.interviewers[id];
  });
  return interviewers;
}
export {getAppointmentsForDay, getInterview, getInterviewersForDay}