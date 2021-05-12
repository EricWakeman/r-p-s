const weapons = [
    { name: 'rock', img: 'ASSETS/ROCK.png' },
    { name: 'paper', img: 'ASSETS/paper.png' },
    { name: 'scissors', img: 'ASSETS/scissors.png' }
]



function drawRock() {
    let field = document.getElementById('player-weapon')
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/ROCK.png" class= "battle-card"><img/>
    `
    randomCounter()
    let result = randomCounter()

    if (result == 0) {
        drawTie()
    }
    if (result == 1) {
        drawLose()
    }
    if (result == 2) {
        drawWin()
    }
}

function drawPaper() {
    let field = document.getElementById('player-weapon')
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/paper.png" class= "battle-card"><img/>
    `
    randomCounter()
    let result = randomCounter()

    if (result == 0) {
        drawWin()
    }
    if (result == 1) {
        drawTie()
    }
    if (result == 2) {
        drawLose()
    }
}

function drawScissors() {
    let field = document.getElementById('player-weapon')
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/scissors.png" class= "battle-card"><img/>
    `
    randomCounter()
    let result = randomCounter()

    if (result == 0) {
        drawLose()
    }
    if (result == 1) {
        drawWin()
    }
    if (result == 2) {
        drawTie()
    }
}
function computerRock() {
    let field = document.getElementById("comp-weapon")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/ROCK.png" class= "battle-card"><img/>
    `
}
function computerPaper() {
    let field = document.getElementById("comp-weapon")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/paper.png" class= "battle-card"><img/>
    `
}
function computerScissors() {
    let field = document.getElementById("comp-weapon")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/scissors.png" class= "battle-card"><img/>
    `
}



function randomCounter() {
    const i = Math.floor(Math.random() * 3)
    if (i == 0) {
        computerRock()
    }
    if (i == 1) {
        computerPaper()
    }
    if (i == 2) {
        computerScissors()
    }
    return i


}

function drawTie() {
    let field = document.getElementById("caster")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/tie.png" class= "battle-card"><img/>
    `
}

function drawLose() {
    let field = document.getElementById("caster")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/lose.png" class= "battle-card"><img/>
    `
}

function drawWin() {
    let field = document.getElementById("caster")
    field.innerHTML = /*HTML*/ `
    <img src= "ASSETS/win.png" class= "battle-card"><img/>
    `
}

