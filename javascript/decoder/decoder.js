// the users input word is declared for js
let input1 = document.getElementById("word");
let button = document.getElementById("button");
let output1 = document.getElementById("code-output");

console.log(button, " is the button.");

// defines the function
function encoder1(){
    let value_value = input1.value;
    let value = value_value.toUpperCase();

    console.log("INPUT IS: ", value);

    let len = value.length;
    console.log(" The word is ", len, " letters long.");

    let encodedValue = "";

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for(let i=0;i<len; i++) {
        console.log("the letter is ", value[i]);
        //encryption algorithm
        //convert letters to numbers
        let result = alphabet.indexOf(value[i]);
        encodedValue += result +"."; 
    }
    output1.innerHTML = encodedValue; 
}

let input2=document.getElementById("word2");
let button2 = document.getElementById("button2");
let output2 = document.getElementById("code-output2");

function decoder2(){
    let value = input2.value;
    console.log("The word: ",value)
    let len = value.length;
    console.log("The variables length is ", len)
}
//function call
