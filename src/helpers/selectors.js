/**
 * This function takes in the object in our state.days array who's 
 * name matches the provided day.
 * @returns the an array of the appointments for that day.
 */
function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find(dy => dy.name === day);

  if (!foundDay) {
    return [];
  }

  const appointmentIds = foundDay.appointments;
  const appointments = appointmentIds.map(id => {
    return state.appointments[id];
  });
  
  return appointments;
}
/**
 * This function takes in the array state and the interview object.
 * @returns a new object containing the interview data.
 */
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
/**
 * This function takes in the object in our state.days array who's 
 * name matches the provided day. 
 * @returns an interviewers array
 */
function getInterviewersForDay(state, day) {
  const foundDay = state.days.find(dy => dy.name === day);

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