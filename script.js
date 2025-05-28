console.log("Welcome to Tic Tac Toe");

let music = new Audio("assets/Demented-Nightmare-MP3(chosic.com).mp3");
let audioTurn = new Audio("assets/ting.mp3");
let gameover = new Audio("assets/gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document.querySelector(".imgbox img").style.width = "200px";
      const line = document.querySelector(".line");
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      line.style.width = "20vw";
      gameover.play();
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        turn = changeTurn();
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// Reset Game
document.getElementById("reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0";
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.querySelector(".imgbox img").style.width = "0";
});


 // Create animated fog balls
    function createFogBall() {
      const fogBall = document.createElement('div');
      fogBall.className = 'fog-ball';
      
      // Random size between 3px and 12px (smaller for subtlety)
      const size = Math.random() * 9 + 3;
      fogBall.style.width = size + 'px';
      fogBall.style.height = size + 'px';
      
      // Random horizontal starting position
      fogBall.style.left = Math.random() * 100 + '%';
      
      // Random animation duration between 8-18 seconds
      const duration = Math.random() * 10 + 8;
      fogBall.style.animationDuration = duration + 's';
      
      // Random delay before starting
      const delay = Math.random() * 3;
      fogBall.style.animationDelay = delay + 's';
      
      // Random horizontal drift
      const drift = (Math.random() - 0.5) * 150;
      fogBall.style.setProperty('--drift', drift + 'px');
      
      document.getElementById('fogContainer').appendChild(fogBall);
      
      // Remove the fog ball after animation completes
      setTimeout(() => {
        if (fogBall.parentNode) {
          fogBall.parentNode.removeChild(fogBall);
        }
      }, (duration + delay) * 1000);
    }

    // Create fog balls continuously
    function startFogEffect() {
      // Create initial batch
      for (let i = 0; i < 12; i++) {
        setTimeout(() => createFogBall(), i * 400);
      }
      
      // Continue creating fog balls
      setInterval(createFogBall, 600);
    }

    // Start the fog effect when page loads
    window.addEventListener('load', () => {
      startFogEffect();
      initMusic();
    });