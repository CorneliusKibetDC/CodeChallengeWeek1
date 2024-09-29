const read_input_output = require('readline');//importing readline module
const ri = read_input_output.createInterface({
  input: process.stdin,
  output: process.stdout
});
//prompting user to input speed
ri.question("Input the speed value:", function(speed){
    speed=Number(speed);
    const speedlimit = 70;
  const demeritpointgap = 5;
  const maxNumDemeritPoints = 12;
  //checking speed and giving the response
  if (speed < speedlimit) {
    console.log("Ok");
  } else {
    const TotalDemeritPoints= Math.floor((speed - speedlimit) / demeritpointgap);
    console.log("Points:", TotalDemeritPoints);

    if (TotalDemeritPoints > maxNumDemeritPoints) {
      console.log("License suspended");
    }
    //closing the interface for input
  ri.close();
});