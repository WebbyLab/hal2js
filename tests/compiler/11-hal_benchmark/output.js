const hal = require("./runtime/hal");

function MULTIPLY(i, j) {
  let MULTIPLY;
  let res;
  res = i * j;
  MULTIPLY = res;
  return MULTIPLY;
}

function DIVIDE(i, j) {
  let DIVIDE;
  let res;
  res = i / j;
  DIVIDE = res;
  return DIVIDE;
}

function ADD(i, j) {
  let ADD;
  let res;
  res = i + j;
  ADD = res;
  return ADD;
}

function SUBSTRACT(i, j) {
  let SUBSTRACT;
  let res;
  res = i - j;
  SUBSTRACT = res;
  return SUBSTRACT;
}

function benchmark() {
  let benchmark;
  let timeStart, timeStop, result;
  let i;
  let res;
  timeStart = hal.GetCurTick();

  for (i = 0; i < 1000001; i = i + 1) {
    res = res + SUBSTRACT(ADD(DIVIDE(MULTIPLY(10, 20), 30), 40), 50);
    res = res + SUBSTRACT(ADD(DIVIDE(MULTIPLY(20, 30), 40), 50), 60);
    res = res + SUBSTRACT(ADD(DIVIDE(MULTIPLY(30, 40), 50), 60), 70);
    res = res + SUBSTRACT(ADD(DIVIDE(MULTIPLY(30, 40), 50), 60), 70);
  }

  timeStop = hal.GetCurTick();
  hal.MessageBox(0, timeStop - timeStart + "" + " " + "" + res);
  return benchmark;
}

benchmark();
