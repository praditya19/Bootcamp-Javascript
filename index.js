const number = [1, 2, 3, 4];

console.log(includes(number, -1));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
