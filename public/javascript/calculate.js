export default function Calculate_func(number1, number2, operation) {
  switch (operation) {
    case "+":
      return +number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;

    default:
      throw new Error("Error in Calculate!");
  }
}
