console.log("HEYO");

let images = new Array();
let currImg = 0;
// number of images so u dont increment too much
const maxIndex = 2;

function changeCircle(next) {
  const oldCircle = document.querySelector(
    `.circleWrapper :nth-child(${currImg + 1})`
  );
  console.log(oldCircle);
  oldCircle.classList.remove("activeCircle");

  if (next) {
    const nextCircle = currImg + 1;
    const activeCircle = document.querySelector(
      `.circleWrapper :nth-child(${nextCircle + 1})`
    );
    activeCircle.classList.add("activeCircle");
  } else {
    const lastCircle = currImg - 1;
    const activeCircle = document.querySelector(
      `.circleWrapper :nth-child(${lastCircle + 1})`
    );
    activeCircle.classList.add("activeCircle");
  }
}

function nextImg() {
  if (currImg < maxIndex) {
    changeCircle(true);
    currImg += 1;
    displayImg();
  }
}

function prevImg() {
  if (currImg >= 1) {
    changeCircle(false);
    currImg -= 1;
    displayImg();
  }
}

function getCurrImg() {
  return images[currImg];
}

const image = document.querySelector(".picture");
function displayImg() {
  const imgToDisplay = getCurrImg();
  image.textContent = currImg;
}

// query selectors
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  prevImg();
});
nextBtn.addEventListener("click", () => {
  nextImg();
});

function initial() {
  const firstCircle = document.querySelector(".circle");
  firstCircle.classList.add("activeCircle");
  displayImg();
}

initial();
