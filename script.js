const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const firstContainer = document.getElementById("container-1");
const secondContainer = document.getElementById("container-2");
let text = "";

searchBox.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
  text = searchBtn.textContent;
  console.log(text);
  searchBtn.style.paddingRight = "3.5rem";
});

searchBtn.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
  searchBtn.style.paddingRight = "3.5rem";
});

searchBtn.addEventListener("focusout", function () {
  searchBtn.textContent = "Tap";
  searchBtn.style.paddingRight = "";
});

searchBox.addEventListener("focusout", function () {
  searchBtn.textContent = "Tap";
});

searchBtn.addEventListener("click", function () {
  if (text === "Search") {
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
  } else {
    searchBox.style.border = "2px solid purple";
  }
});
