//start logic here
$(document).ready(function() {
    //JQuery start wrap\
  
    $(".levels").removeClass("active");
    newGame = new Game();
  
    $(".applyButton").click(function() {
      newGame.clickApply();
      if (newGame.candidatesName.length === 2) {
        newGame.showScreenTwo();
  
        $(".job").removeClass("levels");
        $(".job").addClass("active");
        $(".gameNameInterview").hide();
      }
    }); // end of "onclick" APPLY button
  
    $(".job").click(function() {
      newGame.pickLevel();
      $(".job").addClass("levels");
      $(".job").removeClass("active");
    });
  
    $("#beginGame").click(function() {
      $("#beginGame").hide("fast", () => {
        $("#changeQuestions").removeClass("defaultHide");
        $("#changeQuestions").addClass("defaultShow");
  
        $("#defaultLabelInput").removeClass("defaultHide");
        $("#defaultLabelInput").addClass("defaultShow2");
  
        $("#entireQuestion").addClass("entireQuestionAdd");
  
        newGame.beginInterview();
      });
    });
  
    $(".submit").click(function() {
      let theAnswer = newGame.juniorQuestionsOne[newGame.nextIndex].answer;
      let theQuestion = newGame.juniorQuestionsOne[newGame.nextIndex].answer;
      let theInput = $(".userTypes").val();
      console.log("answer " + theAnswer);
      console.log("input " + theInput);
      //if any answer is correct  pass to the next ifStatement
      if (theAnswer === theInput) {
        // if is player one turn and not player two
        if (newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {
          // increse player one point
          newGame.playerOnePoints += 1;
          // set player one turn equal to false  and player two equal to true
          newGame.playerOneTurn = false;
          // and player two equal to true
          newGame.playerTwoTurn = true;
          // change player one score base on player one points
          $("#scoreOne").html(newGame.playerOnePoints);
  
          alert(
            "You are correct! " +
              newGame.candidatesName[0] +
              " you get 1 point." +
              newGame.candidatesName[1] +
              " your turn."
          );
          // increase the question
          newGame.increaseQuestion();
        } else if (
          // if is not player one turn and  player two turn
          newGame.playerOneTurn === false &&
          newGame.playerTwoTurn === true
        ) {
          // increse player two point
          newGame.playerTwoPoints += 1;
          // set player one turn equal to true  and player two equal to false
          newGame.playerOneTurn = true;
          newGame.playerTwoTurn = false;
          // change player one score base on player one points
          $("#scoreTwo").html(newGame.playerTwoPoints);
          alert(
            "You are correct! " +
              newGame.candidatesName[1] +
              " you get 1 point." +
              newGame.candidatesName[0] +
              " your turn."
          );
          newGame.increaseQuestion();
        }
        // this else check if the answer is not correct
      } else {
        if (newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {
          alert(
            "That is not correct. " + newGame.candidatesName[1] + " your turn."
          );
          newGame.playerOneTurn = false;
          newGame.playerTwoTurn = true;
          newGame.increaseQuestion();
        } else if (
          newGame.playerOneTurn === false &&
          newGame.playerTwoTurn === true
        ) {
          alert(
            "That is not correct. " + newGame.candidatesName[0] + " your turn."
          );
          newGame.playerOneTurn = true;
          newGame.playerTwoTurn = false;
          newGame.increaseQuestion();
        }
      }
    });
  }); //JQuery end wrap