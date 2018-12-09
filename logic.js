let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;

let field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let winField = [
    [
        [players[activePlayer], players[activePlayer], players[activePlayer]],
        ['', '', ''],
        ['', '', '']
    ],
    [
        ['', '', ''],
        [players[activePlayer], players[activePlayer], players[activePlayer]],
        ['', '', '']
    ],
    [
        ['', '', ''],
        ['', '', ''],
        [players[activePlayer], players[activePlayer], players[activePlayer]]
    ],
    [
        [players[activePlayer], '', ''],
        [players[activePlayer], '', ''],
        [players[activePlayer], '', '']
    ],
    [
        ['', players[activePlayer], ''],
        ['', players[activePlayer], ''],
        ['', players[activePlayer], '']
    ],
    [
        ['', '', players[activePlayer]],
        ['', '', players[activePlayer]],
        ['', '', players[activePlayer]]
    ],
    [
        [players[activePlayer], '', ''],
        ['', players[activePlayer], ''],
        ['', '', players[activePlayer]]
    ],
    [
        ['', '', players[activePlayer]],
        ['', players[activePlayer], ''],
        [players[activePlayer], '', '']
    ],
];

function startGame() {

    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    renderBoard(field);
    counter = 0;
}

function click(row, col) {

    if (counter % 2 == 0) {
        activePlayer = 0;
    } else {
        activePlayer = 1;
    }

    field[row][col] = players[activePlayer];
    renderBoard(field);

    for (let i = 0; i < field.length; i++) {
        // console.log(field[i])
        // console.log(winField[i][1])

        if (field[i] == winField[i][0] || field[i] == winField[i][1] || field[i] == winField[i][2]) {
            showWinner(activePlayer);
        }

        counter++;
    }
}