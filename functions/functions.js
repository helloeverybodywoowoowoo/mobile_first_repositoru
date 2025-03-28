let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("submit");
let output = document.getElementById("code-output");

//function definition below
function addNumbers( x, y){
    let xNum = Number(x)
    let yNum = Number(y)

    let solution = xNum + yNum;

    output.innerHTML = solution
    return solution;
}

// function call
button.addEventListener('click', function (){
    console.log("working on it...")
    let num1 = input1.value;
    let num2 = input2.value;
    addNumbers(num1, num2);
})
