// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const solution = (str) => str.split('').reverse().join('');
// console.log(solution('world'));

// function solution(str) {
//   return str.split('').reverse().join('');
// }
// console.log(solution('world'));

String.prototype.toJadenCase = function () {
  const arr = this.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(' ');
};

// function toJadenCase(str) {
//   const arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//   }
//   return arr.join(' ');
// }

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
