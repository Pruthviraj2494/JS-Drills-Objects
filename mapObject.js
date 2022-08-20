const mapObject = require("./test/testMapObject");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
 
const cb = (val)=> val + "   verified"; // verified //

const result = mapObject(testObject,cb);

console.log(result);