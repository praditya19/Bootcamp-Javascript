function number() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(number(1, 2, 3, 4, 5, 10));
