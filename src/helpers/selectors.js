
// export function getAppointmentsForDay(state, day) {
//   const result =[];
//   console.log(state.days);
//   for (const day in state.days[1]){
//     console.log(day.name);
//   }

//   return result;
// }

export function getAppointmentsForDay(state, day) {
  // console.log(state.days[1].name);

  const foundDay = state.days.find(dy => dy.name === day);
  console.log(foundDay);
  if (!foundDay) {
    return [];
  }
  const appointmentIds = foundDay.appointments;
  const appointments = appointmentIds.map(id => {
    return state.appointments[id];
  })
  return appointments
}
