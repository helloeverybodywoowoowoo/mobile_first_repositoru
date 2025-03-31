//reference input first everytime
let word = document.getElementById('word')
let button = document.getElementById('button')
let codeOutput= document.getElementById('code-output')

//fuction definition: functionname(param1, param2){action!}
function vowelRemover(value){
    console.log('value', value)
    let len = value.length
    console.log('the length of the number is', len)
    let solution = ""
    for(let i=0; i< len; i++){
        if(value[i] == 'a' || value[i] == 'e' || value[i] == 'i' ||value[i] == 'o' || value[i] == 'u'){
        }
        else{
            solution += value[i]
        }
    }    
    codeOutput.innerHTML = solution

}

function reverseReverse(value){
    console.log('value',value)
    let len = value.length
    console.log('the length of the number is', len)
    // <br> ads a needed line break 
    let solution="<br>"
    //-1 gets it to the first letter (which is at 0), otherwise it will output undefined
    for (let i=len-1; i>=0; i--){
        solution+= value[i]        
    }
    //
    codeOutput.innerHTML += solution
}


//event listerner to the button
button.addEventListener('click', function(){
    codeOutput.innerHTML=""
    let wordValue = word.value
    vowelRemover(wordValue)
    reverseReverse(wordValue)
})