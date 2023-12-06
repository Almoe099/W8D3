const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback){
  // console.log(numsLeft);
    
  if (numsLeft >= 1) {
    rl.question("Give a me A Number", num => {
      sum += parseInt(num);
      console.log(sum);
      if (numsLeft === 1) {
        completionCallback(sum);
        rl.close();
        return;
      }
      addNumbers(sum, numsLeft-1, completionCallback);

    });
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));