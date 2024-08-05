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

// --------- filter
const users = ['Mihai', 'Galileo', 'Zevs'];

const filteredUsers = users.filter(user => {
    if (user.length > 4) {
        return true;
    }
});

console.log(filteredUsers);
