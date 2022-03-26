// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const solution = (str) => str.split('').reverse().join('');
// console.log(solution('world'));

// function solution(str) {
//   return str.split('').reverse().join('');
// }
// console.log(solution('world'));

// String.prototype.toJadenCase = function () {
//   const arr = this.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr.join(' ');
// };

// function toJadenCase(str) {
//   const arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr.join(' ');
// }

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// function digitize(n) {
//   const arr = [];
//   const str = n.toString();
//   for (item of str) {
//     arr.unshift(parseInt(item));
//   }
//   return arr;
// }
// console.log(digitize(123456));

// function countMs(text) {
//   let count = 0;
//   for (ch of text) {
//     if (ch === 'm' || ch === 'M') count += 1;
//   }
//   return count;
// }
// console.log(countMs('doc'));

// function removeVowels(doc) {
//   let result = '';
//   for (let ch of doc) {
//     if (
//       ch != 'a' &&
//       ch != 'e' &&
//       ch != 'i' &&
//       ch != 'o' &&
//       ch != 'u' &&
//       ch != 'y'
//     ) {
//       result += ch;
//     }
//   }
//   return result;
// }

// console.log(removeVowels('document'));

// function makeAbbr(words) {
//   words = words.trim();
//   let resultAbbr = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i - 1] === ' ' && words[i] !== ' ') {
//       resultAbbr += words[i];
//     }
//   }
//   return resultAbbr.toUpperCase();
// }
// console.log(makeAbbr('    jjgjgjgjg     ffreddd itititi sfrrtr'));

// function decryptMessage(message) {
//   let result = '';
//   for (let i = message.length - 1; i >= 0; i--) {
//     result += message[i];
//   }
//   return result;
// }
// console.log(decryptMessage('!!!reeb gniknird ekil eW'));

// function isWerewolf(target) {
//   let direct = '';
//   let reversed = '';
//   for (let char of target) {
//     if (char !== ' ' || char !== '.') {
//       direct += char;
//       reversed = char + reversed;
//     }
//   }
//   return direct.toLowerCase() === reversed.toLowerCase();
// }
// console.log(isWerewolf('home'));

// function createArray(N) {
//   let numbers = [];
//   for (let i = 1; i <= N; i++) {
//     if (N === 0) {
//       return numbers;
//     }
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArray(0));

// function doublePower(currentPowers) {
//   let resultArr = [];
//   for (let i = 0; i < currentPowers.length; i++) {
//     resultArr.push(currentPowers[i] * 2);
//   }
//   return resultArr;
// }
// console.log(doublePower([100, 150, 200, 220]));

// function isSorted(boxNumbers) {
//   for (let i = 1; i <= boxNumbers.length; i += 1) {
//     if (boxNumbers[i - 1] > boxNumbers[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted([3, 7, 1]));

// function getLocation(coordinates, commands) {
//   let x = coordinates[0];
//   let y = coordinates[1];
//   for (let i = 0; i <= commands.length; i++) {
//     if (commands[i] === 'forward') {
//       y += 1;
//     } else if (commands[i] === 'back') {
//       y -= 1;
//     } else if (commands[i] === 'right') {
//       x += 1;
//     } else if (commands[i] === 'left') {
//       x -= 1;
//     }
//   }
//   return [x, y];
// }
// console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));

// function getPlan(startProduction, numberOfMonths, percent) {
//   let goals = [];
//   let currentProduction = startProduction;
//   for (let i = 0; i < numberOfMonths; i++) {
//     currentProduction += (currentProduction * percent) / 100;
//     goals.push(currentProduction);
//   }
//   return goals;
// }
// console.log(getPlan(200, 3, 50));

// function getSpeedStatistic(testResults) {
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }
//   let max = testResults[0];
//   let min = testResults[0];
//   let sum = testResults[0];
//   for (let i = 1; i < testResults.length; i++) {
//     if (testResults[i] > max) {
//       max = testResults[i];
//     }
//     if (testResults[i] < min) {
//       min = testResults[i];
//     }
//     sum += testResults[i];
//   }
//   let average = Math.floor(sum / testResults.length);
//   return [min, max, average];
// }
// console.log(getSpeedStatistic([12]));

// function compareRobots(firstRobotResults, secondRobotResults) {
//   let firstRes = 0;
//   let secondRes = 0;
//   for (let firstValue of firstRobotResults) {
//     firstRes += firstValue;
//   }
//   for (let secondValue of secondRobotResults) {
//     secondRes += secondValue;
//   }
//   if (firstRes > secondRes) {
//     return 'First robot for sale';
//   } else if (firstRes === secondRes) {
//     return 'Both robots for sale';
//   } else {
//     ('Second robot for sale');
//   }
// }
// console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]));

// function checkNumber(number) {
//   let positive = true;
//   let even = true;
//   let thirdVal = true;
//   if (number <= 0) {
//     positive = false;
//   }
//   if (number % 2 !== 0) {
//     even = false;
//   }
//   if (number % 10 !== 0) {
//     thirdVal = false;
//   }
//   return [positive, even, thirdVal];
// }
// console.log(checkNumber(0));

// function getArraysSum(arr1, arr2) {
//   if (arr1.length === 0 || arr2.length === 0) {
//     return 0;
//   }
//   let firstRes = 0;
//   let secondRes = 0;
//   for (let item1 of arr1) {
//     firstRes += item1;
//   }
//   for (let item2 of arr2) {
//     secondRes += item2;
//   }
//   return firstRes + secondRes;
// }
// console.log(getArraysSum([], []));

// function combineArrays(first, second) {
//   if (first.length === 0 || second.length === 0) {
//     return [];
//   }
//   let newArr = [];
//   for (let i = 0; i < first.length; i++) {
//     newArr.push(first[i] + second[i]);
//   }
//   return newArr;
// }
// console.log(combineArrays([], []));

// function splitString(str) {
//   if (str.length % 2 !== 0) {
//     str += '_';
//     console.log(str);
//   }
//   let arr = [];
//   for (let i = 0; i < str.length; i += 2) {
//     arr.push(str[i] + str[i + 1]);
//   }
//   return arr;
// }
// console.log(splitString('abcd'));

// function scrollingText(word) {
//   let newArr = [];
//   for (let i = 0; i < word.length; i++) {
//     newArr.push(word.toUpperCase().slice(i) + word.toUpperCase().slice(0, i));
//   }
//   return newArr;
// }
// console.log(scrollingText('robot'));

// function isSpecialNumber(n) {
//   const str = n.toString();
//   const numbers = ['0', '1', '2', '3', '4', '5'];
//   for (let i = 0; i < str.length; i++) {
//     if (!numbers.includes(str[i])) {
//       return 'NOT!!';
//     }
//   }
//   return 'Special!!';
// }
// console.log(isSpecialNumber(39));

// function isTidy(number) {
//   const str = number.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > str[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isTidy(589));

// function isJumping(number) {
//   const str = number.toString();
//   if (str.length === 1) {
//     return 'JUMPING';
//   }
//   for (let i = 1; i < str.length; i++) {
//     if (Math.abs(str[i] - str[i - 1]) !== 1) {
//       return 'NOT JUMPING';
//     }
//   }
//   return 'JUMPING';
// }
// console.log(isJumping(90));

// function getSum(numbers) {
//   let resultSum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     resultSum += numbers[i];
//   }
//   return resultSum;
// }
// console.log(getSum([-7, 2, 3]));

// function checkSubstring(text, part) {
//   if (text.toLowerCase().includes(part.toLowerCase())) {
//     return true;
//   }
//   return false;
// }

// console.log(checkSubstring('Mate academy', 'school'));

// function findSmallestElement(numbers) {
//   // return Math.min(...numbers);
//   let minNumber;
//   for (let i = 0; i < numbers.length; i++) {
//     minNumber = Math.min(numbers[i]);
//   }
//   return minNumber;
// }
// console.log(findSmallestElement([5, 2, 8, 12, 6]));

// function hasNoneLetters(blacklist, phrase) {
//   for (let letter of blacklist) {
//     if (phrase.toLowerCase().includes(letter.toLowerCase())) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(hasNoneLetters('Mate Academy', 'pqrs'));

// function removeVowelKeys(keys) {
//   const vowels = 'aeiouy';
//   let resultArr = [];
//   for (let key of keys) {
//     if (!vowels.includes(key.toLowerCase().charAt(0))) {
//       resultArr.push(key);
//     }
//   }
//   return resultArr;
// }
// console.log(
//   removeVowelKeys(['alarm', 'chip', 'isValid', 'Advice', 'onClick', 'have'])
// );

// function getLongestString(strings) {
//   let longestStr = strings[0].length;
//   let result = strings[0];
//   for (let i = 1; i < strings.length; i++) {
//     if (strings[i].length > longestStr) {
//       result = strings[i];
//       longestStr = strings[i].length;
//     }
//   }
//   return result;
// }
// console.log(getLongestString(['One', 'two', 'three', 'four']));

// function removeSmallest(numbers) {
//   let result = [];
//   const minValue = Math.min(...numbers);

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > minValue) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }
// console.log(removeSmallest([2, 2, 8, 2, 9]));

// function findNeedle(haystack) {
//   const keyWord = 'needle';
//   let index = haystack.indexOf(keyWord);
//   return `found the ${keyWord} at position ${index}`;
// }
// console.log(
//   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// );

// var min = function (list) {
//   list.splice(Math.min(...list));
//   return list[0];
// };
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// function doubleInteger(i) {
//   parseInt(i);
//   return (i *= i);
// }
// console.log(doubleInteger(2));

// function findSum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   }
//   return result;
// }
// console.log(findSum(10));

// function reverseLetter(str) {
//   let replacedStr = str.replace(/[^a-zA-Z]/g, '');
//   let splitStr = replacedStr.split('').reverse().join('');
//   return splitStr;
// }
// console.log(reverseLetter('ultr53o?n'));

function checkExam(array1, array2) {
 if(array1[0])
 }
 console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));