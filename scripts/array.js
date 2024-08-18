// const fruits = ['apple', 'banana', 'cherry'];

// fruits[0] = 'tomato';

// fruits.push({
//     name: 'carrot',
//     age: 5,
// });

// console.log(fruits);

// const users = [
//     {
//         name: 'Moisey',
//         job: 'Prophet',
//     },
//     {
//         name: 'Ivan Pupkin',
//         job: 'быть примером',
//         age: 100,
//     },
// ];

// console.log(users);

// const numbers = [];

// for (let i = 1; i <= 10; i++) {
//     if (!(i % 2)) {
//         numbers.push(i);
//     }
// }

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i++) {
//     numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);

// const users = ['Mihai', 'Galileo', 'Zevs'];

// for (let i = 0; i < 3; i++) {
//     users[i] = 'Уважаемый, ' + users[i];
// }

// console.log(users);

// --------- map

// const users = ['Mihai', 'Galileo', 'Zevs'];

// const gretingUsers = users.map(userName => {
//     return 'Уважаемый, ' + userName;
// });

// console.log(gretingUsers, users);

// const users = [
//     {
//         name: 'Mihai',
//         age: 20,
//     },
//     {
//         name: 'Galileo',
//         age: 20,
//     },
//     {
//         name: 'Zevs',
//         age: 20,
//     },
// ];

// const names = users.map(user => {
//     return user.name;
// });

// console.log(names);

// --------- filter
// const users = ['Mihai', 'Galileo', 'Zevs'];

// const filteredUsers = users.filter(user => {
//     if (user.length > 4) {
//         return true;
//     }
// });

// console.log(filteredUsers);

// const users = [
//     {
//         name: 'Mihai',
//         age: 20,
//     },
//     {
//         name: 'Galileo',
//         age: 16,
//     },
//     {
//         name: 'Zevs',
//         age: 10,
//     },
// ];

// const newUsers = users.filter(user => {
//     return user.age > 18;
// });

// console.log(newUsers);

// --------- push pop

// const animals = ['dog', 'cat'];

// animals.push("rabbit"); // ["dog", "cat", "rabbit"]

// const lastAnimal = animals.pop(); // rabbit

// shift unshift

// const cities = ["New York", "London"];

// cities.unshift("Tokyo"); // ["Tokyo", "New York", "London"]

// const firstCity = cities.shift(); // Tokyo

// ---------- splice
// const languages = ['English', 'French', 'German'];

// languages.splice(1, 1, "Spanish", "Russian"); // Удаляет "French" и добавляет "Spanish" и "Russian" на его место

// console.log(languages);

// ---------- slice
// const colors = ['0', '1', '2', '3', '4', 'yellow'];

// const someColors = colors.slice(1, 4); // ["green", "blue"]

// console.log(someColors);

// ---------- forEach

// const numbers = [1, 2, 3, 4];

// numbers.forEach(num => {
//     console.log(num * 2);
// });

// const users = [
//     {
//         name: 'Mihai',
//         age: 20,
//     },
//     {
//         name: 'Galileo',
//         age: 16,
//     },
//     {
//         name: 'Zevs',
//         age: 10,
//     },
// ];

// users.forEach(user => {
//     console.log(user.age);
// });

// ---------- find

// const people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 30 }];

// const bob = people.find(person => person.name === "Bob"); // { name: "Bob", age: 30 }

// const bobIndex = people.findIndex(person => person.age === 30);

// console.log(bobIndex);

// ---------- reduce
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0); // 10
