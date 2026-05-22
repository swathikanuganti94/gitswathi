/*import assert from "node:assert";

// This will throw an AssertionError
assert.strictEqual(2, 3, "My error message: 2 does not equal 3");

console.log(`Hello, World! This is a sample Node.js project for learning purposes.`);*/

import assert from 'assert';

// Example data
const person = { name: "Swathi", age: 25 };

// This passes silently because the condition is true
assert.strictEqual(person.name, "Swathi");

// This fails and stops the program because the age is not 30
assert.strictEqual(person.age, 25);
console.log("this script is running good");