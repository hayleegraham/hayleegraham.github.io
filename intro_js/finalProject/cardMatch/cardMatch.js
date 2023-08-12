/*
 functionality:
     start game
         //Start button onClick initiates game, creating the cards & starts timer (display in div)

         initializer
         create the board
             create cards
                 //Create card divs, each with a 'front' div and 'back' div for flip effect
                 //Create 'front' divs with images (must have 2 of each image)

             add cards to cardContainer
                 //Display divs in random order w/ 'back' side visable


             add click listeners to them
                 //Card divs onClick flip (toggle) to reveal 'front' div images -- card div CSS needed: transform-style: preserve-3d

     click card
         is it the first card

         are we matching cards
             //After 2 cards are flipped, check if the images match

         does this cause success or fail
             //If they match, remove those cards & add count to # of matches made
             //If they do NOT match, flip back over to 'back' side div
        
         finish game
             //Once all card divs are matched & removed, stop timer, display "You won" & timer value

     restart game
         //Restart button re-initiates game with cards in new random order
         //Can add levels eventually, user chooses easy, med, hard & each display more/less total cards
*/
let dogPics;
let totalCards;
let imagesArray = [];
let cardContainer;
let levelBtnsCont;
let startBtns;
let timerContainer;
let matchCountCont;
let allCards;
let firstCard = null;
let secondCard = null;
let matchCounter = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let timeCount;

const testPic = async (url) => {
  const requestData = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return true;
      }
      throw new Error("Something went wrong");
    })
    .then((responseJson) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
  return requestData;
};

async function getDogPics() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response)
    .catch(() => console.log("error"));

  dogPics = await response.json();

  const isValidImage = await testPic(dogPics.message);

  if (!isValidImage) {
    console.log("IMAGE IS NOT VALID");
    return await getDogPics();
  }
  console.log("IMAGE IS VALID");
  return dogPics.message;
}

const init = async () => {
  timerContainer = document.getElementById("timerContainer");
  matchCountCont = document.getElementById("matchCountContainer");
  levelBtnsCont = document.getElementById("levelBtnContainer");
  startBtns = document.querySelectorAll(".startButton");
  startBtns.forEach((btn) => {
    btn.addEventListener("click", startGame);
  });
  cardContainer = document.getElementById("cardContainer");
};

const getImages = async (length) => {
  //Make a loop that runs 'totalCards' amount of times
  //On each interation:
  //get image url & add it to an array
  for (var i = 0; i < length; i++) {
    const imageURL = await getDogPics();
    imagesArray.push(imageURL);
    imagesArray.push(imageURL);
  }
};

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function flipCard(eventInfo) {
  if (firstCard && secondCard) return;

  eventInfo.currentTarget.classList.add("flipCard");
  if (firstCard == null) {
    firstCard = eventInfo.currentTarget;
  } else if (secondCard == null && eventInfo.currentTarget !== firstCard) {
    secondCard = eventInfo.currentTarget;

    if (firstCard && secondCard) {
      checkMatch(firstCard, secondCard);
    }
  }
}

function checkMatch(card1, card2) {
  let win = false;
  let match = false;
  function countMatch() {
    const matchCountSpan = document.getElementById("matchCount");
    matchCounter += 1;
    matchCountSpan.innerHTML = matchCounter;
  }
  function reFlip() {
    card1.classList.remove("flipCard");
    card2.classList.remove("flipCard");
  }
  function removeFlip() {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
  }
  function youWon() {
    cardContainer.classList.add("hideCards");
    const winnerInfoCont = document.getElementById("youWonContainer");
    let finalMin = document.getElementById("minute").innerHTML;
    let finalSec = document.getElementById("second").innerHTML;
    timerContainer.innerHTML = "";
    matchCountCont.innerHTML = "";
    winnerInfoCont.classList.remove("hideButton");
    winnerInfoCont.innerHTML = `Great job! You found ${matchCounter} matches in ${finalMin} minutes and ${finalSec} seconds!`;
    levelBtnsCont.classList.remove("hideButton");
    imagesArray = [];
    startBtns.forEach((btn) => {
      btn.classList.remove("hideButton");
      btn.addEventListener("click", startGame);
    });
  }

  if (card1.firstChild.firstChild.src == card2.firstChild.firstChild.src) {
    console.log("match");
    match = true;
    removeFlip();
    countMatch();
    if (matchCounter == totalCards) {
      pauseTimer();
      win = true;
    }
  }

  setTimeout(() => {
    if (win) {
      youWon();
    } else if (!match) {
      reFlip();
    }
    firstCard = null;
    secondCard = null;
  }, 1100);
}

function startTimer() {
  minute = 0;
  second = 0;
  millisecond = 0;
  pauseTimer();
  timeCount = setInterval(() => {
    timer();
  }, 10);
}

function pauseTimer() {
  clearInterval(timeCount);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}

async function startGame(btnInfo) {
  let difficulty = "";
  cardContainer.innerHTML = ``;
  totalCards = parseInt(btnInfo.currentTarget.getAttribute("cardCount"));
  const difficultys = {
    3: "easy",
    4: "medium",
    5: "hard",
  };
  difficulty = difficultys[totalCards];

  await getImages(totalCards);

  const youWonCont = document.getElementById("youWonContainer");
  youWonCont.innerHTML = ``;
  youWonCont.classList.add("hideButton");
  matchCounter = 0;

  timerContainer.innerHTML = `Time: <span id="minute">00</span>:<span id="second">00</span>`;
  matchCountCont.innerHTML = `Matches Found: <span id="matchCount"></span>`;

  shuffleImages(imagesArray);

  for (var j = 0; j < totalCards * 2; j++) {
    const createCard = `<div card-index="${j}" class="card"><div class= "front"><img class= "dogImgs" src="${imagesArray[j]}" alt="Dog"></div><div class= "back"><img class= "cardBack" src="assets/cardBack.jpg" alt="Card"></div></div>`;
    cardContainer.setAttribute("difficulty", difficulty);
    cardContainer.innerHTML += createCard;
  }
  allCards = document.querySelectorAll(".card");

  for (var card of allCards) {
    card.addEventListener("click", flipCard);
  }

  levelBtnsCont.setAttribute("class", "hideButton");
  startBtns.forEach((btn) => {
    btn.setAttribute("class", "hideButton");
  });
  cardContainer.classList.remove("hideCards");
  startTimer();
}

window.onload = init;
