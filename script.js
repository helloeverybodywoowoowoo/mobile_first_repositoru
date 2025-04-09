// referencing the id named code-output in html
let output = document.getElementById("code-output");

//printing the value of output in the console
console.log("output= ",output)

//declaration and initialization of the variable x with the value jordan
let x = "Jordan";

// declaration and initialization of the variable y with the value 3
let y = 3;

let z = true;

x = "john";

// permanently set the variable name to the value logan
const name = "Logan";

// unable to change the name value to roman
//name = "roman"

// declaration of age
let age;

// initialization of age
age = 33;

output.innerHTML= x;

// On click
const menuitems = document.getElementById("menuitems");
let menu = (elem)=> { 
    console.log("THIS is", elem.nextElementSibling.style.display);
    if(elem.nextElementSibling.style.display == ""){
         menuitems.style.display = "flex"  
    }
    else{
        menuitems.style.display = "" 
    }
}