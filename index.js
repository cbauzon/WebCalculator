
/* Event Listeners */
$("button").click(function (e) { 
    $(this).addClass("pressed");
    $("input").attr("value", $("input").attr("value") + e.target.innerText);
    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 250);
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