let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;

let field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function startGame() {

    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    renderBoard(field);
}

function click(row, col) {

    if (counter % 2 === 0) {
        activePlayer = 0
    } else {
        activePlayer = 1
    }


    field[row][col] = players[activePlayer];
    renderBoard(field);


    counter++;

}
