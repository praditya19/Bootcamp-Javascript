let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
};

function showAddresse(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddresse(address);
