const searchBtn = document.getElementById("search-btn");
const searchBoxAll = document.getElementById("search-box-all");
const firstContainer = document.getElementById("container-1");
const secondContainer = document.getElementById("container-2");
const secondInput = document.getElementById("search-box-2");
let text = "";

let inputText = searchBox.value;

searchBox.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
  text = searchBtn.textContent;

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

  console.log(searchBox.value);
  console.log(secondInput.value);
});

searchBtnAll.addEventListener("click", function () {
  console.log(secondInput.value);
});
