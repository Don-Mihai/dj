const city = {
    name: 'Moscow',
    coordinates: 123123413421341243,
};

const user = {
    firstName: 'Leonardo',
    age: 12,
    weight: 68,
    isWorker: false,
    city,
    sayName: function () {
        alert(`My name is ${this.firstName}`);
    },
};

user.sayName();

// user.sex = 'male';

// delete user.isWorker;

// let key = 'weight';

// console.log(user[key]);

// const key = prompt('Введите цвет:');

// document.body.style.backgroundColor = key;

// const key = prompt('Введите ключ:');

// console.log(user[key]);
