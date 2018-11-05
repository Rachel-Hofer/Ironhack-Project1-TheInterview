    let newGame;
    let newCandidate;
    let newQuestion;
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let playerOneScore = $(".scoreOne").html(playerOnePoints);
    let playerTwoScore = $(".scoreTwo").html(playerTwoPoints);

class Game {
    constructor(){
        this.winner;
    }

    showScreenTwo(){
        $("body").toggleClass("screenTwo");
        $(".applyButton").hide();
        $(".jobDescription").hide();
    }

    pickLevel(){
        $("body").toggleClass("screenThree");
        $(".playerStats").toggleClass("showNewColor");
        $(".statsHide").toggleClass("defaultPoints");
        $(".defaultPoints").toggleClass("statsShow");
        $(".defaultStart").removeClass();
        $(".defaultStart").addClass("startQuestions");
       
    }

    beginInterview(){
        newQuestion = new Questions;
        let selectedLevel = newQuestion.juniorQuestions[0].question; 
        let answerOption1 = newQuestion.juniorQuestions[0].optionA;
        let answerOption2 = newQuestion.juniorQuestions[0].optionB;
        let answerOption3 = newQuestion.juniorQuestions[0].optionC;
        let answerOption4 = newQuestion.juniorQuestions[0].optionD;
        let theActualAnswer = newQuestion.juniorQuestions[0].answer;
        
        // console.log("here" + theActualAnswer);
        // console.log("now" + playerOneScore);
        // console.log("what" + playerTwoScore);
        // console.log($(".scoreOne").html);
        // console.log($(".scoreTwo").html);

        $(".theQuestion").removeClass();
        $(".theQuestion").addClass("showEverything");
        $(".theOptions").removeClass();
        $(".theOptions").addClass("showEverything");

        $("#needToToggleQuestions").html(selectedLevel);

        setTimeout(function() {
            $(".option1").html(answerOption1);
            $(".option2").html(answerOption2);
            $(".option3").html(answerOption3);
            $(".option4").html(answerOption4);
          }, 100);
        }

        getCorrectAnswerA(){
            if(this.answerOption1 === this.theActualAnswer){
                playerOnePoints += 1;
                console.log("points" + playerOnePoints);
                console.log("score" + playerOneScore);
            }
        }
    
        getCorrectAnswerB(){
            if(this.answerOption1 === this.theActualAnswer){
                playerOnePoints += 1;
                console.log("points" + playerOnePoints);
                console.log("score" + playerOneScore);
            }
        }
    
        getCorrectAnswerC(){
            if(this.answerOption1 === this.theActualAnswer){
               playerOnePoints += 1;
               console.log("points" + playerOnePoints);
               console.log("score" + playerOneScore);
        }}
    
        getCorrectAnswerD(){
            if(this.answerOption1 === this.theActualAnswer){
                playerOnePoints += 1;
                console.log("points" + playerOnePoints);
                console.log("score" + playerOneScore);
            }
        }
};

class Candidates{
    constructor(){
        this.candidatesName = ["name1", "name2"];
        // this.candidatesPoints = [0, 0];
        // this.candidatesSteals = [0, 0];
        // this.candidatesTotalPoints = [0, 0];
    }
        // enterCandidateName(){
        // console.log("this is running" + this.candidateOne[0].name);
        // }
};

class Questions{
    constructor(){
        this.count = 10;
        // this.counter = setInterval(timer, 1000);
        this.juniorQuestions = [ {
            question:"Question: What does HTML stand for?",
            answer:"Hyper text markup language",
            optionA:"Hyper typeface main loop",
            optionB:"Hyped terrain mock language",
            optionC:"Hyper text markup language",
            optionD:"Hyper type marked language"
        },{
            question:"blahhhhhh?",
            answer:"yes",
            optionA:"yes",
            optionB:"no",
            optionC:"what",
            optionD:"blah"
        },{
            question:"testtttt?",
            answer:"what",
            optionA:"yes",
            optionB:"no",
            optionC:"what",
            optionD:"blah"
        },{
            question:"another test?",
            answer:"blah",
            optionA:"yes",
            optionB:"no",
            optionC:"what",
            optionD:"blah"
        }];

    };

    
} //end of classes & methods
















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