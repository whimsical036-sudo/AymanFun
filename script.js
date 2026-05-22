
const button = document.getElementById("clickButton");
const countText = document.getElementById("clickCount");

let count = 0;

countText.textContent = count;

button.addEventListener("click", () => {
  count++;
  countText.textContent = count;
});
