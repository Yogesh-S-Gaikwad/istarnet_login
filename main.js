const number = document.getElementById("number");
const submitButton = document.getElementById("submitButton");
    const entered_no = document.getElementById("entered_no");

    submitButton.addEventListener("click", function () {
        const inputValue = number.value; // Get the value from the input field
        entered_no.textContent ="You typed: " + inputValue; // Update the <p> tag's content
    });
