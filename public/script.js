// import { Card } from "./card.js";

const infoDisplay = document.querySelector('#info');
const singlePlayerButton = document.querySelector('#singlePlayerButton');
const multiPlayerButton = document.querySelector('#multiPlayerButton');

let currentPlayer = 'user'

let gameMode = '';
let playerNum = 0;
let ready = false;
let opponentReady = false;

function combatResult(playerOneCard, playerTwoCard) {
  return (playerOneCard.chosenAbility > playerTwoCard.chosenAbility)
    ? playerOneCard : playerTwoCard;
}

// Select Player Mode
singlePlayerButton.addEventListener('click', startSinglePlayer);
multiPlayerButton.addEventListener('click', startMultiPlayer);

const socket = io();

// Multiplayer
function startMultiPlayer() {
  gameMode = 'multiPlayer';

  // Get your player number
  socket.on('player-number', num => {
    if (num === -1) {
      infoDisplay.innerHTML = 'Servidor cheio';
    } else {
      playerNum = parseInt(num);
      if (playerNum === 1) currentPlayer = 'opponent';

      console.log(playerNum);
    }
  });

  // Another player has connected or disconnected
  socket.on('player-connection', num => {
    console.log(`Player number ${num} has connected or disconnected`);
    playerConnectedOrDisconnected(num);
  });
  function playerConnectedOrDisconnected(num) {
    let player = `.p${parseInt(num) + 1}`;
    document.querySelector(`${player} .connected span`).classList.toggle('green');
    if (parseInt(num) === playerNum) document.querySelector(player).style.fontWeight = 'bold';
  }
}

// Single Player
function startSinglePlayer() {
  gameMode = 'singlePlayer';

  // Computer logic here
  // Start game
}