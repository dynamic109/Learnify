const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const showBody = document.querySelector(".container");

searchBox.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
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

