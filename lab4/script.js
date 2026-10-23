const first = document.getElementById("el-3");
const second = document.querySelector("body > :nth-child(4)");

first.classList.add("clickable");
first.addEventListener("click", function () {
  first.classList.toggle("mark-a");
});

second.classList.add("clickable");
second.addEventListener("click", function () {
  second.classList.toggle("mark-b");
});

const gallery = document.getElementById("gallery");
const btnAdd = document.getElementById("btn-add");
const btnGrow = document.getElementById("btn-grow");
const btnShrink = document.getElementById("btn-shrink");
const btnDelete = document.getElementById("btn-delete");

const STEP = 1.2;
const MIN_WIDTH = 50;
const MAX_WIDTH = 2000;

const template = gallery.firstElementChild.cloneNode(true);

function lastImage() {
  const img = gallery.querySelector("a:last-of-type img");
  return img;
}

function updateButtons() {
  const empty = gallery.children.length === 0;
  btnGrow.disabled = empty;
  btnShrink.disabled = empty;
  btnDelete.disabled = empty;
}

btnAdd.addEventListener("click", function () {
  gallery.appendChild(template.cloneNode(true));
  updateButtons();
});

btnGrow.addEventListener("click", function () {
  const img = lastImage();
  if (img) {
    img.width = Math.min(MAX_WIDTH, Math.round(img.width * STEP));
  }
});

btnShrink.addEventListener("click", function () {
  const img = lastImage();
  if (img) {
    img.width = Math.max(MIN_WIDTH, Math.round(img.width / STEP));
  }
});

btnDelete.addEventListener("click", function () {
  const last = gallery.lastElementChild;
  if (last) {
    gallery.removeChild(last);
  }
  updateButtons();
});

updateButtons();