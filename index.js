function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const myCircle1 = createCircle(1);

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}
