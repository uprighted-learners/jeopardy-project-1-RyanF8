 // Import scores from index.js
 import { scores } from './index.js';

 // Function to grab the questions
 async function getQuestions() {
     let fetchReturn = await fetch('./placeholderQuestions.json');
     return await fetchReturn.json();
 }
 
 // Function to hold the final round
 async function initializeFinalRound() {
     // Fetch all questions
     const allQuestions = await getQuestions(); 
 
     // Load scores from localStorage
     let scores = loadScoresFromStorage();
 
     // Get final question and answer
     const finalQuestion = allQuestions.finalCategory[0].question;
     const finalAnswer = allQuestions.finalCategory[0].answer.toLowerCase();
 
     // Handle bet submission for Player 1
     const player1Submit = document.getElementById('submitBet1');
     const betInput1 = document.getElementById('betAmount1');
     const player1Bet = document.getElementById('player1Bet');
     player1Submit.addEventListener('click', (event) => {
         event.preventDefault();
         const betValue1 = parseInt(betInput1.value);
         if (betValue1 > scores.player1) {
             alert('Bet must be equal to or less than your current score');
             return;
         }
         player1Bet.textContent = `Player 1 bet: ${betValue1}`;
         document.getElementById('betForm1').style.display = 'none'; 
         document.getElementById('inputQuestion').innerText = finalQuestion;
         document.getElementById('questionForm').style.display = 'block';
         scores.player1Bet = betValue1;
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
             return;
         }
         player2Bet.textContent = `Player 2 bet: ${betValue2}`;
         document.getElementById('betForm2').style.display = 'none'; 
         document.getElementById('inputQuestion').innerText = finalQuestion;
         document.getElementById('questionForm').style.display = 'block';
         scores.player2Bet = betValue2;
     });
 
     // Handle final answer submission
     const submitFinalAnswer = document.getElementById('submitAnswer');
     const answerInput = document.getElementById('answerInput');
     submitFinalAnswer.addEventListener('click', (event) => {
         event.preventDefault();
         const answer = answerInput.value.toLowerCase();
         if (answer === finalAnswer) {
             if (scores.player1Bet) {
                 scores.player1 += scores.player1Bet;
             }
             if (scores.player2Bet) {
                 scores.player2 += scores.player2Bet;
             }
             alert('Correct answer!');
         } else {
             if (scores.player1Bet) {
                 scores.player1 -= scores.player1Bet;
             }
             if (scores.player2Bet) {
                 scores.player2 -= scores.player2Bet;
             }
             alert('Incorrect answer!');
         }
         // Update scores displayed on the page
         document.getElementById('player1-score').innerText = scores.player1;
         document.getElementById('player2-score').innerText = scores.player2;
         // Save updated scores to localStorage
         saveScoresToStorage();
         scores.player1Bet = 0;
         scores.player2Bet = 0;
         answerInput.value = '';
         document.getElementById('questionForm').style.display = 'none';
         document.getElementById('betForm1').style.display = 'none';
         document.getElementById('betForm2').style.display = 'none';
         // Switch to Player 2's turn
         document.getElementById('player-turn').innerText = "Player 2's Turn";
         document.getElementById('betForm2').style.display = 'block';
     });

     // Function to handle the winner
const endGameButton = document.getElementById('endGame');

endGameButton.addEventListener('click', (event) => {
    event.preventDefault();

    const gameWinner = () => {
        // Determine the winner and display the result
        if (scores.player1 > scores.player2) {
            alert('Player 1 wins!');
        } else if (scores.player1 < scores.player2) {
            alert('Player 2 wins!');
        } else {
            alert("It's a tie!");
        }
        window.location.href = 'homePage.html';
    };
    gameWinner(); 
});
 }
 
// Function to load scores from localStorage
function loadScoresFromStorage() {
    const storedScores = localStorage.getItem('playerScores'); 
    if (storedScores) {
        const parsedScores = JSON.parse(storedScores);
        console.log('Loaded scores from localStorage:', parsedScores);
        return parsedScores;
    } else {
        console.log('No scores found in localStorage, using default scores:', scores);
        return scores; 
    }
}
 
 // Function to save scores to localStorage incase of page refresh
 function saveScoresToStorage() {
     localStorage.setItem('playerScores', JSON.stringify(scores));
 }


initializeFinalRound();






 

 