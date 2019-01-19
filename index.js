const number = [1, 2, 3, 4];

const output = except(number, [1, 2, 3, 4]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
