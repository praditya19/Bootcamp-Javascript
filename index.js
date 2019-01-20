function number(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (-1 - discount);
}

console.log(number(0.1, 20, 30, 1));
