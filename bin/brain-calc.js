import readlineSync from 'readline-sync';
import askForName from './ask-for-name.js'

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateRandomNumberInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const operatorIndex = () => generateRandomNumberInRange(1, 4);

const generateOperator = () => {
  const operatorInd = operatorIndex();
  if (operatorInd === 1) {
    return '+';
  } if (operatorInd === 2) {
    return '-';
  } else {
    return '*';
  }
};

const generateEquation = () => {
  const firstOperand = generateRandomNumber();
  const secondOperand = generateRandomNumber();
  const operator = generateOperator();
  const equation = `${firstOperand} ${operator} ${secondOperand}`;
  return equation;
};

const solveEquation = (string) => {
  const eqArray = string.split(' ');
  const operator = eqArray[1];
  const firstOperand = Number(eqArray[0]);
  const secondOperand = Number(eqArray[2]);
  if (operator === '+') {
    return firstOperand + secondOperand;
  } if (operator === '-') {
    return firstOperand - secondOperand;
  } if (operator === '*') {
    return firstOperand * secondOperand;
  }
};

const brainCalc = () => {
  console.log('What is the result of the following expression?');
  let iteration = 0;
  while (iteration < 3) {
  const equation = generateEquation();
  const answer = readlineSync.question(`Calculate ${equation} --> `);
  if (Number(answer) === solveEquation(equation)) {
    iteration += 1;
    console.log(`Your answer is ${answer} \nCorrect!`);
    if (iteration === 3) {
      console.log(`Congratulations, ${askForName}! You win!`);
    }
  } else {
    console.log(`Your answer is ${answer} \n${answer} is the wrong answer ;(. Correct answer was ${solveEquation(equation)} \nLet's try it again, ${askForName}!`);
    break;
    }
  }
};

export default brainCalc;
