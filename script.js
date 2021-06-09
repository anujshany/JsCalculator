// Getting the keys from the calculator
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
// Adding onlcick event to all the keys to perform the operations it is supposed to
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        // getting the input and button values
        var input = document.querySelector('.screen')
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        // Now , just append the key values (btnValues) to input sting and then use js's eval function to get the result
        // if the clear key is pressed, erase everything
        if (btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        }
        // if eval key is pressed, calculate and display the result
        else if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];
            // replace all instance of x and ÷ with * and / respectively. This can be done using regex and the 'g' tag which will replace all instances of the matched character/substring
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            // Final thing left to do is checking the last characterof the equation if an operator is decimal remove it
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');
            if (equation)
                input.innerHTML = eval(equation);
            decimalAdded = false;
        }
        // Basic functionality of the calculator is complete. But there are some problems like 
        // 1. No two operators should be added consecutively.
        // 2. The equation shouldn't start from an operator except minus
        // 3. not more than 1 decimal should be there in a number

        // We'll fix these issues using some simple checks
        else if (operators.indexOf(btnVal) > -1) {
            // operator is clicked
            // get the last character from the equation
            var lastChar = inputVal[inputVal.length - 1];
            // only add operator id input is not emptyand there is no operator at the last
            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;
            // allow - if string is empty
            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;
            // Replace the last operator with newly pressed operator
            if (oppator.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
            decimalAdded = false;
        }
        //Noe only the decimal problem is left.we can solve  it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prvent more decimals to be added oce it's set. it will reset when an operator, eval or clear key is pressed.
        else if (btnVal == '.') {
            if (!decimalAdded) {
                inp
                    .innerHTML += btnVal;
                decimalAdded = true;
            }
        }
        // if any other key is pressed, just append  it
        else {
            input.innerHTML += btnVal;
        }
        //prevent page jumps
        e.preventDefault();
    }
}