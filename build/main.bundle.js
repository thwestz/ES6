var toUpper = false;
var isShift = false;
function main(input) {
    console.log(input)
    let output = document.getElementById("demo").textContent;
    if (toUpper) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("demo").innerHTML = output;
    } else if (isShift) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("demo").innerHTML = output;
        isShift = false;
        document.getElementById("shift").style.backgroundColor = "transparent";
    } else {
        output = output + input;
        document.getElementById("demo").innerHTML = output;
        
    }
}
function backspace() {
    let output = document.getElementById("demo").textContent;
    output = output.substring(0, output.length - 1)
    document.getElementById("demo").innerHTML = output;
}
function upperCase() {
    toUpper = !toUpper
    return toUpper;
}
function shift() {
    isShift = !isShift
    if (isShift) {
        document.getElementById("shift").style.backgroundColor = "#ffff99";
    }else{
        document.getElementById("shift").style.backgroundColor = "transparent";
    }
    return isShift;
}
function reset() {
    document.getElementById("demo").innerHTML = "";
}