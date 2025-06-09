function calculator() {
  const num1 = parseFloat(prompt("Pehla Number enter karo:"));
  const operator = prompt("Enter operator (+, -, *, /):");
  const num2 = parseFloat(prompt("Dusra Number enter karo:"));
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator.");
      return;
  }

  alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

calculator();

