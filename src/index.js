module.exports = function toReadable(number) {
  if(number === 0){return 'zero'};

  let a = { 0:'', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
  let b = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
  let num1 = '';
  let num10 = '';
  let result = '';
    if (number <= 19) {
    return a[number].trim();
  } else if (number <= 99) {
    if (number % 10 !== 0) { num1 = a[number % 10] }
    return (b[Math.floor(number / 10)] + ' ' + num1).trim()
  } else if (number <= 999) {
    if ((number.toString()[2] * 1+number.toString()[1] * 1) === 0){ return (a[Math.floor(number / 100)] + ' hundred').trim()} else
    if (number - number.toString()[0] * 100 <= 19 && (number.toString()[2] * 1+number.toString()[1] * 1) !== 0) {
      console.log('1')
      num1 = a[number - number.toString()[0] * 100];
      return (a[Math.floor(number / 100)] + ' hundred ' + num1).trim()

    } else if (number - number.toString()[0] * 100 <= 99 && (number.toString()[2] * 1+number.toString()[1] * 1) !== 0) {
      console.log('2')
      num1 = a[(number - number.toString()[0] * 100) % 10];
      return (a[Math.floor(number / 100)] + ' hundred ' + b[Math.floor((number - number.toString()[0] * 100) / 10)] + ' ' + num1).trim()
    }
    // return result.trim()
  }
}
