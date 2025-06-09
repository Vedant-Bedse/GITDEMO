console.log("New.js loaded");
let x= 10;
let y = 20;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function calculate() {
    console.log("Calculating...");
    console.log("x + y =", add(x, y));
    console.log("x - y =", subtract(x, y));
    console.log("x * y =", multiply(x, y));
    console.log("x / y =", divide(x, y));
}