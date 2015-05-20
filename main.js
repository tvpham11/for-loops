// Rebuilt the following methods using only a for loop.

// map()

function mapForLoop(numArray, callback) {
  var outputArray = [];
  for (var i = 0; i < numArray.length; i++) {
    outputArray[i] = callback(numArray[i])
  }
  return outputArray;
}

// reduce()

function reduceForLoop(numArray) {
  var prevValue = numArray[0];
  var currValue = 0;
  for (var i = 1; i < numArray.length; i++) {
    currValue = numArray[i];
    prevValue += currValue;
  }
  return prevValue;
}

// filter()

function filterForLoop(numArray, callback) {
  var outputArray = [];
  for (var i = 0; i < numArray.length; i++) {
    if (callback(numArray[i]) == true) {
      outputArray.push(numArray[i]);
    }
  }
  return outputArray;
}
