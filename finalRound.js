import { scores } from './index.js';//import the scores from index.js


async function getQuestions() {//function to grab the questions from json file
    let fetchReturn = await fetch('./placeholderQuestions.json');
    return await fetchReturn.json();
}

// function to hold final round
   async function initializeFinalRound() {
    // Fetch all questions
    const allQuestions = await getQuestions(); 

    // Load scores from localStorage
    let scores = loadScoresFromStorage();
    //get final question and answer
    const finalQuestion = allQuestions.finalCategory[0].question
    console.log(finalQuestion)
    const finalAnswer = allQuestions.finalCategory[0].answer.toLowerCase();
    console.log(finalAnswer)

    
    // Handle bet submission for Player 1
    const player1Submit = document.getElementById('submitBet1');
    const betInput1 = document.getElementById('betAmount1');
    const player1Bet = document.getElementById('player1Bet');
    player1Submit.addEventListener('click', (event) => {//onclick check if bet is allowed and if so put it on the page
        event.preventDefault();
        const betValue1 = parseInt(betInput1.value);
        if (betValue1 > scores.player1) {
            alert('Bet must be equal to or less than your current score');
            return; // Stop further execution
        }
        player1Bet.textContent = `Player 1 bet: ${betValue1}`;
        document.getElementById('betForm1').style.display = 'none'; // Hide bet form for Player 1
    });

    // Handle bet submission for Player 2
    const player2Submit = document.getElementById('submitBet2');
    const betInput2 = document.getElementById('betAmount2');
    const player2Bet = document.getElementById('player2Bet');
    player2Submit.addEventListener('click', (event) => {//onclick check if bet is allowed and if so put it on the page
        event.preventDefault();
        const betValue2 = parseInt(betInput2.value);
        if (betValue2 > scores.player2) {
            alert('Bet must be equal to or less than your current score');
            return; // Stop further execution
        }
        player2Bet.textContent = `Player 2 bet: ${betValue2}`;
        document.getElementById('betForm2').style.display = 'none'; // Hide bet form for Player 2
        // Display the final question after the play 2 bet has been submitted
        document.getElementById('inputQuestion').innerText = finalQuestion;
        document.getElementById('questionForm').style.display = 'block';
    });

    // variable to handle scores brought over from index.js
    const player1Score = parseInt(document.getElementById('player1-score').innerText);
    const player2Score = parseInt(document.getElementById('player2-score').innerText);
    //console log to make sure scores were brought over correctly from index.js
    console.log("Player 1 Score:", player1Score);
    console.log("Player 2 Score:", player2Score); 

    function player1FinalScore() {//function to handle the final answer for player one, went downhill from here and started running into errors probably cause by trying to do two js scripts which I thought would be easier for the final page but hey I learned a lot by doing this at least
        let player1AnswerInput = document.getElementById('answerInput')
        player1AnswerInput = player1AnswerInput.value;
        if (player1AnswerInput === finalAnswer) {
            console.log('its working for player 1')
        } else {
            console.log('error player 1')
        }
        console.log(player1AnswerInput)
    }
    player1FinalScore();
}





function loadScoresFromStorage() {// Function to load scores from localStorage
    const storedScores = localStorage.getItem('playerScores'); 
    if (storedScores) {
        return JSON.parse(storedScores); // Parse the JSON data into an object and return it
    } else {
        console.log('no scores found')
        return { player1: 0, player2: 0 }; // Return default scores if no data is found
    }
}

// calling the final round to start
initializeFinalRound();













