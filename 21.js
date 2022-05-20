// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

function updateLight(current) {
  return {
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current];
}
