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
  let word;
  let hint;
  let apiData;
  let spaceEl;
  const spacesCont = $("#blankSpaces");
  const asteroidSVG = $("#asteroid");

  let wrongGuesses = 0;
  let usedLetterArr = [];

  async function getApiData() {
    apiData = await $.get(
      "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"
    );
  }
  const fillInWord = () => {
    for (var i = 0; i < word.length; i++) {
      const letter = word.charAt(i);
      const indexPos = i;
      $(`.space[index="${indexPos}"]`).text(letter);
    }
  };
  const startGame = async () => {
    await getApiData();
    hint = apiData.Description;
    $("#hint").text(hint);
    word = apiData.Name.toUpperCase();

    for (var i = 0; i < word.length; i++) {
      spacesCont.append(`<div class="space" index="${i}"></div>
        &nbsp; &nbsp;`);
    }
    spaceEl = $(".space");
    TweenLite.to($("#introScreen"),1,{autoAlpha:0})
    $("#letterInpt").focus();
  };

  const checkLetter = () => {
    console.log(word);
    $("#error").text("");
    console.log("checking letter");
    const userLetter = $("#letterInpt").val().toUpperCase();
    const index = word.indexOf(userLetter);
    const usedLetterIndex = usedLetterArr.indexOf(userLetter);

    if (usedLetterIndex != -1) {
      $("#error").text("*You already entered this letter.");
      $("#letterInpt").val("");
      $("#letterInpt").focus();
    } else {
      usedLetterArr.push(userLetter);
      if (index == -1) {
        wrongGuesses += 1;
        asteroidSVG.animate({ opacity: "1" });

        if (wrongGuesses == 2) {
          asteroidSVG.animate({ scale: 1.5 });
        }
        if (wrongGuesses == 3) {
          asteroidSVG.animate({ scale: 2 });
        }
        if (wrongGuesses == 4) {
          asteroidSVG.animate({ scale: 3 });
        }
        if (wrongGuesses == 5) {
          asteroidSVG.animate({ scale: 4 });
        }
        if (wrongGuesses == 6) {
          asteroidSVG.animate({ scale: 5 });
        }
        if (wrongGuesses == 7) {
          asteroidSVG.animate({ scale: 6 });
        }
        if (wrongGuesses == 8) {
          asteroidSVG.animate({ scale: 7 });
          TweenLite.to(asteroidSVG, 0.2, { opacity: 0, delay: 1 });
          TweenLite.to($("#explosion"), 1.8, {
            opacity: 1,
            scale: 1.5,
            delay: 0.8,
            onComplete: () => {
              TweenLite.to($("#dinoFire"), 1.8, { opacity: 1 });
              TweenLite.to($("#explosion"), 0.3, { opacity: 0, scale: 0.8 });
            },
          });
          $("#inputBtnCont").addClass("hide");
          setTimeout(function () {
            $("#message").css("color", "red");
            $("#message").text(
              "Oh no, the asteroid has killed all the dinosaurs! Reset game to try again."
            );
            fillInWord();
          }, 2500);
        }

        $("#usedLetters").append(`<span>${userLetter}</span>`);
        console.log(wrongGuesses);
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
        console.log(totalBlanks);
        if (totalBlanks == 0) {
          TweenLite.to(asteroidSVG, 0.7, {
            rotation: -165,
            delay: 1,
            onComplete: () => {
              TweenLite.to(asteroidSVG, 2, {
                top: -100,
                left: 300,
                opacity: 0,
                scale: 0.5,
              });
            },
          });
          $("#inputBtnCont").addClass("hide");
          setTimeout(function () {
            $("#message").css("color", "green");
            $("#message").text(
              "Congrats, you saved the dinosaurs from the asteroid! Reset game to play again."
            );
          }, 2500);
        }
      }
      $("#letterInpt").val("");
      $("#letterInpt").focus();
    }
  };

  const resetGame = async () => {
    $("#message").text("");
    $("#inputBtnCont").removeClass("hide");
    asteroidSVG.attr("style", "");
    $("#dinoFire").css("opacity", "0");
    usedLetterArr = [];
    spacesCont.empty();
    $("#usedLetters").empty();
    $("#hint").text("");
    wrongGuesses = 0;
    asteroidSVG.css({ opacity: "0", scale: "1" });
    await getApiData();
    hint = apiData.Description;
    $("#hint").text(hint);
    word = apiData.Name.toUpperCase();

    for (var i = 0; i < word.length; i++) {
      spacesCont.append(`<div class="space" index="${i}"></div>
        &nbsp; &nbsp;`);
    }
    spaceEl = $(".space");
  };

  $("#submitBtn").click(checkLetter);
  $("#resetBtn").click(resetGame);
  $("#playBtn").click(startGame);
});
