let number = [1, 2, 3, 4];
let another = number;

// solution 1
number = [];

// solution 2
number.lenght = 0;

// solution 3
number.splice(0, number.lenght);

// solution 4
while (number.lenght > 0);
number.pop();

console.log(number);
console.log(another);
