/* Global Vars */
var op1 = 0;
var op2 = 0;
var operator;
var currOp = ""


/* Helper Functions */
function animatePress(button) {
    $(button).addClass("pressed");
    setTimeout(() => {
        $(button).removeClass("pressed");
    }, 250);
}

/* Event Listeners */
$("button").click(function (e) { 
    animatePress(this);
    let char = e.target.innerText;

    if (char >= "0" && char <= "9" || char === ".") {
        $("#input").text(currOp + e.target.innerText);
        currOp += e.target.innerText;
    } else {
        switch (char) {
            case "AC":
                currOp = "";
                $("#input").text(currOp);
                op1 = 0;
                op2 = 0;
                break;

            case "+/-":
                let numSign = Number(currOp);
                numSign *= -1;
                currOp = String(numSign);
                $("#input").text(currOp);
                break;

            case "%":
                let numPercent = Number($("#input").text());
                numPercent /= 100;
                currOp = String(numPercent)
                $("#input").text(currOp);
                break;

            case "/":
                if (op1 === 0) {
                    op1 = Number(currOp);
                }
                operator = div;
                currOp = "";
                $("#input").text(currOp);
                console.log(op1, op2, operator);
                break;
            
            case "x":
                if (op1 === 0) {
                    op1 = Number(currOp);
                } 
                operator = mult;
                currOp = "";
                $("#input").text(currOp);
                console.log(op1, op2, operator);
                break;
            
            case "-":
                if (op1 === 0) {
                    op1 = Number(currOp);
                } 
                operator = sub;
                currOp = "";
                $("#input").text(currOp);
                console.log(op1, op2, operator);
                break;
            
            case "+":
                if (op1 === 0) {
                    op1 = Number(currOp);
                }
                operator = add;
                currOp = "";
                $("#input").text(currOp);
                console.log(op1, op2, operator);
                break;
            
            case "=":
                op2 = Number(currOp);
                let res = calc(op1, op2, operator)
                $("#input").text(String(res));
                break;

            default:
                console.log("Invalid input!");
                break;
        }
    }
    
});


/* Basic arithmetic operations */
function calc(op1, op2, operator) {
    return operator(op1, op2);
}

function add(op1, op2) {
    return op1 + op2;
}

function sub(op1, op2) {
    return op1 - op2;
}

function mult(op1, op2) {
    return op1 * op2;
}

function div(op1, op2) {
    return op1 / op2;
}