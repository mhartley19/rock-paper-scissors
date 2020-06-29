
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
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


rock.addEventListener("click", function (event) {
    let rockSel = event.target
    let rockCopy = rockSel.cloneNode(true)
    playerSelection.appendChild(rockCopy)
    computerOutput(rock)
})

paper.addEventListener("click", function (event) {
    let paperSel = event.target
    let paperCopy = paperSel.cloneNode(true)
    playerSelection.appendChild(paperCopy)
    computerOutput(paper)
})

scissors.addEventListener("click", function (event) {
    let sciSel = event.target
    let sciCopy = sciSel.cloneNode(true)
    playerSelection.appendChild(sciCopy)
    computerOutput(scissors)
})











// console.log(computerOutput())

//  let computerSelection = document.querySelector("compuerSelection")
// computerSelection.addEventListener("click", computerOutput())