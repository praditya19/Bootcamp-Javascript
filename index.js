const number = [1, -1, 2, 3];

const sum = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

let sum = 0;
for (let n of number) sum += n;

console.log(sum);
