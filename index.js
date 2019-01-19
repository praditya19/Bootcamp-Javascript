const number = [1, 2, 3, 4, 1];

const value = valueOccurrences(number, 1);

console.log(value);

function valueOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurance = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurance;
  }, 0);
}
