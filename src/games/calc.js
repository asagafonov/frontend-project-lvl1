import generateRandomNumberInRange from '../utils/utils.js';
import runEngine from '../index.js';

const operators = ['+', '-', '*'];

const generateOperator = () => {
  const index = generateRandomNumberInRange(0, operators.length - 1);
  return operators[index];
};

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'undefined';
  }
  return result;
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const firstNumber = generateRandomNumberInRange(1, 100);
    const secondNumber = generateRandomNumberInRange(1, 100);
    const operator = generateOperator();
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const answer = String(calculate(firstNumber, secondNumber, operator));
    data.push([question, answer]);
  }
  return data;
};

const description = 'What is the result of the following expression?';

const brainCalc = () => runEngine(description, generateGameData);
export default brainCalc;
