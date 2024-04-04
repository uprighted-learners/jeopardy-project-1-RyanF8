async function getQuestions() {
    let fetchReturn = await fetch('./placeholderQuestions.json');
    return await fetchReturn.json()
}

const allQuestions = await getQuestions();

function findQuestion(category, value, round) {
    const questions = allQuestions[category];
    const questionValue = parseInt(value, 10);
    // Adjust the value increments to include all possible values.
    const valueIncrements = [200, 400, 600, 800, 1000, 1200, 1600, 2000];
    const index = valueIncrements.indexOf(questionValue);

    // Assuming each category has an equal number of questions for both rounds.
    const half = questions.length / 2;
    let questionIndex;

    if (round === 'first') {
        // Use the first half of questions for the first round.
        questionIndex = index % half;
    } else {
        // Use the second half of questions for the second round.
        questionIndex = Math.floor(index / 2) + half;
    }

    return questions[questionIndex];
}

// Add event listeners to each button
document.querySelectorAll('button[data-category][data-value]').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        const value = this.getAttribute('data-value');
        // Determine the round based on the presence of a data-round attribute.
        const round = this.hasAttribute('data-round') ? 'second' : 'first';
        const question = findQuestion(category, value, round);

        // Now, display the question - Replace this alert with your actual display logic.
        alert(question.question);
    });
});

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
