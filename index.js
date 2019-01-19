const choice = [
  { id: 1, name: 'node.js' },
  { id: 2, name: 'javaScript' },
  { id: 2, name: 'React Js' },
  { id: 2, name: 'React Native' }
];

choice.sort(function(a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(choice);
