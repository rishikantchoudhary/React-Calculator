const evaluate = ({ previousOperand, currentOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) && isNaN(current)) {
    return "";
  }
  let answer = "";
  switch (operation) {
    case "+":
      answer = prev + current;
      break;
    case "-":
      answer = prev - current;
      break;
    case "*":
      answer = prev * current;
      break;
    case "/":
      answer = prev / current;
      break;
  }
  return answer;
};

export default evaluate;
