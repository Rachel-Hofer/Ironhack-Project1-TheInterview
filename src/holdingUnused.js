
//  getCorrectAnswerB(){
//     let answerOption2 = newQuestion.juniorQuestions[0].optionB;
//     let theActualAnswer = newQuestion.juniorQuestions[0].answer;

//     if(answerOption2 === theActualAnswer){
//         playerOnePoints += 1;
//         $("#scoreOne").html(playerOnePoints)
//     }
// }

// getCorrectAnswerC(){
//     questionIndex++
//     let answerOption3 = newQuestion.juniorQuestions[0].optionC;
//     let theActualAnswer = newQuestion.juniorQuestions[0].answer;

//     if(answerOption3 === theActualAnswer){  
//         setTimeout(function() {  
//         playerOnePoints += 1;
//         $("#scoreOne").html(playerOnePoints)

//         $("#needToToggleQuestions").removeClass();
//         $("#needToToggleQuestions").addClass("theQuestion");
//         $("#needToToggleOptions").removeClass();
//         $("#needToToggleOptions").addClass("theOptions");
//         }, 300)
// }
// }

// getCorrectAnswerD(){
//     let answerOption4 = newQuestion.juniorQuestions[0].optionA;
//     let theActualAnswer = newQuestion.juniorQuestions[0].answer;

//     if(answerOption4 === theActualAnswer){
//         playerOnePoints += 1;
//         $("#scoreOne").html(playerOnePoints)
//     }
// }





    // timerCountDown(){
    //     this.count -= 1;

    //     if(this.count <= 0){
    //         clearInterval(this.counter);
    //         return;
    //     }
    // }


    // makeQuestionToggle(){
    //     $(".questionOptions").toggleClass("showQuestions");
    // }


    // whenCandidateOneAnswers(){
    //     let guessedRight = Candidates.candidateOne[0].right;
    //     let selectedAnswer = ["clicked"];
    //     let currentQuestion = this.juniorLevel[0].question;
    
    //     if(selectedAnswer[0] === questions[0].Answer){
    //         this.guessedRight += 1;
    //     } 
    // }

    // whenCandidateTwoAnswers(){
    //     let guessedRight = Candidates.candidateTwo[0].right;
    //     let selectedAnswer = ["clicked"];
    //     let currentQuestion = this.juniorLevel[0].question;
    
    //     if(selectedAnswer[0] === questions[0].Answer){
    //         this.guessedRight += 1;
    //     } 
    // }


    // getCorrectAnswerB(){
            //     let answerOption2 = newQuestion.juniorQuestions[0].optionB;
            //     let theActualAnswer = newQuestion.juniorQuestions[0].answer;
    
            //     if(answerOption2 === theActualAnswer){
            //         playerOnePoints += 1;
            //         $("#scoreOne").html(playerOnePoints)
            //     }
            // }
        
        //     getCorrectAnswerC(){
        //         questionIndex++
        //         let answerOption3 = newQuestion.juniorQuestions[0].optionC;
        //         let theActualAnswer = newQuestion.juniorQuestions[0].answer;
    
        //         if(answerOption3 === theActualAnswer){  
        //             setTimeout(function() {  
        //             playerOnePoints += 1;
        //             $("#scoreOne").html(playerOnePoints)
    
        //             $("#needToToggleQuestions").removeClass();
        //             $("#needToToggleQuestions").addClass("theQuestion");
        //             $("#needToToggleOptions").removeClass();
        //             $("#needToToggleOptions").addClass("theOptions");
        //             }, 300)
        //     }
        // }
        
    //         getCorrectAnswerD(){
    //             let answerOption4 = newQuestion.juniorQuestions[0].optionA;
    //             let theActualAnswer = newQuestion.juniorQuestions[0].answer;
    
    //             if(answerOption4 === theActualAnswer){
    //                 playerOnePoints += 1;
    //                 $("#scoreOne").html(playerOnePoints)
    //             }



// let theTime = setInterval(myTimer, 1000);

// function myTimer() {
// theTime =  $("#beginGame").hide(); 
// }

// <!-- <div id="changeOptions" class="theOptions">
// <button id="answers" class="option1 idForPress" type="button" value="text">a) <span class="switchOptions1"> </span></button>
// <button id="answers" class="option2 idForPress" type="button" value="text">b) <span class="switchOptions2"> </span></button>
// <button id="answers" class="option3 idForPress" type="button" value="text">c) <span class="switchOptions3"> </span></button>
// <button id="answers" class="option4 idForPress" type="button" value="text">d) <span class="switchOptions4"> </span></button>
// </div> -->

// <!-- <footer>
//   <p id="progress">Question x of y</p>
// </footer> -->


  //     nextPlayer(){
  //         for(let i = 0; i < this.juniorQuestionsTwo.length; i++){
  //         let response = window.prompt(this.juniorQuestionsTwo[i].prompt);

  //         if(response === this.juniorQuestionsTwo[i].answer){
  //             this.playerTwoPoints += 1;
  //             $("#scoreTwo").html(this.playerTwoPoints)
  //             alert("That is correct!")
  //         } else {
  //             alert("That is not correct! Next question.")
  //         }
  //     }
  // }

  //     whoWon(){
  //         if(this.playerOnePoints > this.playerTwoPoints){
  //             alert("Candidate 1: Congratulations, we would like to offer you the job.")
  //         }
  //         if(this.playerOnePoints < this.playerTwoPoints){
  //             alert("Candidate 2: Congratulations, we would like to offer you the job.")
  //         }
  //         if(this.playerOnePoints === this.playerTwoPoints){
  //             alert("Thank you for coming in for the interview. Unfortunately, it was a tie, therefore we will not be offering either of you the job.")
  //         }
  // }