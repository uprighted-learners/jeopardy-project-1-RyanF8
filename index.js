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
    
    let currentPlayer = 1; // Player turn and point holder
    let scores = { player1: 0, player2: 0 };

    // Load scores from localStorage if available
    loadScoresFromStorage();

    //variable to hold boxes selected to allow my next round button to be disabled
    let clickedBoxes = 0;
    // let totalBoxes = document.querySelectorAll('button[data-category][data-value]').length;
    let totalBoxes = 30;

    function findQuestion(category, value, round) {
        const questions = allQuestions[category];
        const questionValue = parseInt(value, 10);
        const valueIncrements = [200, 400, 600, 800, 1000, 1200, 1600, 2000];
        const index = valueIncrements.indexOf(questionValue);
        const half = questions.length / 2;
        let questionIndex;

        if (round === 'first') {
            questionIndex = index % half;
        } else {
            questionIndex = Math.floor(index / 2) + half;
        }

        return questions[questionIndex];
    }
    
    let currentCategory;
    let currentValue;
    let currentRound;

    // Add event listeners to each button
    document.querySelectorAll('button[data-category][data-value]').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            const value = this.getAttribute('data-value');
            // Determine the round based on the presence of a data-round attribute.
            const round = this.hasAttribute('data-round') ? 'second' : 'first';
            currentCategory = category;
            currentValue = value;
            currentRound = round;
            const question = findQuestion(category, value, round);

            //hides categories and shows question plus answer form
            document.getElementById('questionForm').style.display = 'block';
            document.getElementById('inputQuestion').innerText = question.question;
            document.querySelector('.catboard').style.display = 'none';
            //hide questions that were clicked
            this.disable = true;
            this.classList.add('disabled')
            //increment boxes selected
            clickedBoxes++;
            console.log(clickedBoxes)
            
            //check if all boxes are clicked and enable my next round button(need to make this)
            // if (clickedBoxes !== totalBoxes) {
            //     document.getElementById('round2').style.display = 'none';
            // } else {

            // }
        });
    });

    function submitAnswer() {
        const submitButton = document.getElementById('submitAnswer');
        const answerInput = document.getElementById('answerInput');
        const passButton = document.getElementById('passQuestion');

        passButton.addEventListener('click', (event) => {//if pass is press then switch player
            event.preventDefault();
            switchPlayer();
        });

        submitButton.addEventListener('click', (event) => {//pull the value of the users answer to compare it to the correct answer in the if statement
            event.preventDefault();
            const answerValue = answerInput.value.toLowerCase();

            //get the correct answer to the question asked 
            const currentQuestion = findQuestion(currentCategory, currentValue, currentRound); // Retrieve the current question
            const correctAnswer = currentQuestion.answer.toLowerCase(); // Get the correct answer

            if (answerValue === correctAnswer) {//if answer is correct then alert the players and add points to the current player
                alert('Correct!');
                scores[`player${currentPlayer}`] += parseInt(currentValue);
                document.getElementById("player" + currentPlayer + "-score").innerText = scores["player" + currentPlayer];
                saveScoresToStorage();

            } else {//if answer is wrong the subtract points and switch players
                alert('Wrong Answer!')
                scores[`player${currentPlayer}`] -= parseInt(currentValue);
                document.getElementById("player" + currentPlayer + "-score").innerText = scores["player" + currentPlayer];
                switchPlayer();
                saveScoresToStorage();
            }

            // after answer, clear the answer field, hide the question, and show the categories again
            answerInput.value = '';
            document.getElementById('questionForm').style.display = 'none';
            document.querySelector('.catboard').style.display = 'grid';
        });
    }

    function switchPlayer() { //function to switch player turn
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
        document.getElementById('player-turn').innerText = `Player ${currentPlayer}'s Turn`;
    }

    function loadScoresFromStorage() {
        const storedScores = localStorage.getItem('playerScores');
        if (storedScores) {
            scores = JSON.parse(storedScores);
            // Update scores displayed on the page
            document.getElementById("player1-score").innerText = scores["player1"];
            document.getElementById("player2-score").innerText = scores["player2"];
        }
    }
    console.log(scores.player1)
    console.log(scores.player2)

    function saveScoresToStorage() {
        localStorage.setItem('playerScores', JSON.stringify(scores));
        
    }
    function clearScores() {
        scores.player1 = 0;
        scores.player2 = 0;
        // Update scores displayed on the page
        document.getElementById("player1-score").innerText = scores.player1;
        document.getElementById("player2-score").innerText = scores.player2;
        // Clear scores from localStorage
        localStorage.removeItem('playerScores');
    }
    document.getElementById("clearScoresButton").addEventListener("click", clearScores);

    // Call submitAnswer function to initialize it
    submitAnswer();
}
export let scores = { player1: 0, player2: 0 } 
// Call the function to initialize the game
initializeGame();









/*showing which player turn it is,
on box click display question,
await user response on question,
then check if answer is correct,
if answer is correct then add points to player count, if wrong subtract points and ask other player the question,
if pass switch to other player and ask the same question,
whoever gets the question right picks the next question,
when 1 player has 1000 points or board is clear then show next round button.

NEXT ROUND
repeat round 1 steps.

FINAL JEOPARDY
ask players how much they want to wager,
then display wager amount (think of DOM),
ask both players to set answers to given question then compare answers if there answer is right then add there wager to points, if wrong then subtract wager from points,
then declare winner based off points.
// log category one
console.log(allQuestions.categoryOne)

**think about using dom to create elements and appending child**
// dynamically render all questions for categoryOne
allQuestions.categoryOne.forEach((question) => {
    console.log(question)

think about state machine when implementing score up or down
*/

// export default placeholderQuestions;
// import placeholderQuestions from "../placeholder-questions.json";
//use your catboard div to hide your jeopardy board and display the question + answer box
//write out your player points so that it just adds one point then find where that value of the question lays and use that







