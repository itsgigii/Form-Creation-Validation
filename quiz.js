// Function to check the user's answer
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Step 3: Get feedback element
    const feedback = document.getElementById("feedback");

    // Step 4: Check if an option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "#dc3545"; // red
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// Step 6: Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
