let XHasBeenHit = false;
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

    if (XHasBeenHit == false) {
        setBox(gameboard, boxIndex, "X")
        XHasBeenHit = true;
    }
    didPlayerWin("X")
    didPlayerWin("O")
    if (XHasBeenHit == true) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        bfjPlacement()    
        XHasBeenHit = false;
    }
   
    didPlayerWin("bfj")
    //Win
    let XWon = didPlayerWin("X")
    let OWon = didPlayerWin("O")

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
    
    }
    if (XWon == true) {
        console.log("X Won")
    }
    if (OWon == true) {
        console.log("O Won")
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
const pictureList = ["../bfjpics/bfj-wins.jpg", "../bfjpics/Big_Pun_1999.jpg", "../bfjpics/big-pun-height-weight-age-body-statistics.jpg", "../bfjpics/Big-Pun.jpg", "../bfjpics/Big-Pun2.jpg", "../big-punisher-167466.jpg", "../iconpic.jpg"]

function randomPicture(pictureList) {
    let randomPickedPicture = pictureList[Math.floor(Math.random()*6)]
    let bigFatJoe = document.querySelector(".bigFatJoe")
    console.log(bigFatJoe)
    bigFatJoe.src=randomPickedPicture
}
