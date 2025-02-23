const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

function grid (size) {
container.innerHTML = "";
const squareSize = 640 / size;

for (i = 0; i < size * size; i++) {
  const divs = document.createElement("div")
    divs.classList.add("divs")
    divs.style.height = `${squareSize}px`;
    divs.style.width = `${squareSize}px`;
    
  divs.addEventListener("mouseenter", () => {
    divs.style.backgroundColor = "black";
  })
  buttons(divs);
  container.appendChild(divs);
 }
}
grid(16);

btn.addEventListener("click", () => {
  let input = prompt("Create a new sketch pad!");
  input = parseInt(input);
  if (input > 100) {
    prompt("Try again, The sketch pad can't be bigger than 100!"); 
  } else if (input === NaN) {
    grid(16)
  } else if (input = input) {
    grid(input)
  }
})

function buttons(divs) {
  btn2.addEventListener("click", () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * max - min + 1)
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    divs.addEventListener("mouseenter", () => {
    divs.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  })
  btn3.addEventListener("click", () => {
    divs.style.backgroundColor = "white";
  })
  btn4.addEventListener("click", () => {
    divs.addEventListener("mouseenter", () => {
      divs.style.backgroundColor = "black";
    })
  })
  btn5.addEventListener("click", () => {
    divs.addEventListener("mouseenter", () => {
      divs.style.backgroundColor = "white";
    })
  })
}