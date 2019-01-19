const number = [1, -1, 2, 3];

const items = number
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);
