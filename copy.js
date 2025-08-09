// const number = [6,9,3,1,5];

// console.log(number.sort());

const number = [20, 40, 1, 12, 300, 400];
const sorted = number.sort(function (a, b) {
  return a - b;
});
console.log(sorted);
