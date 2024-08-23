// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;
//BMI Calculation data 1
let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);
let markHigherBMI1 = markBMI1 > johnBMI1;
//Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
//BMI Calculation data 2
let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
let markHigherBMI2 = markBMI2 > johnBMI2;


// Output data 1
console.log("Mark's BMI data 1 : " + markBMI1.toFixed(2));
console.log("John's BMI data 1: " + johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI than John in data 1? " + markHigherBMI1);
// Output data 2
console.log("Mark's BMI data 2 : " + markBMI2.toFixed(2));
console.log("John's BMI data 2: " + johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI than John in data 2? " + markHigherBMI2);