//Intro screen- play button onclick = start game (toggle intro screen away & toggle game screen on)
//Start Game - get Dino name & desc from API
//Game Screen =
//-Add first dino img to page
//-Add used word bank to page
//-Get length of Word (dino name) & dino desc for hint
//-Create blank spaces = length of word
//-Add hint to page
//-Add letter input & submit btn & reset btn to page
//-Click listener on reset btn, Onclick =
//Clear input field & move 'hide' class (for restart)
//Reset dino img to first img
//Reset used work bank to empty
//Get new word & hint
//Create new blank spaces = length of new word
//Add new hint to page
//-Click listener on submit btn, Onclick =
//Get letter from input field
//Check if letter has already been entered
//If yes, error 'already been guessed'
//If no, Check if letter is in word
//If yes, add letter to correct empty space(s) in word
//Check if winner (is empty spaces == 0)
//If yes, add "you won" to page & hide input & submit btn & reset btn text to 'restart'
//If no, continue game
//If no, add letter to used letter bank & change img (astroid gets closer)
//Check if loser (is img == last img(exploding dinos))
//If yes, add "you lose" to page & hide input & submit btn & reset btn text to 'restart'
//If no, continue game

$(document).ready(async function () {
  const apiData = await $.get(
    "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"
  );

  const toggleGameScreen = () => {
    $("#introScreen").toggle();
    $("#gameScreen").toggle();
  };

  const hint = apiData.Description
  $("#hint").text(hint)
  const word = apiData.Name.toUpperCase();
  const spacesCont = $("#blankSpaces");

  for (var i = 0; i < word.length; i++) {
    spacesCont.append(`<div class="space" index="${i}"></div>
      &nbsp; &nbsp;`);
  }

  const spaceEl = $(".space");
  let wrongGuesses = 0

  console.log(word)

  const checkLetter = () => {
    console.log("checking letter")
    const userLetter = $("#letterInpt").val().toUpperCase();
    const index = word.indexOf(userLetter);

    
    const asteroidSVG = $("#asteroid")

    if (index == -1) {
        wrongGuesses += 1
        asteroidSVG.removeClass("hide")
        
        if(wrongGuesses == 2){
            asteroidSVG.animate({left: "3%", scale: 1.5})
        }
        if(wrongGuesses == 3){
            asteroidSVG.animate({left: "3%", scale: 2})
        }
        if(wrongGuesses == 4){
            asteroidSVG.animate({left: "2%", scale: 3})
        }
        if(wrongGuesses == 5){
            asteroidSVG.animate({left: "0", scale: 4})
        }
        if(wrongGuesses == 6){
            asteroidSVG.animate({left: "-2%", scale: 5})
        }
        if(wrongGuesses == 7){
            asteroidSVG.animate({left: "-5%", scale: 6})
        }
        if(wrongGuesses == 8){
          console.log("Explosion")
        }
        

        $("#usedLetters").append(`<span>${userLetter}</span>`)
        console.log(wrongGuesses)
    } else {
      let totalBlanks = 0;
      let letterPos = [];

      for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == userLetter) {
          const indexPos = i;
          letterPos.push(indexPos);
        }
      }
      for (var i = 0; i < letterPos.length; i++) {
        const matchedLetters = $(`div[index="${letterPos[i]}"]`);
        matchedLetters.text(userLetter);
      }

      for (const space of spaceEl) {
        if ($(space).text() == "") {
          totalBlanks += 1;
        }
      }

      if (totalBlanks == 0) {
        alert("You win!");
      }
    }
    $("#letterInpt").val('')
    $("#letterInpt").focus()
    
  };
  $("#submitBtn").click(checkLetter);

  $("#playBtn").click(toggleGameScreen);
});
