const linkElements = document.querySelectorAll(".nav__link");

linkElements.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === editedUrl) {
    link.classList.add("nav__link--selected");
  }
});
