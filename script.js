// 

let count = localStorage.getItem("clickCount") || 0;

const countText = document.getElementById("clickCount");
const button = document.getElementById("clickButton");

countText.textContent = count;

// ADDS TO COUNTER WHEN BUTTON IS CLICKED
button.addEventListener("click", () => {
  count++;

  localStorage.setItem("clickCount", count);

  countText.textContent = count;
});
