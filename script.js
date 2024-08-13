let gameTree = document.getElementById('game-tree');
let currentPlayer = 'X';

// Representa o estado inicial do jogo
let initialState = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Cria o jogo inicial
createGame(initialState, gameTree);

function createGame(state, parentElement) {
    let game = document.createElement('div');
    game.classList.add('game');
    parentElement.appendChild(game);

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        game.appendChild(row);

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = state[i][j];
            row.appendChild(cell);

            if (state[i][j] === ' ') {
                cell.addEventListener('click', () => {
                    game.innerHTML = ''; // Limpa o jogo
                    let newState = JSON.parse(JSON.stringify(state));
                    newState[i][j] = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    generateNextStates(newState, game);
                }, { once: true });
            }
        }
    }
}

function generateNextStates(state, parentElement) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (state[i][j] === ' ') {
                let newState = JSON.parse(JSON.stringify(state));
                newState[i][j] = currentPlayer;
                createGame(newState, parentElement);
            }
        }
    }
}