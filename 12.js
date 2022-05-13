// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  //...
  if (n == 0) {
    return 0;
  }
  var arr = new Array();

  while (n > 0) {
    arr.push(parseInt(n % 10));
    n = parseInt(n / 10);
  }

  arr.sort(function (a, b) {
    return a < b ? 1 : -1;
  });

  var s = "";
  for (var i = 0; i < arr.length; i++) {
    s += arr[i];
  }

  return parseInt(s);
}
