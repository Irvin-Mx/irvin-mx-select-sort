import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let randomCardsArray = [];
  const iconsObjectsArrays = [
    { icon: "♦", color: "red" },
    { icon: "♥", color: "red" },
    { icon: "♠", color: "black" },
    { icon: "♣", color: "black" },
  ];

  // Retrieve the input element
  const numberOfCardsInputElement = document.querySelector("#number-of-cards");
  const drawButtonElement = document.querySelector("#draw-button");

  // Add an event listener to the input element
  drawButtonElement.addEventListener("click", function (event) {

    // Clear the container and reset the array before rendering new cards
    randomCardsArray = [];
    const divCardContainerElement = document.querySelector("#random-user-cards");
    divCardContainerElement.innerHTML = "";

    // Clear the log container when pressing "Draw"
    const divCardLogContainer = document.querySelector("#random-user-cards-log");
    divCardLogContainer.innerHTML = "";

    // Reset the logArray to ensure only the current draw's logs are stored
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

  const logArray = [];
  let divCardLogContainer = document.querySelector("#random-user-cards-log");

  // Order random cards array using selection sort
  const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex].number > arr[j].number) {
          minIndex = j;
        }
      }

      if (i !== minIndex) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

        // Log the current state of the array after each swap
        logArray.push([...arr]);
      }
    }
    return arr;
  };

  const sortButtonElement = document.querySelector("#sort-button");

  sortButtonElement.addEventListener("click", function () {
    let randomCardsArrayCopy = [...randomCardsArray];
    const sortedCardsArrayCopy = selectionSort(randomCardsArrayCopy);
   

    divCardLogContainer.innerHTML = "";

    logArray.forEach((item, index) => {
     

      // Create a container for the current log step
      let createdContainer = document.createElement("div");
      createdContainer.className = "m-2 d-flex individual-log-container-div";

      createdContainer.innerHTML += `<span class="me-3">${index + 1}</span>`;

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

      // Append the container to the log container
      divCardLogContainer.appendChild(createdContainer);
    });
  });
};