const number = [1, -1, 2, 3];

const atLeastOnePositive = number.some(function(value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
