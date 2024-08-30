// Test data
let bill = 275;

//Calculate the tip
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

//Print the bill, tip, and total value
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);