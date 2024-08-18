const url = window.location.pathname;
const editedUrl = url.replace("/", "");

const link = document.querySelector(`.nav__link[href="${editedUrl}"]`);

link.classList.add("nav__link--selected");
