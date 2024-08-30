// Function to calculate average score
function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Data 1
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

// Calculate average scores
let dolphinsAvg = calculateAverage(dolphinsScores);
let koalasAvg = calculateAverage(koalasScores);

//Compare the team's average scores to determine the winner
if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg) {
    console.log("Koalas win the trophy!");
} else {
    console.log("It's a draw!");
}

// Bonus 1: Minimum score of 100 to win
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Dolphins win the trophy with the minimum score rule!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Koalas win the trophy with the minimum score rule!");
} else {
    console.log("No team wins the trophy based on the minimum score rule.");
}

// Bonus 2: Minimum score of 100 for a draw
if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("It's a draw with the minimum score rule!");
} else {
    console.log("No team wins the trophy based on the draw rule.");
}