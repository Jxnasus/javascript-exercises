async function boxClicked(boxIndex) {
    let gameboard = document.querySelector(".game-board")
    let soNichtFreundchen = document.querySelector(".soNichtFreundchen")
    


    if (gameboard.children[boxIndex].innerHTML != "") {

        soNichtFreundchen.classList.remove("hidden")
        return
    }
    else {
        soNichtFreundchen.classList.add("hidden")
    }

randomPicture(pictureList)

    setBox(gameboard, boxIndex, "X")
    
    if (didPlayerWin("X") == true) {
        console.log("Checking if X Won")
        return declareWin("X")
        
    }
    console.log(areAllBoxesFilled(), didPlayerWin("X"), didPlayerWin("O"))
    if (areAllBoxesFilled() == true && didPlayerWin("X") == false && didPlayerWin("O") == false) {
        console.log("Checking if everything is full, X didn't Win and O didn't Win")
        declareWin("draw")
    }
    if (areAllBoxesFilled() == false) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Placing bjf's O")
        bfjPlacement()
        console.log("Checking if O Won")
        didPlayerWin("O")
    }
    
    //Win
    let XWon = didPlayerWin("X")
    let OWon = didPlayerWin("O")
    let draw = areAllBoxesFilled() == true && didPlayerWin("X") == false && didPlayerWin("O") == false

    

    if (XWon == true) {
        console.log("You Won")
        return declareWin("X")
    }
    if (OWon == true) {
        console.log("Big Fat Joe Won")
        return declareWin("O")
    }
    if (draw == true) {
        console.log("draw")
        return declareWin("draw")
    }
}
function setBox(gameboard, boxIndex, value) {
    gameboard.children[boxIndex].innerHTML = value
}

function getBox(boxIndex) {
    let gameboard = document.querySelector(".game-board")
    return gameboard.children[boxIndex].innerHTML
}
function bfjPlacement() {
    let boxIndex =  Math.floor(Math.random()*9)
    let gameboard = document.querySelector(".game-board")
    if (gameboard.children[boxIndex].innerHTML != "") {
        return bfjPlacement()
    }
    else {
        setBox(gameboard, boxIndex, "O")
    }
}
const pictureList = ["../bfjpics/bfj-wins.jpg", "../bfjpics/Big_Pun_1999.jpg", "../bfjpics/big-pun-height-weight-age-body-statistics.jpg", "../bfjpics/Big-Pun.jpg", "../bfjpics/Big-Pun2.jpg", "../bfjpics/big-punisher.jpg", "../bfjpics/iconpic.jpg"]

function randomPicture(pictureList) {
    let randomPickedPicture = pictureList[Math.floor(Math.random()*6)]
    let bigFatJoe = document.querySelector(".bigFatJoe")
    console.log(bigFatJoe)
    bigFatJoe.src=randomPickedPicture
}

function areAllBoxesFilled() {
    for (let i = 0; i < 9; i++) {
        if (getBox(i) == "") {
            return false;
        }
    }
    return true;
}
function didPlayerWin(playerCharacter) {
        
    //Diagonal
    if (getBox(0) == playerCharacter && getBox(4) == playerCharacter && getBox(8) == playerCharacter) {
        return true
    }
    if (getBox(2) == playerCharacter && getBox(4) == playerCharacter && getBox(6) == playerCharacter) {
        return true
    }
    //Vertikal
    if (getBox(0) == playerCharacter && getBox(3) == playerCharacter && getBox(6) == playerCharacter) {
        return true
    }
    if (getBox(1) == playerCharacter && getBox(4) == playerCharacter && getBox(7) == playerCharacter) {
        return true
    }
    if (getBox(2) == playerCharacter && getBox(5) == playerCharacter && getBox(8) == playerCharacter) {
        return true
    }
    //Horizontal
    if (getBox(0) == playerCharacter && getBox(1) == playerCharacter && getBox(2) == playerCharacter) {
        return true
    }
    if (getBox(3) == playerCharacter && getBox(4) == playerCharacter && getBox(5) == playerCharacter) {
        return true
    }
    if (getBox(6) == playerCharacter && getBox(7) == playerCharacter && getBox(8) == playerCharacter) {
        return true
    }
    return false
    
}
function declareWin(Winner) {
    let heading = document.querySelector(".heading")
    if (Winner == "X") {
        bfjText("X")
        return heading.innerHTML = "Du hast Big Fat Joe besiegt!"
    }
    if (Winner == "O") {
        bfjText("O")
        return heading.innerHTML = "Big Fat Joe hat dich zerstört! RIP!"
    }
    if (Winner == "draw") {
        return heading.innerHTML = "Unentschieden!"
    }
}

function bfjText(Winner) {
    let bfjText = document.querySelector(".bfjText")
    bfjWins = [ "HAHA! Niemand kann mich schlagen!",
                "Ich bin unbesiegbar!",
                "Big Fat Joe gewinnt mal wieder!",
                "BOOM! Zerstört hab ich dich!",
                "So läuft das! Niemand besiegt Big Fat Joe in Tic Tac Toe!",
                "Du bist keine Herrausforderung. Komm wieder wenn du besser bist!" ]
    bfjLose = [ "Was?! Das kann nicht sein!",
                "Du Schummler schummelst!",
                "Revanche! Ich war noch nicht warmgespielt.",
                "Wa..Was? Verloren? DAS KANN NICHT SEIN",
                "Das gibts doch nicht! Du schummelst oder so!",
                "Denkst auch ich hab ernst gespielt oder? Revanche, und diesmal spiel ich richtig!"]
    draw    = [ "Nochmal von vorne!",
                "Boah ey, spiel doch gescheit.",
                "Ehrlich jetzt? Dann eben nochmal.",
                "Nochmal.",
                "So ein Mist, dann eben nochmal von vorne!",
                "Mach doch mal richtig ._.]" ]
    if (Winner == "O") {
        bfjText.innerHTML = bfjWins[Math.floor(Math.random()*5)]
        return
    }
    if (Winner == "X") {
        bfjText.innerHTML = bfjLose[Math.floor(Math.random()*5)]
    }
    else {
        bfjText.innerHTML = draw[Math.floor(Math.random()*5)]
    }
    }

