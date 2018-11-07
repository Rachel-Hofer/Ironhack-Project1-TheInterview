//start logic here
$(document).ready(function() {
    //JQuery start wrap\
  
    newGame = new Game();
  
    $(".applyButton").click(function() {
      newGame.clickApply();
      if (newGame.candidatesName.length === 2) {
        newGame.showScreenTwo();
  
        $("#job").removeClass("levels");
        $("#job").addClass("active");
        $(".gameNameInterview").hide();
      }
    }); // end of "onclick" APPLY button
  
    $("#job").click(function() {
      newGame.pickLevel();
      $("#job").addClass("levels");
      $("#job").removeClass("active");
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
            // if any answer is correct  pass to the next ifStatement
        if(theAnswer === theInput) { 
            document.getElementById("playCorrect").play();
            // if is player one turn and not player two
        if(newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {
            // increase player one points
          newGame.playerOnePoints += 1;
            // set player one to false  and player two to true
          newGame.playerOneTurn = false;
            // and player two equal to true
          newGame.playerTwoTurn = true;
            // change player one score base on player one points
          $("#scoreOne").html(newGame.playerOnePoints);
  
          alert(
            "You are correct! " +
              newGame.candidatesName[0] +
              " you get 1 point. " +
              newGame.candidatesName[1] +
              " your turn."
          );
            // increase the question
            newGame.increaseQuestion();

        } else if (
            // if it is not player one's turn and it is player two's turn
          newGame.playerOneTurn === false &&
          newGame.playerTwoTurn === true
        ) {
            // increase player two's points
          newGame.playerTwoPoints += 1;
            // set player one turn equal to true  and player two equal to false
          newGame.playerOneTurn = true;
          newGame.playerTwoTurn = false;
            // change player one score base on player one points
          $("#scoreTwo").html(newGame.playerTwoPoints);
          alert(
            "You are correct! " +
              newGame.candidatesName[1] +
              " you get 1 point. " +
              newGame.candidatesName[0] +
              " your turn."
          );
            newGame.increaseQuestion();
        }
            // checks if the answer is not correct
      } else {
        document.getElementById("playIncorrect").play();
        if (newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {
          alert("That is not correct. " + newGame.candidatesName[1] + ", your turn.");
            newGame.playerOneTurn = false;
            newGame.playerTwoTurn = true;
            newGame.increaseQuestion();

        } else if (newGame.playerOneTurn === false && newGame.playerTwoTurn === true){
            alert("That is not correct. " + newGame.candidatesName[0] + ", your turn.");
            newGame.playerOneTurn = true;
            newGame.playerTwoTurn = false;
            newGame.increaseQuestion();
        };

        }    
        if(newGame.nextIndex === newGame.juniorQuestionsOne.length && newGame.playerOnePoints > newGame.playerTwoPoints){
        alert("Congratulations " + newGame.candidatesName[0] + " We would like to offer you the job.")
        document.getElementById("crowdCheer").play();
        }   
        else if(newGame.nextIndex === newGame.juniorQuestionsOne.length && newGame.playerOnePoints < newGame.playerTwoPoints){
        alert("Congratulations " + newGame.candidatesName[1] + " We would like to offer you the job.")
        document.getElementById("crowdCheer").play();
        };
    })

  }) //end of document.ready