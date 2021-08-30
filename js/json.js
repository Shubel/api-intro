// JavaScript object Notation
const student = {
    id: "171-15-8622",
    name: "Shubel islam Sunny",
    subject: "Computer Science and Engineering"
};
console.log(student);

// object to stringify
const stringified = JSON.stringify(student);
console.log(stringified);

// stringify to object
const object = JSON.parse(stringified);
console.log(object);

// get object property
console.log(student.id);
console.log(stringified.id);  // undefined
