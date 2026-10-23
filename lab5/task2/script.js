const VARIANT = 2;
const SIZE = 6;
const grid = document.getElementById("grid");
const palette = document.getElementById("palette");

let n = 1;
for (let r = 0; r < SIZE; r++) {
  const tr = grid.insertRow();
  for (let c = 0; c < SIZE; c++) {
    const td = tr.insertCell();
    td.textContent = n++;
  }
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0")
  );
}

const target =
  grid.rows[Math.floor((VARIANT - 1) / SIZE)].cells[(VARIANT - 1) % SIZE];
target.classList.add("target");

target.addEventListener("mouseover", function () {
  target.style.backgroundColor = randomColor();
});

target.addEventListener("click", function () {
  target.style.backgroundColor = palette.value;
});

target.addEventListener("dblclick", function () {
  const col = target.cellIndex;
  for (let r = 0; r < grid.rows.length; r++) {
    grid.rows[r].cells[col].style.backgroundColor = palette.value;
  }
});
