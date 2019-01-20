try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrances(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrances(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid Array.');

  return array.reduce((accumulator, current) => {
    const occurrance = current === searchElement ? 1 : 0;
    return accumulator + occurrance;
  }, 0);
}
