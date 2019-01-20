function tahun(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(tahun(10000, undefined, 5));
