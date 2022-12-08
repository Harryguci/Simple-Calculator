var validInput = /^[\x2B\x2D]?\d+[\x2A\x2B\x2D\x2F]+[\x2B\x2D]?\d+$/;
var input = document.querySelector("#statement");
function Handle() {
  var dialog = { title: "", message: "" };
  var dialogRes = "";

  if (!input.value) {
    dialogRes.innerHTML = "Input is not valid";
  } else {
    var statement = input.value.replace(/\s/g, "");
    statement = statement.replace(/[\x28\x29\x5B\x5D]/g, "");

    if (validInput.test(statement)) {
      var numbers = statement.match(/[\x2A\x2B\x2D\x2F]?\d+/g);
      var num1 = numbers[0];
      var num2 = numbers[1];

      if (num1.match(/^[\x2A\x2B\x2D\x2F]/)) num1 = num1.slice(1);
      if (num2.match(/^[\x2A\x2B\x2D\x2F]/)) num2 = num2.slice(1);

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      var operation = statement.match(/[\x2A\x2B\x2D\x2F]/g);

      if (statement.match(/^[\x2B\x2D]/g)) {
        operation = operation[1];
      } else operation = operation[0];

      try {
        var res = Calculate(num1, num2, operation);
        dialog.title = "RESULT";
        dialog.message = res;
      } catch (e) {
        dialog.title = "Have a Error";
        dialog.message = e.message;
      }
    } else {
      dialog.title = "Have a Error";
      dialog.message = ":((";
    }

    document.querySelector("body").innerHTML += "\n" + dialogHTML(dialog);
    setTimeout(() => {
      hiddenDialog();
    }, 5000);
  }
}

async function hiddenDialog() {
  document.querySelector(".dialog").style.animationName = "dialog-hidden";
  setTimeout(() => {
    document.querySelector(".dialog").remove();
  }, 500);
}

function Calculate(number1, number2, operation) {
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

function dialogHTML(dialog) {
  return `
    <div class="dialog">
    <div class="dialog__head">
        <h3>${dialog.title}</h3>
    </div>
    <div class="dialog__main">
        <span class="result-value">
            ${dialog.message}
        </span>
    </div>
    <div class="dialog__foot"></div>
    </div>
    `;
}
