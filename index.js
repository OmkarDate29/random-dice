var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;

changeImage(r1, ".img1");
changeImage(r2, ".img2");

if (r1 > r2) {
  document.querySelector("h1").textContent = "Player 1 Win";
} else if (r1 < r2) {
  document.querySelector("h1").textContent = "Player 2 Win";
} else {
  document.querySelector("h1").textContent = "Refresh Me";
}

console.log(r1 + " " + r2);

function changeImage(randomValue, className) {
  if (randomValue == 1) {
    document.querySelector(className).setAttribute("src", "images/dice1.png");
  } else if (randomValue == 2) {
    document.querySelector(className).setAttribute("src", "images/dice2.png");
  } else if (randomValue == 3) {
    document.querySelector(className).setAttribute("src", "images/dice3.png");
  } else if (randomValue == 4) {
    document.querySelector(className).setAttribute("src", "images/dice4.png");
  } else if (randomValue == 5) {
    document.querySelector(className).setAttribute("src", "images/dice5.png");
  } else if (randomValue == 6) {
    document.querySelector(className).setAttribute("src", "images/dice6.png");
  }
}
