function checkAnswer() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.classList.remove('correct', 'incorrect');
    if (!selected) {
        feedback.textContent = 'Please select an answer';
        feedback.classList.add('incorrect');
        return;
    }
    if (selected.value === '4') {
        feedback.textContent = 'Correct! Well done.';
        feedback.classList.add('correct');
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.classList.add('incorrect');
    }
}
