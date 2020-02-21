function getUserNumber(isFirstNumber) {
  let userNumber;
  do {
    if (isFirstNumber)
      userNumber = Number(window.prompt("Input first number:"));
    else userNumber = Number(window.prompt("Input second number:"));
    if (isNaN(userNumber)) {
      window.alert("Your input was not a number, please try again");
    }
  } while (isNaN(userNumber));
  return userNumber;
}

function getOperationToPerform() {
  let operation = "";
  let operationValid;
  do {
    operationValid = false;

    if (
      operation === "+" ||
      operation === "-" ||
      operation === "*" ||
      operation === "/"
    ) {
      operationValid = true;
    } else {
    }
  } while (!operationValid);
  return operation;
}

function checkValidOperation(operation) {
  let isOperationValid;
  if (
    operation === "+" ||
    operation === "-" ||
    operation === "*" ||
    operation === "/"
  ) {
    isOperationValid = true;
  } else {
    isOperationValid = false;
  }
  return isOperationValid;
}

function calculate(first, second, operation) {
  let result;
  switch (operation) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    default:
      //"/"
      result = first / second;
      break;
  }
  window.alert(
    first +
      " " +
      operation +
      " " +
      second +
      " = " +
      result +
      "\nEnd of program."
  );
}

function main() {
  let first;
  let second;
  let operation;
  let validOperation;
  do {
    first = getUserNumber(true);
    second = getUserNumber(false);
    operation = window.prompt(
      "Type operation symbol to perform:\n(+) addition, (-) substraction, (*) multiplication or (/) division"
    );
    validOperation = checkValidOperation(operation);
    if (validOperation) {
      calculate(first, second, operation);
    } else {
      window.alert("I couldn't recognize the operation.\nLet's try again");
    }
  } while (!validOperation);
}

main();
