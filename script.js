const openMenuBtn = document.getElementById("openMenuButton");
const nav = document.getElementById("nav");
const hideMenu = document.getElementById("hideMenu");

// console.log(openMenuBtn);
// console.log(hideMenu);

// let isOpen = false;




openMenuBtn.addEventListener("click", () => {
  nav.style.top = "69px";
  openMenuBtn.style.display = "none"
  hideMenu.style.display = "block"  

});
hideMenu.addEventListener("click", () => {
  nav.style.top = "-200px";
  openMenuBtn.style.display = "flex"
  hideMenu.style.display = "none"

});
