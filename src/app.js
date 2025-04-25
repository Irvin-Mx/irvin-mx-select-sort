import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let randomCardsArray = []
  const iconsObjectsArrays = [{ icon: "♦", color: "red" }, { icon: "♥", color: "red" }, { icon: "♠", color: "black" }, { icon: "♣", color: "black" }]
  let drawClickFlag = false
  //Retreive the input element
  const numberOfCardsInputElement = document.querySelector("#number-of-cards");
  const drawButtonElement = document.querySelector("#draw-button")

  //Add an event listener to the input element
  drawButtonElement.addEventListener("click", function (event) {
    //console.log(randomCardsArray);
    //console.log(numberOfCardsInputElement.value);
  
    randomCardsArray = []; 
    const divCardContainerElement = document.querySelector("#random-user-cards");
    divCardContainerElement.innerHTML = ""; 
  
    
    const divCardLogContainer = document.querySelector("#random-user-cards-log");
    divCardLogContainer.innerHTML = ""; 
  
    logArray.length = 0; 
  
    let userInputNumberOfCards = numberOfCardsInputElement.value;
    let numberOfTotalCards = parseInt(userInputNumberOfCards);
  
    
    for (let i = 0; i < numberOfTotalCards; i++) {
      let randomNumberSuite = Math.floor(Math.random() * iconsObjectsArrays.length);
      let randomNumberCard = Math.floor(Math.random() * 12);
      let iconObjectWinner = iconsObjectsArrays[randomNumberSuite];
      let iconWinner = iconObjectWinner.icon;
  
      randomCardsArray.push({
        number: randomNumberCard,
        icon: iconWinner,
        iconColor: iconObjectWinner.color,
      });
    }
  
    //console.log(randomCardsArray);
  
    // Render random cards
    randomCardsArray.forEach((item) => {
      divCardContainerElement.innerHTML += `<div class="card mx-2">
         <div class="card-top">
          <span class="icon-span fw-bold" id="random-icon">
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
     </div>`;
    });
  });

  const logArray = []
  let divCardLogContainer = document.querySelector("#random-user-cards-log")

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
        }
      }
      wall--; 
    }
    return arr;
  };

  const sortButtonElement = document.querySelector("#sort-button");

  sortButtonElement.addEventListener("click", function () {
    let randomCardsArrayCopy = [...randomCardsArray];
    const sortedCardsArrayCopy = bubbleSort(randomCardsArrayCopy);
    //console.log(sortedCardsArrayCopy);
  
    divCardLogContainer.innerHTML = "";
  
    // Loop through the array of logs
    logArray.forEach((item, index) => {
      //console.log(item);
  
      let createdContainer = document.createElement("div");
      createdContainer.className = "m-2 d-flex individual-log-container-div";
      createdContainer.innerHTML += `<span class="me-3">${index}</span>`;
  
      // Render cards 
      item.forEach((item2) => {
        let cardHTML = `<div class="card mx-2">
            <div class="card-top">
              <span class="icon-span" id="random-icon">${item2.icon}</span>
            </div>
            <div class="card-number">
              <span class="number-span" id="random-number">${item2.number}</span>
            </div>
            <div class="card-bottom">
              <span class="icon-span rotated">${item2.icon}</span>
            </div>
          </div>`;
        createdContainer.innerHTML += cardHTML;
      });
  
      divCardLogContainer.appendChild(createdContainer);
    });
  });

};