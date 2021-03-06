import generateRandomNumberInRange from '../utils/utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const question = generateRandomNumberInRange(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    data.push([question, answer]);
  }
  return data;
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';

const brainPrime = () => runEngine(description, generateGameData);
export default brainPrime;
