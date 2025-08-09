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

function changeImg(next) {
  const oldImg = document.querySelector(`.picture :nth-child(${currImg + 1})`);
  console.log(oldImg);
  oldImg.classList.add("hideImg");

  if (next) {
    const nextImg = currImg + 1;
    const activeImg = document.querySelector(
      `.picture :nth-child(${nextImg + 1})`
    );
    activeImg.classList.remove("hideImg");
  } else {
    const lastImg = currImg - 1;
    const activeImg = document.querySelector(
      `.picture :nth-child(${lastImg + 1})`
    );
    activeImg.classList.remove("hideImg");
  }
}

function changeImgExact(index) {
  // hide old image
  const oldImg = document.querySelector(`.picture :nth-child(${currImg + 1})`);
  oldImg.classList.add("hideImg");

  // remove old circle
  const oldCircle = document.querySelector(
    `.circleWrapper :nth-child(${currImg + 1})`
  );
  console.log(oldCircle);
  oldCircle.classList.remove("activeCircle");

  //   show new image
  const activeImg = document.querySelector(`.picture :nth-child(${index + 1})`);
  activeImg.classList.remove("hideImg");

  //   show new circle
  const activeCircle = document.querySelector(
    `.circleWrapper :nth-child(${index + 1})`
  );
  activeCircle.classList.add("activeCircle");

  //   update current image
  currImg = index;
}

function nextImg() {
  if (currImg < maxIndex) {
    changeCircle(true);
    changeImg(true);
    currImg += 1;
    displayImg();
  }
}

function prevImg() {
  if (currImg >= 1) {
    changeCircle(false);
    changeImg(false);
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

const circles = document.querySelectorAll(".circle");
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    changeImgExact(i);
    changeCircleExact(i);
  });
}

function initial() {
  const firstCircle = document.querySelector(".circle");
  firstCircle.classList.add("activeCircle");
  displayImg();
  setInterval(nextImg, 5000);
}

initial();
