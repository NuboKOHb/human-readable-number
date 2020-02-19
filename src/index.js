module.exports = function toReadable (number = 0) {
  let resultString = '';
  
  let repArr = ['zero', 'one', 'two', 'three', 'four', 'five', 
  'six', 'seven', 'eight', 'nine' , 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let repArrT = ['', 'ten', 'twenty' , 'thirty', 'forty', 
  'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let hundred = 'hundred';

  if (number >= 0 && number <= 19) return repArr[number];
  if (number % 10 == 0 && number < 100) return repArrT[number/10];
  if (number % 100 == 0) return repArr[number/100]+' '+hundred;

  if (number > 20 && number < 1000) {
    repArr[0] = '';
    let inputArr = number.toString().split('').reverse();

    if(inputArr.length>2) {
      inputArr[2] = repArr[+inputArr[2]]+' '+hundred;
    }
    if (number > 100 && number % 100 > 0 && number % 100 < 20) {
      resultString = `${inputArr[2]} ${repArr[number%100]}`;
    } else {
      inputArr[0] = repArr[+inputArr[0]];
      inputArr[1] = repArrT[+inputArr[1]];
      resultString = `${inputArr[1]} ${inputArr[0]}`;
      if(inputArr.length>2) {
        resultString = inputArr[2]+' '+resultString;
      }
    }
    
    resultString = resultString.trim(); 
  }
  return resultString;
}
