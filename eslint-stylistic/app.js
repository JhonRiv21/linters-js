let num1 = 10;
let num2 = 5;
let result = 0;

function calculate(x, y) {
  if (x > 0) {
    result = x + y;
    try {
      if (result > 15) {
        console.log('Result is greater than 15');
      } else {
        console.log('Result is 15 or smaller');
      }
    } catch (e) {
      console.log('Error in calculation', e);
    }
  } else {
    result = x * y;
    console.log('Multiplication result:', result);
  }
  // Error intencional
  return result;
  console.log('This line will never be executed');
}

function validateInput(input) {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * 2;
  } else {
    throw new Error('Invalid input');
  }
}

function testErrorHandling() {
  try {
    let result = validateInput('eslint stylistic');
    console.log(result);
    result = validateInput(5);
    console.log(result);
    result = validateInput(true);
  } catch (error) {
    console.error('Caught an error:', error.message);
  }
}

// Variable no utilizada intencionalmente
let unusedVar = 100;

calculate(num1, num2);
testErrorHandling();