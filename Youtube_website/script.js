const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".menu-button");
const themeButton = document.querySelector(".theme-button i");

themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeButton.classList.toggle("fa-sun", isDarkMode);
  themeButton.classList.toggle("fa-moon", !isDarkMode);
});

menuButton.addEventListener("click", () => {
  console.log("menubar clicked");

  document.body.classList.toggle("sidebar-hidden");
});
