let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#comp_score");



let genComputerChoice = () =>{
    // rock , paper, scissors
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw. Play again.";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
 
let playGame = (userChoice) =>{
    console.log("User choice =", userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("Comp choice =", compChoice);
    if(userChoice===compChoice)
    {
        drawGame();     //draw game
    }
    else{
        let userWin =true;
        if(userChoice==="rock")
        {
            //scissors, paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            //rock, scissors
            userWin = compChoice==="scissors" ? false : true;
        }
        else
        {
            //rock, paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}




choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});