const invert = require("./test/testInvert");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const result = invert(testObject);

console.log(result);