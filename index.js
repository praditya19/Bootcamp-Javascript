const number = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
  if (array.lenght === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
