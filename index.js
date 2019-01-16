const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

const course = courses.findIndex(function(course) {
  return course.name === 'a';
});

console.log(course);
