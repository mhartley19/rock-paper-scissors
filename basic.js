
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let reset = document.querySelector("#resetButton")
let playerSelection = document.querySelector("#playerSelection")
let computerSelection = document.querySelector('#computerSelection')
let wl = document.querySelector("#winorloss")
let win = document.createTextNode("Player Wins")
let loss = document.createTextNode("Computer Wins")
let tie = document.createTextNode("It's a Tie")
let rockSmashesSci = document.createTextNode(" - Rock Smashes Scissors!")
let paperCoversRock = document.createTextNode(" - Paper Covers Rock!")
let scissorsCutPaper = document.createTextNode(" - Scissors Cut Paper!")



function computerOutput(selection) {

    let ran = Math.floor(Math.random() * 3)

    if (ran === 0) {

        if (selection === rock) {
            wl.appendChild(tie)
        }
        else if (selection === paper) {
            wl.appendChild(win)
            wl.appendChild(paperCoversRock)
        }
        else if (selection === scissors) {
            wl.appendChild(loss)
            wl.appendChild(rockSmashesSci)
        }
        let rockCopy = rock.cloneNode(true)
        return computerSelection.appendChild(rockCopy)
    }

    if (ran === 1) {

        if (selection === rock) {
            wl.appendChild(loss)
            wl.appendChild(paperCoversRock)
        }
        else if (selection === paper) {
            wl.appendChild(tie)
        }
        else if (selection === scissors) {
            wl.appendChild(win)
            wl.appendChild(scissorsCutPaper)
        }
        let paperCopy = paper.cloneNode(true)
        return computerSelection.appendChild(paperCopy)
    }

    if (ran === 2) {
        if (selection === rock) {
            wl.appendChild(win)
            wl.appendChild(rockSmashesSci)
        }
        else if (selection === paper) {
            wl.appendChild(loss)
            wl.appendChild(scissorsCutPaper)
        }
        else if (selection === scissors) {
            wl.appendChild(tie)
        }
        let scissorsCopy = scissors.cloneNode(true)
        return computerSelection.appendChild(scissorsCopy)
    }

}

let newGame = true

rock.addEventListener("click", function (event) {
    if(newGame === true){
    let rockSel = event.target
    let rockCopy = rockSel.cloneNode(true)
    playerSelection.appendChild(rockCopy)
    computerOutput(rock)
    }
    
    newGame = false
})

paper.addEventListener("click", function (event) {
    if(newGame === true){
    let paperSel = event.target
    let paperCopy = paperSel.cloneNode(true)
    playerSelection.appendChild(paperCopy)
    computerOutput(paper)}
    
    newGame= false
})

scissors.addEventListener("click", function (event) {
    if(newGame === true){
    let sciSel = event.target
    let sciCopy = sciSel.cloneNode(true)
    playerSelection.appendChild(sciCopy)
    computerOutput(scissors)}
    newGame = false
})

reset.addEventListener("click", function(event) {
    newGame = true
    window.location.reload()
})











// console.log(computerOutput())

//  let computerSelection = document.querySelector("compuerSelection")
// computerSelection.addEventListener("click", computerOutput())