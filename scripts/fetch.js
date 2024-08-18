// let isLoading = true;
// fetch('https://jsonplaceholder.typicode.com/users?name=Clementine Bauch&email=Nathan@yesenia.net')
//     .then(data => {
//         return data.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(() => {
//         console.log('Пришла ошибка, и что делать с этим непонятно');
//     })
//     .finally(() => {
//         isLoading = false;
//     });

// if (isLoading) {
//     console.log('Загрузка...');
// } else {
//     console.log('Загрузка завершена');
// }

// axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
//     console.log(data.data);
// });

// const cont = document.querySelector('.users-container');

const getUsers = async () => {
  try {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users");
    let users = data.data;

    cont.innerHTML = users
      .map((user) => {
        return `<h2>${user.name}</h2>`;
      })
      .join("");

    return users;
  } catch (error) {
    return [];
  }
};

// document.onload = getUsers();

const cont = document.querySelector(".users-container");

const getPhotos = async () => {
  const photos = (
    await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
  ).data;

  cont.innerHTML = photos.map((image) => {
    return `<img src="${image.thumbnailUrl}" />`;
  });

  container.innerHTML = `<div></div>`;
};

document.onload = getPhotos();
