//start logic here

$(document).ready(function() { // JQuery start wrap
  
    newGame = new Game();

    $(".applyButton").click(function() {  // when APPLY is clicked, do the following
      newGame.clickApply();   // run clickApply function
      if(newGame.candidatesName.length === 2) { //if the array holding the candidates name is equal to 2
        newGame.showScreenTwo();  // switch to background image 2
  
        $("#job").removeClass("levels"); // at the same time, hide the default CSS for the level buttons (no display)
        $("#job").addClass("active"); //  and add the CSS class to show the level buttons
        $(".gameNameInterview").hide();  // hide the title of the game once you leave the first page
      }
    }); // end of "onclick" APPLY button
  
    $("#job").click(function() {  // when you click on the "level" buttin of your choice, 
      newGame.pickLevel();  // run function pick level (which hides/shows all objects needed for 3rd screen)
       
        $("#job").addClass("levels");  // add default CSS class "display none" to level buttons
        $("#job").removeClass("active");  // remove the CSS class that shows the level buttons
    });
  
    $("#beginGame").click(function() {  // when you click "Start Interview" button, run the following function
        $("#beginGame").hide("fast", () => { // makes the start interview button disappear

        $("#changeQuestions").removeClass("defaultHide");  // removes default CSS class that "displays none" the HTML questions div
        $("#changeQuestions").addClass("defaultShow");  // adds CSS class that shows the HTML questions div
  
        $("#defaultLabelInput").removeClass("defaultHide");  // removes default CSS class that "displays none" the HTML input
        $("#defaultLabelInput").addClass("defaultShow2");  // adds CSS class that shows the HTML input
  
        $("#entireQuestion").addClass("entireQuestionAdd");
  
        newGame.beginInterview(); //run function begin Interview, which displays the first question of the questions array
      });
    });
  
    $("#formQuestions").submit(function(e) {   // when you click "submit" button inside questions div, the following will happen
        e.preventDefault();  // you can hit enter without it refreshing the page

        let theAnswer = newGame.juniorQuestionsOne[newGame.nextIndex].answer;  // tcreated a variable to equal to the answer of teh question inside the questions array of whichever Index the game is on
        let theInput = $(".userTypes").val();  // created a variable to equal the user's repsonse in the input
    
        if(theAnswer === theInput) {  // if the answer to the question is equal to the input of the player
            document.getElementById("playCorrect").play(); // play correct audio sound
                if(newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {  // and if it is player one's turn and not player two's && this is the nested if statement
           
                    newGame.playerOnePoints += 1;   // increase player one's points by +1
                    newGame.playerOneTurn = false; // set player one to false 
                    newGame.playerTwoTurn = true;  // and player two equal to true
            
                        $("#scoreOne").html(newGame.playerOnePoints);  // display player one's score in HTML
                        $("#exampleModal").modal('toggle');  // show modal that says "Correct!"

                    newGame.increaseQuestion();  // increase the question

                } else if (
                    newGame.playerOneTurn === false &&  // if it is not player one's turn AND
                    newGame.playerTwoTurn === true  // it is player two's turn
                ) {
                    newGame.playerTwoPoints += 1; // increase player two's points by +1
                    
                    newGame.playerOneTurn = true;  // set player one equal to true 
                    newGame.playerTwoTurn = false;  // set player two equal to false
                        
                        $("#scoreTwo").html(newGame.playerTwoPoints);  // display player one's score in HTML
                        $("#exampleModal").modal('toggle');  // show modal that says "Correct!"

                    newGame.increaseQuestion();  //run increase Question function which increased the Index of the questions array by +1
                    }
            
      } else { //second part of initial if statement that checks IF the question was answered INCORRECTLY
            document.getElementById("playIncorrect").play();  // play incorrect audio sound   
            
            if (newGame.playerOneTurn === true && newGame.playerTwoTurn === false) {  //if it is player one's turn and NOT player two's turn,
                $('#wrongModal').modal('show')  // display incorrect model

            newGame.playerOneTurn = false;  // set player one equal to false 
            newGame.playerTwoTurn = true;  // set player two equal to true
            newGame.increaseQuestion();  //run increase Question function which increased the Index of the questions array by +1
    
            } else if (newGame.playerOneTurn === false && newGame.playerTwoTurn === true){
                $('#wrongModal').modal('show')  // display incorrect model
               
            newGame.playerOneTurn = true;  // set player one equal to true 
            newGame.playerTwoTurn = false;  // set player two equal to false 
            newGame.increaseQuestion();  //run increase Question function which increased the Index of the questions array by +1
            };

        }    
            if (newGame.nextIndex === newGame.juniorQuestionsOne.length && newGame.playerOnePoints > newGame.playerTwoPoints){  // if the index of the questions array is equal to the length of the questions array, AND player one has more points than player 2, do the following
                $('#winnerModal').modal('show')  // show winner model for Candidate 1 
                document.getElementById("crowdCheer").play();  // play crowd cheers audio
        }   
            else if (newGame.nextIndex === newGame.juniorQuestionsOne.length && newGame.playerOnePoints < newGame.playerTwoPoints){  // if the index of the questions array is equal to the length of the questions array, AND player one has less points than player 2, do the following
                $('#winnerModal2').modal('show')  // show winner model for Candidate 2 
                document.getElementById("crowdCheer").play();  // play crowd cheers audio
        };

                $(".userTypes").val("");  // clear out the input after each submit click 
    })

  }) //end of document.ready