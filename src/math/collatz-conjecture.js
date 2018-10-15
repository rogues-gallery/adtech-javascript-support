/**
 * Collatz Conjecture
 *
 * The Collatz Conjecture states that the sequence of positive integers generated by
 * repeated application of the Collatz function will always pass through 1.
 *
 * Collatz function f(n) :
 * 3n + 1 n odd
 * n/2 n even
 *
 * Examples:
 * 1
 * f(2) = 1
 * f(3) = 10 => f(10) = 5 => f(5) = 16 => f(16) = 8 => f(8) = 4 => f(4) = 2 => f( 2) = 1
 *
 * In these examples, the transformation was applied once and seven times, resp.
 *
 * Q1: Write a function that returns the number of transformations needed to first reach 1.
 *
 * Q2: Write a function that prints the input value and the number of transformations that
 * maximizes the latter in the range [1 ... N], were N is of the order of one million.
 *
 * findMax(3) -> "3 -> 7"
 */

/**
 * Q1: Get the number of transformation
 * @param {number} num
 */
const findSteps = num => {
  if (num <= 1) return 1;
  if (num % 2 === 0) return 1 + findSteps(num / 2);
  return 1 + findSteps(3 * num + 1);
};

/**
 * Q1: Get the number of transformation with memorization
 * @param {number} num
 */
const findStepsII = num => {
  const map = new Map();

  const helper = n => {
    if (n <= 1) return 1;

    if (map.has(n)) return map.get(n);

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }

    if (map.has(n)) return map.get(n);

    const t = helper(n);
    map.set(n, t);

    return 1 + t;
  };

  return helper(num);
};

/**
 * Q2: Get the longest count of transformation for num in [1 ... N]
 * @param {number} num
 */
const findLongestSteps = num => {
  if (num < 1) return 0;

  let res = 0;
  for (let i = 1; i <= num; i++) {
    const t = findSteps(i);
    res = Math.max(res, t);
  }

  return res;
};

export { findSteps, findStepsII, findLongestSteps };
