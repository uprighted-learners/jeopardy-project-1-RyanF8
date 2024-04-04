async function getQuestions() {
let fetchReturn=await fetch('./placeholderQuestions.json');
    return await fetchReturn.json()
}
const allQuestions = await getQuestions() //This contains all my questions in it assigned to allQuestions
console.log(allQuestions)
console.log('hello page 1')
//repeat this process below to fill in your questions
const nature0 = document.querySelector('.r1c1')
nature0.addEventListener('click', () => {
    nature0.textContent=allQuestions.categoryOne[0].question
});
const nature1 = document.querySelector('.r2c1')
nature1.addEventListener('click', () => {
    nature1.textContent=allQuestions.categoryOne[1].question
});
const nature2 = document.querySelector('.r3c1')
nature2.addEventListener('click', () => {
    nature2.textContent=allQuestions.categoryOne[2].question
});
const nature3 = document.querySelector('.r4c1')
nature3.addEventListener('click', () => {
    nature3.textContent=allQuestions.categoryOne[3].question
});
const nature4 = document.querySelector('.r5c1')
nature4.addEventListener('click', () => {
    nature4.textContent=allQuestions.categoryOne[4].question
});
const animals0 = document.querySelector('.r1c2')
animals0.addEventListener('click', () => {
    animals0.textContent=allQuestions.categoryTwo[0].question
});
const animals1 = document.querySelector('.r2c2')
animals1.addEventListener('click', () => {
    animals1.textContent=allQuestions.categoryTwo[1].question
});
const animals2 = document.querySelector('.r3c2')
animals2.addEventListener('click', () => {
    animals2.textContent=allQuestions.categoryTwo[2].question
});
const animals3 = document.querySelector('.r4c2')
animals3.addEventListener('click', () => {
    animals3.textContent=allQuestions.categoryTwo[3].question
});
const animals4 = document.querySelector('.r5c2')
animals4.addEventListener('click', () => {
    animals4.textContent=allQuestions.categoryTwo[4].question
});
const computers0 = document.querySelector('.r1c3')
computers0.addEventListener('click', () => {
    computers0.textContent=allQuestions.categoryThree[0].question
});
const computers1 = document.querySelector('.r2c3')
computers1.addEventListener('click', () => {
    computers1.textContent=allQuestions.categoryThree[1].question
});
const computers2 = document.querySelector('.r3c3')
computers2.addEventListener('click', () => {
    computers2.textContent=allQuestions.categoryThree[2].question
});
const computers3 = document.querySelector('.r4c3')
computers3.addEventListener('click', () => {
    computers3.textContent=allQuestions.categoryThree[3].question
});
const computers4 =  document.querySelector('.r5c3')
computers4.addEventListener('click', () => {
    computers4.textContent=allQuestions.categoryThree[4].question
});
const mythology0 = document.querySelector('.r1c4')
mythology0.addEventListener('click', () => {
    mythology0.textContent=allQuestions.categoryFour[0].question
});
const mythology1 = document.querySelector('.r2c4')
mythology1.addEventListener('click', () => {
    mythology1.textContent=allQuestions.categoryFour[1].question
});
const mythology2 = document.querySelector('.r3c4')
mythology2.addEventListener('click', () => {
    mythology2.textContent=allQuestions.categoryFour[2].question
});
const mythology3 = document.querySelector('.r4c4')
mythology3.addEventListener('click', () => {
    mythology3.textContent=allQuestions.categoryFour[3].question
});
const mythology4 = document.querySelector('.r5c4')
mythology4.addEventListener('click', () => {
    mythology4.textContent=allQuestions.categoryFour[4].question
});
const history0 = document.querySelector('.r1c5')
history0.addEventListener('click', () => {
    history0.textContent=allQuestions.categoryFive[0].question
});
const history1 = document.querySelector('.r2c5')
history1.addEventListener('click', () => {
    history1.textContent=allQuestions.categoryFive[1].question
});
const history2 = document.querySelector('.r3c5')
history2.addEventListener('click', () => {
    history2.textContent=allQuestions.categoryFive[2].question
});
const history3 = document.querySelector('.r4c5')
history3.addEventListener('click', () => {
    history3.textContent=allQuestions.categoryFive[3].question
});
const history4 = document.querySelector('.r5c5')
history4.addEventListener('click', () => {
    history4.textContent=allQuestions.categoryFive[4].question
});
const general0 = document.querySelector('.r1c6')
general0.addEventListener('click', () => {
    general0.textContent=allQuestions.categorySix[0].question
});
const general1 = document.querySelector('.r2c6')
general1.addEventListener('click', () => {
    general1.textContent=allQuestions.categorySix[1].question
});
const general2 = document.querySelector('.r3c6')
general2.addEventListener('click', () => {
    general2.textContent=allQuestions.categorySix[2].question
});
const general3 = document.querySelector('.r4c6')
general3.addEventListener('click', () => {
    general3.textContent=allQuestions.categorySix[3].question
});
const general4 = document.querySelector('.r5c6')
general4.addEventListener('click', () => {
    general4.textContent=allQuestions.categorySix[4].question
});



//Round 2 question code
console.log('hello page 2')

const nature5 = document.querySelector('.r1c1R2')
nature5.addEventListener('click', () => {
    nature5.textContent=allQuestions.categoryOne[5].question
});
const nature6 = document.querySelector('.r2c1R2')
nature6.addEventListener('click', () => {
    nature6.textContent=allQuestions.categoryOne[6].question
});
const nature7 = document.querySelector('.r3c1R2')
nature7.addEventListener('click', () => {
    nature7.textContent=allQuestions.categoryOne[7].question
});
const nature8 = document.querySelector('.r4c1R2')
nature8.addEventListener('click', () => {
    nature8.textContent=allQuestions.categoryOne[8].question
});
const nature9 = document.querySelector('.r5c1R2')
nature9.addEventListener('click', () => {
    nature9.textContent=allQuestions.categoryOne[9].question
});
const animals5 = document.querySelector('.r1c2R2')
animals5.addEventListener('click', () => {
    animals5.textContent=allQuestions.categoryTwo[5].question
});
const animals6 = document.querySelector('.r2c2R2')
animals6.addEventListener('click', () => {
    animals6.textContent=allQuestions.categoryTwo[6].question
});
const animals7 = document.querySelector('.r3c2R2')
animals7.addEventListener('click', () => {
    animals7.textContent=allQuestions.categoryTwo[7].question
});
const animals8 = document.querySelector('.r4c2R2')
animals8.addEventListener('click', () => {
    animals8.textContent=allQuestions.categoryTwo[8].question
});
const animals9 = document.querySelector('.r5c2R2')
animals9.addEventListener('click', () => {
    animals9.textContent=allQuestions.categoryTwo[9].question
});
const computers5 = document.querySelector('.r1c3R2')
computers5.addEventListener('click', () => {
    computers5.textContent=allQuestions.categoryThree[5].question
});
const computers6 = document.querySelector('.r2c3R2')
computers6.addEventListener('click', () => {
    computers6.textContent=allQuestions.categoryThree[6].question
});
const computers7 = document.querySelector('.r3c3R2')
computers7.addEventListener('click', () => {
    computers7.textContent=allQuestions.categoryThree[7].question
});
const computers8 = document.querySelector('.r4c3R2')
computers8.addEventListener('click', () => {
    computers8.textContent=allQuestions.categoryThree[8].question
});
const computers9 =  document.querySelector('.r5c3R2')
computers9.addEventListener('click', () => {
    computers9.textContent=allQuestions.categoryThree[9].question
});
const mythology5 = document.querySelector('.r1c4R2')
mythology5.addEventListener('click', () => {
    mythology5.textContent=allQuestions.categoryFour[5].question
});
const mythology6 = document.querySelector('.r2c4R2')
mythology6.addEventListener('click', () => {
    mythology6.textContent=allQuestions.categoryFour[6].question
});
const mythology7 = document.querySelector('.r3c4R2')
mythology7.addEventListener('click', () => {
    mythology7.textContent=allQuestions.categoryFour[7].question
});
const mythology8 = document.querySelector('.r4c4R2')
mythology8.addEventListener('click', () => {
    mythology8.textContent=allQuestions.categoryFour[8].question
});
const mythology9 = document.querySelector('.r5c4R2')
mythology9.addEventListener('click', () => {
    mythology9.textContent=allQuestions.categoryFour[9].question
});
const history5 = document.querySelector('.r1c5R2')
history5.addEventListener('click', () => {
    history5.textContent=allQuestions.categoryFive[5].question
});
const history6 = document.querySelector('.r2c5R2')
history6.addEventListener('click', () => {
    history6.textContent=allQuestions.categoryFive[6].question
});
const history7 = document.querySelector('.r3c5R2')
history7.addEventListener('click', () => {
    history7.textContent=allQuestions.categoryFive[7].question
});
const history8 = document.querySelector('.r4c5R2')
history8.addEventListener('click', () => {
    history8.textContent=allQuestions.categoryFive[8].question
});
const history9 = document.querySelector('.r5c5R2')
history9.addEventListener('click', () => {
    history9.textContent=allQuestions.categoryFive[9].question
});
const general5 = document.querySelector('.r1c6R2')
general5.addEventListener('click', () => {
    general5.textContent=allQuestions.categorySix[5].question
});
const general6 = document.querySelector('.r2c6R2')
general6.addEventListener('click', () => {
    general6.textContent=allQuestions.categorySix[6].question
});
const general7 = document.querySelector('.r3c6R2')
general7.addEventListener('click', () => {
    general7.textContent=allQuestions.categorySix[7].question
});
const general8 = document.querySelector('.r4c6R2')
general8.addEventListener('click', () => {
    general8.textContent=allQuestions.categorySix[8].question
});
const general9 = document.querySelector('.r5c6R2')
general9.addEventListener('click', () => {
    general9.textContent=allQuestions.categorySix[9].question
});











//function and variables to check answer/disable buttons
const answerKeyOne = allQuestions.categoryOne.answer
const answerInput = document.getElementById('input')
const submitAnswer = document.getElementById('submitAnswer')
const passTurn = document.getElementById('passTurn')
const answerValue = answerInput.value
// async function answerCheck() {
//     let playerResponse = await answerInput.value.toLowerCase()
//      if (playerResponse === answe ) {
       
// answerCheck();




// let playerOne = playerOne;
let playerOneScore = 0;
// let playerTwo = playerTwo;
let playerTwoScore = 0;

// const playerTurn = document.getElementById('playerTurn')
// const changeTurn = document.getElementById('pass')

//while player has not answered incorrectly then keep it to player ones turn, else change to player 2's turn

// function changePlayer() {
// if (playerOneScore--) {//this will be if player gets answer wrong then change, this is temporary code to check things
// document.getElementById("playerTurn").innerHTML = "Player Turn: 2"
// } else {
//     console.log("still the same")
// }
// }
// changePlayer();






























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

**think about using dom to create elements and appending child**

think about state machine when implementing score up or down
*/

// export default placeholderQuestions;
// import placeholderQuestions from "../placeholder-questions.json";