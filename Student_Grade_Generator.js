const read_input_output = require('readline');
const ri = read_input_output.createInterface({
  input: process.stdin,
  output: process.stdout
});
//prompt user to input grade
ri.question("Enter the student's marks (marks must be between 0 and 100 to get valid grade): ", function(marks) {
    //checking the marks and determining whast grade
  if (marks >= 0 && marks <= 100) {
    if (marks > 79) {
      console.log(" Your grade is A");
    } else if (marks >= 60 && marks <= 79) {
      console.log("Your grade is B");
    } else if (marks >= 49 && marks <= 59) {
      console.log("Your grade is C");
    } else if (marks >= 40 && marks <= 49) {
      console.log("Your grade is D");
    } else {
      console.log("Your grade is E");
    }
  }
//closing the readkine module and interface for inputs
  ri.close();
});
