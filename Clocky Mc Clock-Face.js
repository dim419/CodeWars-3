var whatTimeIsIt = function(angle) {
  console.log(angle);
  let timeHour = String(Math.floor((angle * 2) / 60)).padStart(2, '0');
  if (timeHour === '00') {
    timeHour = '12'};
    let timeMin = String(Math.floor((angle * 2) % 60)).padStart(2, '0');
  return `${timeHour}:${timeMin}`;
}
