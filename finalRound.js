import { scores } from './index.js';

// Define async function to fetch questions
async function getQuestions() {
    let fetchReturn = await fetch('./placeholderQuestions.json');
    return await fetchReturn.json();
}

// Define function to initialize the game
async function initializeGame() {
    // Fetch questions
    const allQuestions = await getQuestions(); // Wait for questions to be fetched
    console.log(allQuestions);

    // Load scores from localStorage
    let scores = loadScoresFromStorage();

    // Fetch the final question
    const finalQuestion = allQuestions.finalCategory[0].question;

    // Handle bet submission for Player 1
    const player1Submit = document.getElementById('submitBet1');
    const betInput1 = document.getElementById('betAmount1');
    const player1Bet = document.getElementById('player1Bet');
    player1Submit.addEventListener('click', (event) => {
        event.preventDefault();
        const betValue1 = parseInt(betInput1.value);
        if (betValue1 > scores.player1) {
            alert('Bet must be equal to or less than your current score');
            betInput1.value = ''; // Reset the bet value input
            return; // Stop further execution
        }
        player1Bet.textContent = `Player 1 bet: ${betValue1}`;
        document.getElementById('betForm1').style.display = 'none'; // Hide bet form for Player 1
    });

    // Handle bet submission for Player 2
    const player2Submit = document.getElementById('submitBet2');
    const betInput2 = document.getElementById('betAmount2');
    const player2Bet = document.getElementById('player2Bet');
    player2Submit.addEventListener('click', (event) => {
        event.preventDefault();
        const betValue2 = parseInt(betInput2.value);
        if (betValue2 > scores.player2) {
            alert('Bet must be equal to or less than your current score');
            betInput2.value = ''; // Reset the bet value input
            return; // Stop further execution
        }
        player2Bet.textContent = `Player 2 bet: ${betValue2}`;
        document.getElementById('betForm2').style.display = 'none'; // Hide bet form for Player 2
        // Display the final question in the question form
        document.getElementById('inputQuestion').innerText = finalQuestion;
        document.getElementById('questionForm').style.display = 'block';
    });

    // After initializing the game, you can access the updated scores
    const player1Score = parseInt(document.getElementById('player1-score').innerText);
    const player2Score = parseInt(document.getElementById('player2-score').innerText);

    // Now you can use these variables wherever needed in your JavaScript code
    console.log("Player 1 Score:", player1Score);
    console.log("Player 2 Score:", player2Score);
}

// Function to load scores from localStorage
function loadScoresFromStorage() {
    const storedScores = localStorage.getItem('playerScores'); // Retrieve data from local storage
    if (storedScores) {
        return JSON.parse(storedScores); // Parse the JSON data into an object and return it
    } else {
        console.log('no data found')
        return { player1: 0, player2: 0 }; // Return default scores if no data is found
    }
}

// Call the function to initialize the game
initializeGame();











