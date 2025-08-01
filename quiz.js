function checkFilesExistence() {
    const files = ['index.html', 'style.css', 'quiz.js'];
    let score = 0;

    files.forEach(file => {
        if (fileExists(file) && !isFileEmpty(file)) {
            score++;
        }
    });

    return score;
}
function checkAnswerFunctionExists() {
    return typeof checkAnswer === 'function' ? 1 : 0;
}
function getCorrectAnswer() {
    return correctAnswer; 
}
function getUser SelectedAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    return selectedAnswer ? selectedAnswer.value : null;
}
function compareAnswers(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}
function provideFeedback(isCorrect) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = isCorrect ? 'Correct answer!' : 'Incorrect answer, try again.';
}
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = getUser SelectedAnswer();
    const correctAnswer = getCorrectAnswer();
    const isCorrect = compareAnswers(userAnswer, correctAnswer);
    provideFeedback(isCorrect);
});
