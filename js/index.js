// Dictionary for images 
const buttonOption = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissor": "/assets/Scissors.png"
}

let SCORE = 0;                      // Global variable
// User pick function
const pickUserHand = (button) => {
    
    // hide the current page 
    let buttons = document.querySelector(".buttons");       // Making Buttons Invisible 
    buttons.style.display = "none";

    // show the next page with the hand user picked
    let contest = document.querySelector(".contest");       // Making Contest Section Visible Over Buttons
    contest.style.display = "flex";

    //set  the user pick
    document.getElementById("userPickImage").src = buttonOption[button];

    let cpHand = pickComputerHand();
    winner(button,cpHand)
    
} 
// House or Computer pick function
const pickComputerHand = () => {
    let buttons = ["rock","paper","scissor"]
    let cpHand = buttons[Math.floor(Math.random() * 3)]
    
    //set  the house pick
    document.getElementById("computerPickImage").src = buttonOption[cpHand];
    return cpHand;
}
// Choose Winner function
const winner = (userHand,cpHand) => {
    if(userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOSE!")
    }
    if(userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!")
        setScore(SCORE + 1)
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissor" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    
}
// Restart game function
const restartGame = () => {
    // hide the current page 
    let buttons = document.querySelector(".buttons");       // Making Buttons Visible Again Over Contest Section
    buttons.style.display = "flex";

    // show the next page with the hand user picked
    let contest = document.querySelector(".contest");       // Making Contest Section Invisible
    contest.style.display = "none";
}
// Decision making function
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision; 
}
// Score updating function
const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}