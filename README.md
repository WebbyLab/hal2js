Hansa Application Language to JavaScript compiler prototype
-----------------------------------------------------------

During hackaton we've created HAL(http://amazon5.hansaworld.net/) to JavaScript compiler just for fun.

### How to use

1. npm install
2. node bin/compiler.js --src source_code_in.hal > compiled.js


Run example
```javascript
// compile tests/compiler/11-hal_benchmark/input.hal and run it
node bin/compiler.js --src tests/compiler/11-hal_benchmark/input.hal | node
```

### Performance impovements: 2000x 😎

Original source code in HAL:
```hal
function val MULTIPLY(val i, val j)
begin
    val res;

    res = i*j;

    MULTIPLY = res;
    return
end;

function val DIVIDE(val i, val j)
begin
    val res;

    res = i/j;

    DIVIDE = res;
    return
end;

function val ADD(val i, val j)
begin
    val res;

    res = i+j;

    ADD = res;
    return
end;

function val SUBSTRACT(val i, val j)
begin
    val res;

    res = i-j;

    SUBSTRACT = res;
    return
end;

global function benchmark()
begin
	LongInt timeStart,timeStop,result;
	longint i;
	val res;

	timeStart = getCurTick();


	for(i=0;i<1000001;i=i+1)begin
		res = res + SUBSTRACT( ADD (DIVIDE( MULTIPLY(10,20),30),40),50 );
		res = res + SUBSTRACT( ADD (DIVIDE( MULTIPLY(20,30),40),50),60 );
		res = res + SUBSTRACT( ADD (DIVIDE( MULTIPLY(30,40),50),60),70 );
		res = res + SUBSTRACT( ADD (DIVIDE( MULTIPLY(30,40),50),60),70 );
	end;

	timeStop = getCurTick();


	MessageBox(0, timeStop - timeStart & " " & res);
  return;
end;

benchmark();
```

Compiled to JS:
```js
const hal = require("./runtime/hal");

function MULTIPLY(i, j) {
  let MULTIPLY;
  let res = 0;
  res = i * j;
  MULTIPLY = res;
  return MULTIPLY;
}

function DIVIDE(i, j) {
  let DIVIDE;
  let res = 0;
  res = i / j;
  DIVIDE = res;
  return DIVIDE;
}

function ADD(i, j) {
  let ADD;
  let res = 0;
  res = i + j;
  ADD = res;
  return ADD;
}

function SUBSTRACT(i, j) {
  let SUBSTRACT;
  let res = 0;
  res = i - j;
  SUBSTRACT = res;
  return SUBSTRACT;
}

function benchmark() {
  let benchmark;
  let timeStart = 0,
      timeStop = 0,
      result = 0;
  let i = 0;
  let res = 0;
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
```
