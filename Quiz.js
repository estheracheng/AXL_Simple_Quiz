  if (userAnswer) {
       const userValue = userAnswer.value; // Get the value of the selected radio button
       // Compare the user's answer with the correct answer
       if (userValue === correctAnswer) {
           document.getElementById('feedback').textContent = "Correct! Well done."; // Correct answer feedback
       } else {
           document.getElementById('feedback').textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
       }
   } else {
       document.getElementById('feedback').textContent = "Please select an answer."; // Prompt to select an answer
   }
