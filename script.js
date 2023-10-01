const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//define function to calculate based on button clicked.
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== ""){
        //if output has '%', replace with '/100'befor evaluating.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        //if del button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        //if outputis empty and button is special char is return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//add event listener to buttons, call calculate() on click

buttons.forEach((button) => {

    //button click listener call calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});