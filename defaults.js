const defaults = require("./test/testDefaults");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const changeName = {name: "Updated name"};

const result = defaults(testObject,changeName);

console.log(result);

