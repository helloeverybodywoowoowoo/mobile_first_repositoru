
console.log("You work.")

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const accesspoint = "https://www.dnd5eapi.co"
const imagepath = "/api/2014/images/monsters/"
const png = ".png"

fetch("https://www.dnd5eapi.co/api/2014/monsters", requestOptions)
  .then((response) => response.text())
  .then((result) => JSON.parse(result))
  .then((result2) => result2.results)
  .then((result3) =>{
    let arrayName = []
    for (let i = 0; i < 10; i++){
        //console.log(result3[i].index)
        arrayName.push(result3[i].index)
    }
    console.log("The array is :", arrayName)
    return arrayName
  })

  .then((result4) => {
    let arrayImage =[]
    for (let i = 0; i < 10; i++){
        console.log("we are " , result4[i], " in the loop")

        arrayImage[i]={
            name: result4[i],
            image: accesspoint + imagepath + result4[i] + png
        }

    }
    console.log("Looped!:", arrayImage)
    return arrayImage
  }) 

  .then( (result5)=>{
    const output = document.getElementById("output")
    console.log("The output is ", output)
    //output.append(result5)
    //output.append(result5.image)
    for (let i = 0; i < 10; i++){
        console.log("we are " , result5[i].image , " in the loop !!!@")
        //output.append(result5[i])      
        //output.innerHTML= result5
        const card = document.createElement('div')
        card.classList.add("card");
        
        const img = document.createElement('img');
        img.src = result5[i].image;
        img.alt = result5[i].name;
        card.append(img);

        const h2 = document.createElement('h2')
        h2.innerHTML=result5[i].name;
        card.append(h2);

        output.append(card);
    }
  })

  .catch((error) => console.error(error));
