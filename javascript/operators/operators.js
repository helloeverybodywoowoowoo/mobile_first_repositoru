let codeOutput = document.getElementById("code-output");

//assignment operator
let x = 3;
console.log("the assignment operator is the equal sign", x)

// the asterisk is the multiplication operator
let z = x*3;
console.log("x * 3 =", z);

//the plus sign is the addition operator
let y = x+3;
console.log("x + 3 =", y)

//the plus sign can be used as a concatenator operator for strings
let a = ""
let b = a + y
console.log("a + y=", b)

//the percentage sign is the modulus operator
//it returns the remainder of a number after division
console.log("y % 2=", y % 3)

//the comparison operators compare two values
//the comparison operator is two or three equal signs
if( b === y ){
    console.log("if b == y", b === y)
}
//else does not have prentices 
// double equal sign test for equal values
// triple tests for equal values and equal data types
else{
    console.log("b did not equal y", b === y)
}
