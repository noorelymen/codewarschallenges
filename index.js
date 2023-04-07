/**
 * Selected problems
 */

/* vowels count */
function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    switch (character) {
      case 'a':
        vowelsCount++;
        break;
      case 'e':
        vowelsCount++;
        break;
      case 'i':
        vowelsCount++;
        break;
      case 'o':
        vowelsCount++;
        break;
      case 'u':
        vowelsCount++;
        break;
      default:
        continue;
    }
  }

  return vowelsCount;
}

function getCountSolutionTwo(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

/* even or odd number */
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function even_or_odd_solution_two(number) {
  return number % 2 ? 'Odd' : 'Even';
}

/* return opposite number */
function opposite(number) {
  //your code here
  return number * -1;
}
function oppositeSolutionTwo(number) {
  return number > 0 ? -number : Math.abs(number);
}
/* get middle challenge */

function getMiddle(s) {
  //Code goes here!
  var position;
  var length;
  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
}

function getMiddleSolutionTwo(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/* Mumbleling challenge */
function accum(s) {
  // your code
  let strBuilt = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      strBuilt += s.charAt(i).toUpperCase() + '-';
    } else {
      strBuilt += s.charAt(i).toUpperCase();
      for (let j = 0; j < i; j++) {
        strBuilt += s.charAt(i).toLowerCase();
      }
      strBuilt += '-';
    }
  }
  return strBuilt.slice(0, -1);
}

function accumSolution2(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

/* you are a square */
var isSquare = function (n) {
  if (n >= 0) {
    if (Math.sqrt(n) % 1 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

var isSquareSolutionTwo = function (n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
};

/* remove vowels from string */

function disemvowel(str) {
  let al = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!al.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

function disemvowelSolutionTwo(str) {
  return str.replace(/[aeiou]/gi, '');
}

/* Highest and lowest */
function highAndLow(numbers) {
  let arr = numbers.split(' ');
  let newArr = [];
  arr.map((el) => {
    newArr.push(parseInt(el));
  });
  let minNumber = Math.min(...newArr);
  let maxNumber = Math.max(...newArr);
  let result = '' + maxNumber + ' ' + minNumber;
  return result;
}
function highAndLowSolutionTwo(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

/* Exes and ohs */

function XO(str) {
  //code here
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'o' || str.charAt(i) === 'O') {
      oCounter++;
    } else if (str.charAt(i) === 'x' || str.charAt(i) === 'X') {
      xCounter++;
    } else {
      continue;
    }
  }
  if (xCounter === oCounter) return true;
  return false;
}

function XOSolutionTwo(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/* Square every degit */
function squareDigits(num) {
  // convert the number into array where evry element of the arrray is a degit of the number
  var initialArray = ('' + num).split('');
  var newArr = [];
  var newArr2 = [];
  let str = '';
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });
  newArr.map((el) => {
    newArr2.push(Math.pow(el, 2));
  });
  newArr2.map((el) => {
    str = str + el;
  });
  return parseInt(str);
}

function squareDigitsSolution2(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join('')
  );
}

/* SHortest word */
function findShort(s) {
  let arr = s.split(' ');
  let arrCounts = [];
  arr.map((el) => {
    arrCounts.push(el.length);
  });
  return Math.min(...arrCounts);
}
function findShortSolutionTwo(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length)
  );
}

/*Complementary dna */

function DNAStrand(dna) {
  //your code here
  let newStr = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === 'T') {
      newStr += 'A';
    } else if (dna.charAt(i) === 'A') {
      newStr += 'T';
    } else if (dna.charAt(i) === 'C') {
      newStr += 'G';
    } else if (dna.charAt(i) === 'G') {
      newStr += 'C';
    } else {
      continue;
    }
  }
  return newStr;
}

var pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
function DNAStrandSolutionTwo(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v];
    })
    .join('');
}

/* Descending order */
function descendingOrder(n) {
  var initialArray = ('' + n).split('');
  var newArr = [];
  let str = '';
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });
  newArr.sort();
  newArr.reverse();
  newArr.map((el) => {
    str += el;
  });

  return parseInt(str);
}

function descendingOrderSolutionTwo(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

/* sum of positives */

function positiveSum(arr) {
  let sum = 0;
  arr.map((el) => {
    if (el > 0) {
      sum += el;
    }
  });
  return sum;
}
function positiveSumSolutionTwo(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

/* Isograms */
function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

/* List filtering */
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => typeof el !== 'string');
}

/* find the smallest integer in an array*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

/* sum of two lowest integers */
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let arrSmallest = [];
  while (arrSmallest.length < 2) {
    let min = Math.min(...numbers);
    let minPos = numbers.indexOf(min);
    numbers.splice(minPos, 1);
    arrSmallest.push(min);
  }
  let result = arrSmallest.reduce((acc, curr) => {
    return acc + curr;
  });
  return result;
}

/* Growth of population */
function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

/* string repeat */
function repeatStr(n, s) {
  return s.repeat(n);
}

/* is it a triangle */
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b > c && a + c > b && c + b > a) return true;
  else return false;
}

/* find the next perfect square */
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

/* credit card mask */
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

/* sum of odd numbers */
function rowSumOddNumbers(n) {
  return n * n * n;
}

/* find the devisors */
function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}

/* Return negative */
function makeNegative(num) {
  // Code?
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

/* remove first and last character */
function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
}

/* remove string spaces */
function noSpace(x) {
  return x.replace(/\s/g, '');
}

/* convert boolean values into strings 'Yes' or 'No' */
function boolToWord(bool) {
  return bool === true ? 'Yes' : 'No';
}

/*Convert a Number to a String */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

/* Basic Mathematical operations */
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }
  if (operation === '-') {
    return value1 - value2;
  }
  if (operation === '*') {
    return value1 * value2;
  }
  if (operation === '/') {
    if (value2 > 0) {
      return value1 / value2;
    }
  }
}

/* Sum of the first nth terms of series */
function SeriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return result.toFixed(2);
}

/* Keep hydrated */
function litres(time) {
  return Math.floor(time * 0.5);
}

/* century from year */
function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

/* Beginner Lost without a map */
function maps(x) {
  let newarr = x.map((el) => el * 2);
  return newarr;
}

/* reversed strings */
function solution(str) {
  return str.split('').reverse().join('');
}

/* String ends with */
function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}

/* Do i get a bonus */
function bonusTime(salary, bonus) {
  // your code here
  let total = 0;
  bonus ? (total = salary * 10) : (total = salary);
  return '\u00A3' + total;
}

/* Abbereviate a two worn name */
function abbrevName(name) {
  // code away
  let arr = name.split(' ');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase() + '.';
  }
  return result.slice(0, -1);
}

/* Dna to Rna conversion */
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, 'U');
}

/* Counting sheeps */
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let result = 0;
  arrayOfSheep.forEach((el) => {
    el ? result++ : (result += 0);
  });
  return result;
}

/* Ones and zeros */
const binaryArrayToNumber = (arr) => {
  // your code
  return parseInt(arr.join(''), 2);
};

/* A Needle in the Haystack */
function findNeedle(haystack) {
  // your code here
  let position = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      position = i;
      break;
    }
  }
  return 'found the needle at position ' + position;
}

/* Remove the minimum */
function removeSmallest(numbers) {
  if (!numbers) return [];
  let numbersCopy = [...numbers];
  var min = Math.min.apply(null, numbersCopy);
  numbersCopy.splice(numbers.indexOf(min), 1);
  return numbersCopy;
}

/* Convert number to reversed array of degits */
function digitize(n) {
  //code here
  let myFunc = (num) => Number(num);

  var intArr = Array.from(String(n), myFunc);
  return intArr.reverse();
}

/* Make a function that does arithmitic */
function arithmetic(a, b, operator) {
  //your code here!
  switch (operator) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
      break;
    default:
      return 'wrong operator';
  }
}

/* Regular ball super ball */
var Ball = function (ballType = 'regular') {
  // your code goes here
  this.ballType = ballType;
};
module.exports = Ball;

/* Make them bark */
// TODO: solve the barking problem!
// remove the // the line below and copy code to codewars kata
//Dog.prototype.bark = function() { return 'Woof!' }

/* Add property to every object in array
  remove comment from the code below and copy it to your code wars kata
*/
//write your code here
/*questions.forEach(function(q) {
  q.usersAnswer = null
})*/

/*  FIXME: Get Full Name*/
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

/* Grasshoper summation */
var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

/* Jenny's secret message */
function greet(name) {
  if (name === 'Johnny') return 'Hello, my love!';
  return 'Hello, ' + name + '!';
}

/* Function 1 Hello world */
// remove // from code below and copy it to your codwares kata
//const greet = () => 'hello world!';

/* Count the Monkey's */
function monkeyCount(n) {
  // your code here
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

/* Are you playing Banjo */
function areYouPlayingBanjo(name) {
  // Implement me

  if (name.charAt(0) === 'r' || name.charAt(0) === 'R') {
    return name + ' plays banjo';
  }
  return name + ' does not play banjo';
}

/* Find the capitals */
var capitals = function (word) {
  // Write your code here
  return word
    .split('')
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};

/* Plural */
function plural(n) {
  if (n == 1) return false;
  return true;
}

/* Drink about */
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy';
  } else if (old >= 14 && old < 18) {
    return 'drink coke';
  } else if (old >= 18 && old < 21) {
    return 'drink beer';
  } else if (old >= 21) {
    return 'drink whisky';
  }
}

/* Leonardo Decaprio and oscars */
function leo(oscar) {
  if (oscar === 88) return 'Leo finally won the oscar! Leo is happy';
  if (oscar === 86) return 'Not even for Wolf of wallstreet?!';
  if ((oscar !== 86) & (oscar !== 88) && oscar < 88)
    return 'When will you give Leo an Oscar?';
  if (oscar > 88) return 'Leo got one already!';
}

/*Switch/Case - Bug Fixing #6 */
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

/* Sentence smash */
function smash(words) {
  return words.join(' ');
}

/* If you can't sleep, just count sheep!! */
var countSheep = function (num) {
  return [...Array(num).keys()].reduce(
    (res, i) => res + (i + 1) + ' sheep...',
    ''
  );
};

/* Double char */
function doubleChar(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    newStr += str.charAt(i) + str.charAt(i);
  }
  return newStr;
}

/* Unfinished Loop - Bug Fixing #1 */
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

/* Sum of numbers from 0 to N */
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let arr = [];
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }
    let b = arr.reduce((total, next) => total + next, 0);
    let a = arr.join('+');
    if (count < 0) return `${count}<0`;
    if (count == 0) return `${count}=0`;
    return `${a} = ${b}`;
  };

  return SequenceSum;
})();

/* Multiples of 3 or 5 */
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

/*  Sum of Digits / Digital Root */
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

/* Who likes it */
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}

/* Find the party outlier */
function findOutlier(integers) {
  var even = integers.filter((a) => a % 2 === 0);
  var odd = integers.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

/* Stop gninnipS My sdroW! */
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}

/**
 * More problems to achieve 300 points
 */

/**
 * 1
 * title: A Chain adding function
 * link : https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
 */
// solution
var add = function (n) {
  const f = (x) => add(n + x);
  f.valueOf = () => n;
  return f;
};

/**
 * 2
 * title : Best travel
 * link: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
 */
//solution
const chooseBestSum = (t, k, ls) =>
  ls
    .reduce(
      (r, e) =>
        r.concat(r.filter((c) => c.length < k).map((c) => c.concat([e]))),
      [[]]
    )
    .filter((c) => c.length === k)
    .map((c) => c.reduce((a, b) => a + b))
    .filter((s) => s <= t)
    .sort((a, b) => b - a)[0] || null;

/**
 * 3
 * title: Can you get the loop ?
 * link: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript
 */
// solution
function loop_size(node) {
  var turtle = node;
  var rabbit = node;

  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // voila
  return count;
}

/**
 * 4
 * title: Common Denominators
 * link: https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript
 */
//solution
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${(n * cd) / d},${cd})`).join('');
}

/**
 * 5
 * title: Did I Finish my Sudoku?
 * link: https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
 */
//solution
function doneOrNot(board) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  for (let i = 0; i < board.length; i++) {
    count0 += board[i][0];
    count1 += board[i][1];
    count2 += board[i][2];
    count3 += board[i][3];
    count4 += board[i][4];
    count5 += board[i][5];
    count6 += board[i][6];
    count7 += board[i][7];
    count8 += board[i][8];
  }
  return count0 === 45 &&
    count1 === 45 &&
    count2 === 45 &&
    count3 === 45 &&
    count4 === 45 &&
    count5 === 45 &&
    count6 === 45 &&
    count7 === 45 &&
    count8 === 45 &&
    board[7][8] != board[8][7]
    ? 'Finished!'
    : 'Try again!';
}

/**
 * 7
 * title: Directions Reduction
 * link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 */
// solution
function dirReduc(arr) {
  let str = arr.join(''),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

/**
 * 8
 * title : Extract the domain name from a URL
 * link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */
//solution
function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

/**
 * 9
 * title: Factorial decomposition
 * link: https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript
 */
// solution
function decomp(n) {
  function isPrime(num) {
    if (num % 2 == 0 || num % 3 == 0) {
      return false;
    }
    var d = 5;
    while (d <= Math.sqrt(num)) {
      if (num % d == 0 || num % (d + 2) == 0) {
        return false;
      } else {
        d += 6;
      }
    }
    return true;
  }
  let primes = [2, 3];
  let k = 5;
  while (k <= n) {
    if (isPrime(k)) {
      primes.push(k);
    }
    k += 2;
  }
  let factor_string = '';
  for (let i = 0; i < primes.length; i++) {
    let N = n;
    let index = n;
    while (N > 0) {
      index -= N % primes[i];
      N = (N - (N % primes[i])) / primes[i];
    }
    index /= primes[i] - 1;
    index > 1
      ? (factor_string += primes[i] + '^' + index + ' * ')
      : (factor_string += primes[i] + ' * ');
  }
  return factor_string.slice(0, factor_string.length - 3);
}

/**
 * 10
 * title:Fun with trees: array to tree
 * link: https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript
 */
// solution
function arrayToTree(values, i = 0) {
  if (i >= values.length) return;
  return new TreeNode(
    values[i],
    arrayToTree(values, 2 * i + 1),
    arrayToTree(values, 2 * i + 2)
  );
}

/**
 * 11
 * title: Greed is Good
 * link: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 */
// solution
function score(dice) {
  let result = 0;
  let arr2 = [];

  const arr1 = dice.sort((a, b) => a - b);
  for (let i = 1; i < 7; i++) {
    arr2.push(arr1.slice(arr1.indexOf(i), arr1.lastIndexOf(i) + 1));
  }
  let arr = arr2.map((v) => v.length);
  for (let j = 0; j < 5; j++) {
    if (arr[0] >= 3) {
      result += 1000;
      arr[0] -= 3;
    }
    if (arr[0] > 0) {
      result += 100;
      arr[0] -= 1;
    }
    if (arr[1] >= 3) {
      result += 200;
      arr[1] -= 3;
    }
    if (arr[2] >= 3) {
      result += 300;
      arr[2] -= 3;
    }
    if (arr[3] >= 3) {
      result += 400;
      arr[3] -= 3;
    }
    if (arr[4] >= 3) {
      result += 500;
      arr[4] -= 3;
    }
    if (arr[4] > 0) {
      result += 50;
      arr[4] -= 1;
    }
    if (arr[5] >= 3) {
      result += 600;
      arr[5] -= 3;
    }
  }
  return result;
}
