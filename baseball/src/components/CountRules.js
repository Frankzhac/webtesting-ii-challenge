const CountRules = param => {
  switch (param) {
    case 'hit':
      // reset all to 0
      break;
    case 'ball' <= 3:
      // +1 to ball, update display
      console.log('Ball');
      break;
    case 'ball' === 4:
      // reset all to 0
      console.log('Ball 4, yer out!');
      break;
    case 'strike' <= 2:
      // +1 to strike
      console.log('Strike');
      break;
    default:
      // reset all to 0
      console.log('Strike 3, yer out!');
      break;
  }
};

export default CountRules;
