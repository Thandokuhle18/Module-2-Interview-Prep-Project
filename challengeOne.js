// Data type: string. const because my name won't change.
const fullName = "Thandokuhle Maphanga";

// Data type: number. let because my age changes every year.
let age = 22;

// Data type: boolean. let because my opinion of JavaScript might change.
let enjoyJavaScript = true;

// Data type: number (decimal). let because temperature changes.
let favTemp = 9.7;

// Data type: number (NaN). const because it's intentionally NaN and won't change.
const invalidNumber = Number("Hi, there");

// Data type: number (Infinity). const because the result of 1/0 is always Infinity.
const infiniteNum = 1 / 0;

// Data type: number. const because Number.MAX_SAFE_INTEGER is fixed.
const maximumSafeInteger = Number.MAX_SAFE_INTEGER;

// Data type: null. const because it's empty and stays that way.
const middleName = null;

// Interview answers:
// 1. The main difference between var and let is their scope. var is
// function-scoped, while let is block-scoped. This means a let variable
// declared inside a block cannot normally be accessed outside that block.
// 2. Const because you know the variable should not be assigned and it will log an error should you make that mistake. This reduces errors. Using Let only when the value needs to chnange helps make code easier to understand. 
//3. usrNm is a bad variable name because it is too abbreviated, and not easy to read or understand, I would remane it to userName and naming matters so other developers will easily understand variable.


// CHALLENGE 2: 

console.log("typeof fullName:", typeof fullName);
console.log("typeof age:", typeof age);
console.log("typeof enjoyJavaScript:", typeof enjoyJavaScript);
console.log("typeof favTemp:", typeof favTemp);
console.log("typeof invalidNumber:", typeof invalidNumber);
console.log("typeof infiniteNum:", typeof infiniteNum);
console.log("typeof maximumSafeInteger:", typeof maximumSafeInteger);
console.log("typeof middleName:", typeof middleName);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof NaN:", typeof NaN);
console.log('typeof "42":', typeof "42");
console.log("typeof (typeof 42):", typeof (typeof 42));
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);
console.log("typeof function() {}:", typeof function () {});

//Challenge 3