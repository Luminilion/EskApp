import React from 'react'

// Main export i.e. Timer function
const CountDownTimer = ({
  hoursMinSecs // dict of hours, minutes and seconds
}) => {

  // Params fething or default attribution
  const {
    hours = 0,
      minutes = 0,
      seconds = 60
  } = hoursMinSecs;

  // Creating state for each of the counter's variables
  const [
    [hrs, mins, secs], setTime
  ] = React.useState([hours, minutes, seconds]);

  // Declare function for the end of the timer
  function reset() {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
  };

  // Declare function to change timer's state
  function tick() {
    if (hrs === 0 && mins === 0 && secs === 0) // if no time left, reset
      reset()
    else if (mins === 0 && secs === 0) { // if hour is done, restart new hour
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) { // if minute is done, restart new minute
      setTime([hrs, mins - 1, 59]);
    } else { // decrement seconds otherwise
      setTime([hrs, mins, secs - 1]);
    }
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return ( <
    div >
    <
    p > {
      `${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    } < /p> </div >
  );

}

export default CountDownTimer;
