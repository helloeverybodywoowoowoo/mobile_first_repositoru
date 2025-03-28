let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("submit");
let output = document.getElementById("code-output");
let num1 = input1.value;
let num2 = input2.value;
// function definition
function addNumbers(x, y){
    let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("submit");
let output = document.getElementById("code-output");
let num1 = input1.value;
let num2 = input2.value;
    let solution = x + y;
    output.innerHTML = solution
    return solution;
}
// function call
// let x = addNumbers(num1, num2);
// console.log("addNumbers returned the value of x", x);
    button.addEventListener('click', function() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let button = document.getElementById("submit");
    let output = document.getElementById("code-output");
    let num1 = input1.value;
    let num2 = input2.value;
    addNumbers(num1, num2);
});