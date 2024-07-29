const djs = [
  {
    name: "DJ Angerone",
    imgSrc: "images/dj.png",
    bio: "Mike Myers, professionally known as DJ Angerone, is internationally acclaimed Progressive House & Trance DJ & musician.",
    quote:
      "I try to experiment with various music genres in every track that I make.",
  },
  {
    name: "DJ Second",
    imgSrc: "images/aleksandr-popov-JhYnL-BiP18-unsplash.jpg",
    bio: "Mike Myers, professionally known as DJ Angerone, is internationally acclaimed Progressive House & Trance DJ & musician.",
    quote:
      "I try to experiment with various music genres in every track that I make.",
  },
  {
    name: "DJ Third",
    imgSrc: "images/dj.png",
    bio: "Mike Myers, professionally known as DJ Angerone, is internationally acclaimed Progressive House & Trance DJ & musician.",
    quote:
      "I try to experiment with various music genres in every track that I make.",
  },
  // Add more DJ objects here
];

let currentDjIndex = 0;

document.querySelector(".left-arrow").addEventListener("click", () => {
  currentDjIndex = (currentDjIndex - 1 + djs.length) % djs.length;
  updateDj();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  currentDjIndex = (currentDjIndex + 1) % djs.length;
  updateDj();
});

function updateDj() {
  const dj = djs[currentDjIndex];
  document.querySelector(".dj__title").textContent = `About ${dj.name}`;
  document.querySelector(".dj__image").src = dj.imgSrc;
  document.querySelector(".dj__text").textContent = dj.bio;
  document.querySelector(".dj__quote").textContent = dj.quote;
}
