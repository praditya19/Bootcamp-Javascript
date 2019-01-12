function binus123(marks) {
  const average = binusverage(marks);
  if (average < 60) return 'f';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function binusverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}
