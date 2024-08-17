// function sayGreetings(name) {
//   return "Hello, " + name;
// }
//
// console.log(sayGreetings("MIhai"));

const sayGreetings = () => {
  const userName = prompt("What is your name?");
  const age = prompt("How old are you?");
  // return "Hello, " + userName + "Как дела?" + "я знаю, что тебе" + age + "лет";
  return `Hello, ${userName}, how are you? I know that you are ${age} years old`;
};

console.log(sayGreetings());

// let userName = "Mihai";
//
// const sayGreetings = () => {
//   let userName = "Ivan";
//
//   console.log(userName); // ivan
// };
//
// sayGreetings();
//
// console.log(userName); // mihai

// function outerFunction() {
//   let outerVariable = "I'm from outer function";
//
//   function innerFunction() {
//     let innerVariable = "I'm from inner function";
//     console.log(outerVariable); // Можно обратиться к outerVariable
//     console.log(innerVariable); // Можно обратиться к innerVariable
//   }
//
//   innerFunction();
//
//   // Нельзя обратиться к innerVariable из этой области
//   // console.log(innerVariable); // Ошибка: innerVariable is not defined
// }
//
// outerFunction();
//
// // Нельзя обратиться к outerVariable из этой области
// // console.log(outerVariable); // Ошибка: outerVariable is not defined

// const bar = () => {
//   console.log("bar");
// };
//
// foo();
// function foo() {
//   console.log("foo");
// }
//
// const boo = function () {
//   console.log("boo");
// };

// let age = prompt("Сколько вам лет?");
//
// let accessAllowed = age > 18 ? true : false;
//
// alert(accessAllowed);

