// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

function hoopCount(n) {
  let times = n;
  let error = "Invalid input";
  let congrats = "Great, now move on to tricks";
  let encourage = "Keep at it until you get it";
  if (times <= 9) {
    return encourage;
  } else if (times >= 10) {
    return congrats;
  } else {
    return error;
  }
}
