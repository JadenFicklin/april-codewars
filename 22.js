// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = (x) => {
  x = `${x}`.split("").reverse();
  let a = [];
  for (let i = 0; i < x.length; i++) {
    a.push(+x[i]);
  }
  return a;
};
