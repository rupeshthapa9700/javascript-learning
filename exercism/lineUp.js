export const format = (name, number) => {
  let suffix = "";
  let lastDigit = number % 10;
  let lastTwoDigit = number % 100;
  if(lastTwoDigit === 11 || lastTwoDigit === 12 || lastTwoDigit === 13){
    suffix = "th";
  }
  else if(lastDigit === 1){
    suffix = "st";
  }
  else if(lastDigit === 2){
    suffix = "nd";
  }
  else if(lastDigit === 3){
    suffix = "rd";
  }
  else {
    suffix = "th";
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
