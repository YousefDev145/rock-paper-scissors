let playerPoints = 0;
let computerPoints = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerDisplay = document.querySelector('.player-points');
const computerDisplay = document.querySelector('.computer-points');
const roundDisplay = document.querySelector('.round');
const endgameNotes = document.querySelector('.endgame-notes');
rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);

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

function showScore()
{
    playerDisplay.textContent = `Your Points: ${playerPoints}`;
    computerDisplay.textContent = `Computer's Points: ${computerPoints}`;
}

function playGame(e)
{
    roundDisplay.textContent = playRound(e.target.id, getRandomChoice());
    showScore();
    if (playerPoints == 5 || computerPoints == 5) endGame();
}

function endGame()
{
    rockBtn.removeEventListener('click', playGame);
    paperBtn.removeEventListener('click', playGame);
    scissorsBtn.removeEventListener('click', playGame);
    roundDisplay.textContent = playerPoints > computerPoints ? 'You won against the computer!' : 'You lost against the computer!'
    endgameNotes.textContent = 'Press F5 or refresh the page to restart'
}