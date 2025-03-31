import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const randomCardsArray = []
  const iconsObjectsArrays = [{ icon: "♦", color: "red" }, { icon: "♥", color: "red" }, { icon: "♠", color: "black" }, { icon: "♣", color: "black" }]
  //write your code here

  //Step1: Retreive the input element
  const numberOfCardsInputElement = document.querySelector("#number-of-cards");
  const drawButtonElement = document.querySelector("#draw-button")

  //step2: What will this input listen to? Add an event listener to the input element
  drawButtonElement.addEventListener("click", function (event) {
    let userInputNumberOfCards = numberOfCardsInputElement.value

    //console.log(userInputNumberOfCards, typeof userInputNumberOfCards)

    //Step 3: Convert user input type string to type number
    let numberOfTotalCards = parseInt(userInputNumberOfCards)
    //console.log(typeof numberOfTotalCards)

    //Step 4:With number of cards now defined, use random card generator function to create total amount of random cards
    for (let i = 0; i < numberOfTotalCards; i++) {
      //step4.2: I need it to generate a random number

      let randomNumberSuite = Math.floor(Math.random() * iconsObjectsArrays.length)

      let randomNumberCard = Math.floor(Math.random() * 12)

      let iconObjectWinner = iconsObjectsArrays[randomNumberSuite]

      let iconWinner = iconObjectWinner.icon


      //console.log("color,number,icon:",iconObjectWinner.color,randomNumberCard,iconWinner)
      randomCardsArray.push({ number: randomNumberCard, icon: iconWinner, iconColor: iconObjectWinner.color })
    }

    console.log(randomCardsArray)

    const divCardContainerElement = document.querySelector("#random-user-cards")


    //Render random cards
    randomCardsArray.forEach((item) => {

      divCardContainerElement.innerHTML += `<div class="card">
         <div class="card-top">
          <span class="icon-span" id="random-icon">
            ${item.icon}
          </span>
         </div>

         <div class="card-number">
          <span class="number-span" id="random-number">${item.number}</span>
         </div>

         <div class="card-bottom">
            <span class="icon-span rotated">
            ${item.icon}
            </span>
         </div>
     </div>`
    })

  })
  


  const logArray = []
  let divCardLogContainer = document.querySelector("#random-user-cards")

  //Order random cards array
  const bubbleSort = (arr) => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      for (let i = 0; i < wall; i++) {
        if (arr[i].number > arr[i + 1].number) {
          let aux = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = aux;


          // Logs
          logArray.push([...arr])
          
          // logArray.push(arr)
          // console.log(logArray)
          // [4,1,9,2]

          // [1,4,9,2]
          // [1,4,2,9]
          // [1,2,4,9]
        }
      }
      wall--; //disminuir la pared para optimizar
    }
    console.log(logArray)
    return arr;
  };

  //console.log(bubbleSort(randomCardsArrayCopy))
  //console.log(bubbleSort(randomCardsArray))

  const sortButtonElement = document.querySelector("#sort-button");

  sortButtonElement.addEventListener("click",function(){
    let randomCardsArrayCopy = [...randomCardsArray]
    const sortedCardsArrayCopy = bubbleSort(randomCardsArrayCopy)
    console.log(sortedCardsArrayCopy)

    //loop thru array of logs
    logArray.forEach((item)=>{
      console.log(item)
      item.forEach((item2)=>{
        console.log(item2)
        //draw card in dom
        

          divCardLogContainer.innerHTML += `<div class="card">
             <div class="card-top">
              <span class="icon-span" id="random-icon">
                ${item2.icon}
              </span>
             </div>
    
             <div class="card-number">
              <span class="number-span" id="random-number">${item2.number}</span>
             </div>
    
             <div class="card-bottom">
                <span class="icon-span rotated">
                ${item2.icon}
                </span>
             </div>
         </div>`
        

      })
    })
  })







  // const iconsObjectsArrays = [{icon:"♦",color:"red"},{icon:"♥",color:"red"},{icon:"♠",color:"black"},{icon:"♣",color:"black"}]

  // let randomNumberSuite = Math.floor( Math.random() * iconsObjectsArrays.length )

  // let randomNumberCard = Math.floor( Math.random() * 12 )

  // let iconObjectWinner = iconsObjectsArrays[randomNumberSuite]

  // let iconWinner = iconObjectWinner.icon

  // let spanNumberElement = document.getElementById("random-number")
  // let iconSpansNodeList = document.querySelectorAll(".icon-span")

  // for(let spanNode of iconSpansNodeList){
  //   spanNode.style.color = iconObjectWinner.color
  //   spanNode.style.fontSize= "100px"
  //   spanNode.innerHTML = iconWinner
  //  }

  //  spanNumberElement.innerHTML = randomNumberCard
};
