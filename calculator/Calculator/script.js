document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", handleButtonPress);
  });

  function handleButtonPress(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    } else if (buttonValue === "C") {
      display.value = "";
    } else {
      display.value += buttonValue;
    }
  }
});
