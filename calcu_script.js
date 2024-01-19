let result = null;

function appendToDisplay(value, buttonClass) {
    let display = document.getElementById('display');

    if (display.value === 'Error' ) {
        display.value = '';
        result = null;
    }

    if (result !== null && buttonClass === "operator")  {
        result = null;
    }

    if (result !== null && buttonClass !== "operator")  {
        display.value = '';
        result = null;
    }

    display.value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');

    try {
        if (display.value.trim() === '') {
            display.value = '';
        } else {
            result = eval(display.value);
            if (isNaN(result) || !isFinite(result)) {
                display.value = 'Error';
                result = null;
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = 'Error';
    }
}