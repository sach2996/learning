//first step
console.log("hello world");

//Section 2- interpreted language
// console.log(a); // it should throw error at this line as JS is interpreted language which executes line by line

//section 3
//Why JS better than other languages(99% of websites requires JS)
//why JS wont go away? because all websites will require replatforming as well as we will need new browsers
//it is dynamic(loosely) typed language

//section 4
//Single threaded nature of JS
//this is why it is considered to be a bad language for scalable systems
//there is a way to make it use all cores of your machine(e.g. clustered modules)

//section 5
//simple primitives
//Variables(let, var, const)
//Data types- strings, numbers, arrays, booleans
//if/else, for loop
// Lets write some code
//1. Write a program to greet a person given their first and last name
// const firstName = "John";
// const lastName = "Doe";
// console.log(`Hello ${firstName} ${lastName}`);
//2. Write a program to greet a person based on their gender
// let gender = "Male";
// if (gender === "Male") {
//   console.log("Hello Mr. John");
// } else {
//   console.log("Hello Ms. Kylie");
// }
//3. write a program thar count 0-10 and prints(for loop)
// let answer = 0;
// for (let i = 0; i <= 1000; i++) {
//   answer = answer + i;
// }
// console.log(answer);

//Section 6
//function
// function sum(a, b) {
//   return a + b;
// }
// const value = sum(1, 2);
// console.log(value);

//Trivia
// let sum = 0;
// for (let i = 0; i < 100000000000; i++) {
//   sum = sum + i;
// }
// console.log(sum);
//What should happen here?
// it should take nearly 100% core process

//Section 7
//Callbacks
//1.take function as an argument

// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// You are only allowed to call one function after this
// // How will you displayResult of a sum
// function sum(num1, num2, callback) {
//   let result = num1 + num2;
//   callback(result);
//   return result;
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }
// console.log(sum(1, 3, displayResult));
