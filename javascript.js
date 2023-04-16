let playerPoints = 0;
let computerPoints = 0;
playGame();

function getPlayerChoice()
{
    let playerChoice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    if (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"))
    {
        playerChoice = prompt("Please type only 'Rock', 'Paper', or 'Scissors'. Check if you mistyped. ");
    }
    return playerChoice;
}

function getRandomChoice()
{
    let choiceNumber = Math.floor(Math.random() * 3 + 1);
    if (choiceNumber == 1)
        return "rock";
    else if (choiceNumber == 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerChoice, computerChoice)
{
    switch(playerChoice)
    {
        case "rock":
            if (computerChoice == "rock")
                return "It's a tie! Rock on Rock.";
            else if (computerChoice == "paper")
            {
                computerPoints++;
                return "You lose! Paper beats Rock.";
            }
            else
            {
                playerPoints++;
                return "You win! Rock beats Scissors."
            }
        break;

        case "paper":
            if (computerChoice == "paper")
                return "It's a tie! Paper on Paper.";
            else if (computerChoice == "scissors")
            {
                computerPoints++;
                return "You lose! Scissors beats Paper.";
            }
            else
            {
                playerPoints++;
                return "You win! Paper beats Rock.";
            }
        break;

        case "scissors":
            if (computerChoice == "scissors")
                return "It's a tie! Scissors on Scissors.";
            else if (computerChoice == "rock")
            {
                computerPoints++;
                return "You lose! Rock beats Scissors.";
            }
            else
            {
                playerPoints++;
                return "You win! Scissors beats Paper."
            }
        break;

    }
}

function showScore(playerPoints, computerPoints)
{
    let score = `Your points: ${playerPoints} \nComputer's points: ${computerPoints}`
    if (playerPoints == computerPoints)
    {
        console.log(`It's a tie. \n${score}`);
    }
    else if (playerPoints < computerPoints)
    {
        console.log(`You lost. \n${score}`);
    }
    else
    {
        console.log(`You won. \n${score}`);
    }
}

function playGame(numberOfRounds)
{
    numberOfRounds = prompt("How many rounds do you want to play? ");
    for (i = 0; i < numberOfRounds; i++)
    {
        console.log(playRound(getPlayerChoice(), getRandomChoice()));
    }
    showScore(playerPoints, computerPoints);
}