console.log(sum(1, 2, 3, 4));

function sum(...items) {
  if (items.lenght === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}
