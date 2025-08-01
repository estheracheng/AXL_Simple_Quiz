  if (userAnswer) {
       const userValue = userAnswer.value; 
       if (userValue === correctAnswer) {
           document.getElementById('feedback').textContent = "Correct! Well done."; 
       } else {
           document.getElementById('feedback').textContent = "That's incorrect. Try again!"; 
       }
   } else {
       document.getElementById('feedback').textContent = "Please select an answer."; 
   }
