var state = {board: [], currentGame: [], savedGames: [] };

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  addNumberToGame(5);
  removeNumberFromGame(5);
  removeNumberFromGame(2);

  console.log(state.currentGame);
   
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error('O jogo está completo.');
    return
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo.', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  var newGame = []

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i]

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }

  state.currentGame =  newGame;
}


function isNumberInGame(numberToCheck) {
  // if (state.currentGame.includes(numberToCheck)) {
  //   return true;
  // }

  // return false;

  return state.currentGame.includes(numberToCheck);

}

start();