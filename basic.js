
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const selector = document.querySelectorAll('.selector')
const playerSelection = document.querySelector("#playerSelection")
const computerSelection = document.querySelector('#computerSelection')
const wl = document.querySelector("#winorloss")
let win = document.createTextNode("Player Wins")
let loss = document.createTextNode("Computer Wins")
let tie = document.createTextNode("It's a Tie")



function computerOutput(x){

    let ran = Math.floor(Math.random()*3)
    
    if (x === ran){
        wl.appendChild(tie)
    }

   
   
    if (ran === 0) {
       let rockCopy =  rock.cloneNode(true)
       return computerSelection.appendChild(rockCopy)

    }
    if (ran === 1){
        let paperCopy = paper.cloneNode(true)
        return computerSelection.appendChild(paperCopy)
    }

    if (ran === 2){
        let scissorsCopy = scissors.cloneNode(true)
        return computerSelection.appendChild(scissorsCopy)
 
    }
}



rock.addEventListener("click", function(event) {
    
    let rockSel = event.target
    let rockCopy = rockSel.cloneNode(true)
    playerSelection.appendChild(rockCopy)
    computerOutput(0)
    
    
})


paper.addEventListener("click", function(event) {
    let paperSel = event.target
    let paperCopy = paperSel.cloneNode(true)
    playerSelection.appendChild(paperCopy)
    computerOutput(1)
    
    
})


scissors.addEventListener("click", function(event) {
    let sciSel = event.target
    let sciCopy = sciSel.cloneNode(true)
    playerSelection.appendChild(sciCopy)
    computerOutput(2)
})











// console.log(computerOutput())

//  const computerSelection = document.querySelector("compuerSelection")
// computerSelection.addEventListener("click", computerOutput())