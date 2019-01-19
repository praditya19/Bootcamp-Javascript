const first = [1, 2, 3];
const second = [4, 5, 6];

//const combinasi = first.concat(second);
const combinasi = [...first, 'a', ...second, 'b'];

//const copy = combinasi.slice();
const copy = [combinasi];
