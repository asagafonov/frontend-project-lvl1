import readlineSync from 'readline-sync';

/* functions of general use */

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

/* game intro */

const greetUser = console.log('\nWelcome to the Brain Games!');
const askForName = readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!`);

const intro = () => {
  greetUser;
  askForName;
  sayHello(askForName);
};

/* game engine */

const runEngine = (rules, arr) => {
  intro();
  console.log(rules);
  const array = [...arr];
  for (let i = 0; i < array.length; i += 1) {
    const equation = array[i][0];
    const solution = array[i][1];
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      console.log(`Your answer is "${userAnswer}" \nCorrect!`);
      if (i === array.length - 1) {
        return console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      return console.log(`Your answer is "${userAnswer}" \n"${userAnswer}" is the wrong answer ;(. Correct answer was "${solution}" \nLet's try it again, ${askForName}!\n`);
    }
  }
  return console.log(`Congratulations, ${askForName}! You win!\n`);
};

export {
  greetUser,
  askForName,
  sayHello,
  runEngine,
  generateRandomNumberInRange,
};
