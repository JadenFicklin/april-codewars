// Sum Numbers
sum = function (numbers) {
  "use strict";
  return numbers.reduce(function (t, n) {
    return t + n;
  }, 0);
};
