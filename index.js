function createAddress(street, city, zipCode) {
  return {
    street: 'a',
    city: 'b',
    zipCode: 'c'
  };
}

function showAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
