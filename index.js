/* Global Vars */
var toEval = ""
var currOp = "";
var finished = 0;


/* Helper Functions */
function animatePress(button) {
    $(button).addClass("pressed");
    setTimeout(() => {
        $(button).removeClass("pressed");
    }, 250);
}

/* Event Listener */
$("button").click(function (e) { 
    animatePress(this);
    let char = e.target.innerText;

    
    if (char >= "0" && char <= "9" || char === ".") {
        if (finished) {
            toEval = "";
            finished = 0;
        }
        currOp += char;
        $("#input").text(currOp);

    } else if (char === "AC") {
        toEval = currOp = "";
        $("#input").text(currOp);

    } else if (char === "+/-") {
        if (!currOp){
            toEval = String(Number(toEval) * -1);
            $("#input").text(toEval);

        } else {
            currOp = String(Number(currOp) * -1);
            $("#input").text(currOp);

        }

    } else if (char === "%") {
        if (!currOp) {
            toEval = String(Number(toEval) / 100);
            $("#input").text(toEval);    
        } else {
            currOp = String(Number(currOp) / 100);
            $("#input").text(currOp);

        }
    } else {
        toEval += currOp;
        currOp = "";
        switch (char) {
            case "/":
            case "-":
            case "+":
                toEval += char;
                finished = 0
                break;
            
            case "x":
                toEval += "*";
                finished = 0;
                break;

            case "=":
                console.log(toEval);
                let res = eval(toEval);
                toEval = String(res);
                $("#input").text(toEval);
                finished = 1;
                break;
            default:
                console.log("Invalid input! How'd you do that?");
                break;
        }
    }

    
});

