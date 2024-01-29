/* eslint-disable no-unused-vars */
const ConverRuntim = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const hoursString = hours > 0 ? `${hours}h` : '';
  const minutesString = minutes > 0 ? ` ${minutes}m` : '';

  return `${hoursString}${minutesString}`;
};

export default ConverRuntim;
