import generateRandomNumberInRange from '../utils/utils.js';
import runEngine from '../index.js';

const getGCD = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
  if (secondNumber > firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  let gcd;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const firstNumber = generateRandomNumberInRange(1, 100);
    const secondNumber = generateRandomNumberInRange(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(getGCD(firstNumber, secondNumber));
    data.push([question, answer]);
  }
  return data;
};

const description = 'Find the greatest common divisor of the given numbers.';

const brainGCD = () => runEngine(description, generateGameData);
export default brainGCD;
