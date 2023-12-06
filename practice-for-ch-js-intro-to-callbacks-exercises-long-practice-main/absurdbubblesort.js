const readline = require('readline');
let rl =
    readline.createInterface({input : process.stdin, output : process.stdout});

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2}`, function (response) {
    if (response === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    if (askIfGreaterThan(arr[i], arr[i + 1])) {
      [arr[i], arr[i + 1]] = [ arr[i + 1], arr[i] ];
      innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
    }
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    sortCompletionCallback(arr);
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([ 3, 2, 1 ], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});