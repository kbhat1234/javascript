// we cannot use names of reserved keywords as variable name.
// cannot start with digit as variable name
// should have meaningful name for declaring
// case sensitive
// cannot contain the space or hypen.

let firstName = 'karthik';
let lastName = 'bhat';
let initialName = undefined;
let age = 41;
let isApproved;
let id = null;

console.log("firstName is " +firstName);
console.log("typeof firstName is " +typeof(firstName));

/* Outout:
firstName is karthik
typeof firstName is string
*/

console.log("lastName is " +lastName);
console.log("typeof lastName is " +typeof(lastName));

/* Output
lastName is bhat
typeof lastName is string
*/

console.log("initialName is " +initialName);
console.log("typeof initialName is " +typeof(initialName));

/* Output
initialName is undefined
typeof initialName is undefined
*/

console.log("age is " +age);
console.log("typeof age is " +typeof(age));

/* Output
age is 41
typeof age is number
*/

console.log("isApproved is " +isApproved);
console.log("typeof isApproved is " +typeof(isApproved));

/* Output
isApproved is undefined
typeof isApproved is undefined
*/

console.log("id is " +id);
console.log("typeof id is " +typeof(id));

/* Output
id is null
typeof id is object
*/

let id1 = 2388;
let isTrue = true;
let inName = 'k';

console.log("id1 is " +id1);
console.log("typeof id1 is " +typeof(id1));

/* Output
id1 is 2388
typeof id1 is number
*/

console.log("isTrue is " +isTrue);
console.log("typeof isTrue is " +typeof(isTrue));

/* Output
isTrue is true
typeof isTrue is boolean
*/

console.log("inName is " +inName);
console.log("typeof inName is " +typeof(inName))