// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//New year Chaos

('use strict');
minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]);
minimumBribes([4, 1, 2, 3]);
minimumBribes([2, 1, 5, 3, 4]);
/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q: number[]): void {
  // Write your code here
  let totalNoOfBrides = 0;

  let firstNumber = 1;
  let secondNumber = 2;
  let thirdNumber = 3;
  for (let i = 0; i < q.length; i++) {
    console.log(
      `${firstNumber}== ${secondNumber}=== ${thirdNumber} for ${q} comparing ${q[i]}`
    );
    if (q[i] === firstNumber) {
      firstNumber = secondNumber;
      secondNumber = thirdNumber;
      ++thirdNumber;
    } else if (q[i] === secondNumber) {
      ++totalNoOfBrides;
      secondNumber = thirdNumber;
      thirdNumber++;
    } else if (q[i] === thirdNumber) {
      totalNoOfBrides += 2;
      thirdNumber++;
    } else {
      console.log('Too chaotic');
      break;
    }
    if (i === q.length - 1) {
      console.log(totalNoOfBrides);
    }
  }
}

function main() {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const n: number = parseInt(readLine().trim(), 10);

    const q: number[] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
