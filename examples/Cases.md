Cases:
---

1. Declarations and assignment should be separately.

```HAL
integer x; 
x = 20;
```

2. Concatination for integers works like for string.

```HAL
string 10 x; 
x = 20 & 20; # '2020'
```

3. Functions always return a variable with a name identical to the function name

```HAL
function boolean testFunction()
begin
  testFunction = true;
  return; # return true
end;
```