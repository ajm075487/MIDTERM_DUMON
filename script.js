function appendValue(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    if (currentValue === "Invalid Expression") {
        display.value = value;
        return;
    }

    if (currentValue === "0" && value !== "." && !isOperator(value)) {
        display.value = value;
        return;
    }

    let lastChar = currentValue.slice(-1);
    if (isOperator(value) && isOperator(lastChar)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;

        if (expression.includes("/0")) {
            document.getElementById("display").value = "Invalid Expression";
            return;
        }

        let result = eval(expression);
        if (!isFinite(result)) {
            document.getElementById("display").value = "Invalid Expression";
        } else {
            document.getElementById("display").value = result;
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.substring(1) : '-' + display.value;
    }
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}
