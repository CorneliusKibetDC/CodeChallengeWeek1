// Importing a readline module that takes input from users
const readline = require('readline');

// Creating interface for reading input from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function for calculating Tax based on KRA
function calculateTax(grossSalary) {
  let tax = 0;

  // KRA Tax rates for 2023 (as per provided link
  if (grossSalary <= 24000) {
    tax = grossSalary * 0.1; 
  } else if (grossSalary <= 32333) {
    tax = 2400 + (grossSalary - 24000) * 0.25; // 25% interest salary between 24,001 and 32,333
  } else {
    tax = 4483.25 + (grossSalary - 32333) * 0.30; // 30% interest for salary above 32,333
  }

  return tax;
}

// Function for calculating NHIF Deductions based on the  NHIF table
function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) {
    return 150;
  } else if (grossSalary <= 7999) {
    return 300;
  } else if (grossSalary <= 11999) {
    return 400;
  } else if (grossSalary <= 14999) {
    return 500;
  } else if (grossSalary <= 19999) {
    return 600;
  } else if (grossSalary <= 24999) {
    return 750;
  } else if (grossSalary <= 29999) {
    return 850;
  } else if (grossSalary <= 34999) {
    return 900;
  } else if (grossSalary <= 39999) {
    return 950;
  } else if (grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary <= 79999) {
    return 1400;
  } else if (grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary <= 99999) {
    return 1600;
  } else {
    return 1700; // anything above 100,000
  }
}

// Function for calculating NSSF Deductions
function calculateNSSF(grossSalary) {
  const nssfRate = 0.06;

  let nssfDeduction = grossSalary * nssfRate;
  return nssfDeduction;
}

//Function for calculating net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculating deductions
  const payeeTax = calculateTax(grossSalary);
  const nhifDeduction = calculateNHIF(grossSalary);
  const nssfDeduction = calculateNSSF(grossSalary);

  // Calculating net salary
  const netSalary = grossSalary - (payeeTax + nhifDeduction + nssfDeduction);

  // Output details
  console.log(" Salary Breakdown ");
  console.log("Gross Salary: KES", grossSalary.toFixed(2));
  console.log("Payee (Tax): KES", payeeTax.toFixed(2));
  console.log("NHIF Deduction: KES", nhifDeduction.toFixed(2));
  console.log("NSSF Deduction: KES", nssfDeduction.toFixed(2));
  console.log("Net Salary: KES", netSalary.toFixed(2));
  
}

// Prompt user for inputing using readline module
rl.question("Enter basic salary (KES): ", function(basicSalaryInput) {
  rl.question("Enter benefits (KES): ", function(benefitsInput) {
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    // Validate inputs from the users
    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter valid numbers.");
    } else {
      // Calculating net salary
      calculateNetSalary(basicSalary, benefits);
    }

    // Close the readline interface
    rl.close();
  });
});
