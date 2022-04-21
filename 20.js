// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  var numArray = numbers.split(" ");
  var max = Number(numArray[0]);
  var min = Number(numArray[0]);
  var num;

  for (var i = 1; i < numArray.length; i++) {
    num = Number(numArray[i]);

    if (num > max) max = num;
    if (num < min) min = num;
  }

  return max + " " + min;
}
