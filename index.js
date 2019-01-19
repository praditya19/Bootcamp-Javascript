const first = [{ id: 1 }];
const second = [4, 5, 6];

const combinasi = first.concat(second);
first[0].id = 10;

const slice = combinasi.slice();

console.log(combinasi);
console.log(slice);
