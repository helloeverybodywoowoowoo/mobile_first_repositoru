//reference input first everytime
let age = document.getElementById('age')
let button = document.getElementById('button')
let codeOutput= document.getElementById('code-output')
//fuction definition: functionname(param1, param2){action!}

function ageCheck(){
    let x = age.value
    let xNum = Number(x)

    if (xNum<14){
        console.log('You baby, get out.')
    }

    else if (xNum>40){
        console.log('Youre so old. Go home to your family.')
    }

    else{
        console.log('Right this way, your majesty')
    }
}