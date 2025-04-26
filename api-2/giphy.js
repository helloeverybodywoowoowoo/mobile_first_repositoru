const input = document.getElementById("input");
console.log("you typed", input);

const button = document.getElementById("bang");
console.log("button is", button);

//add eventlister to button 
function search(){
    //we need an API key here
    const apiKey = "1yLL38CQPPXnkCFVvYYlehsJMND9cc0w";

    //we need the API url end point
    const pathRandom = "/v1/gifs/trending";

    console.log("button works. you typed", input.value);
    //heres where the trouble begins
    // axios({
    //     method:'get',
    //     url: endPoint+pathRandom
    // })
    // .then((response) =>{
    //     console.log("test data", response)
    // })
}
button.addEventListener("click", search)