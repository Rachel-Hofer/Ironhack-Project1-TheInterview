    let newGame;
    let newCandidate;
    let newQuestion;

class Game {
    constructor(){
        this.winner;
    }

    showScreenTwo(){
        $("body").toggleClass("screenTwo");
        $(".applyButton").hide();
        $(".jobDescription").hide();
        // $(".playerStats").hide();
    }

    pickLevel(){
        $("body").toggleClass("screenThree");
        // $(".active").addClass();
        // $(".levels").removeClass("levels");
        
    }
};

class Candidates{
    constructor(){
        this.candidatesName = ["name1", "name2"];
        this.candidatesAnsweredCorrectly = [0, 0];
        this.candidatesSteals = [0, 0];
        this.candidatesTotalPoints = [0, 0];
    }

    enterCandidateName(){
        console.log("this is running" + this.candidateOne[0].name);
    }
};

class Questions{
    constructor(){
        this.count = 10
        this.counter = setInterval(timer, 1000);
        this.juniorLevel = [
            {
                Question:"Question: What does HTML stand for?",
                Answer:"Hyper text markup language",
                optionA:"Hyper typeface main loop",
                optionB:"Hyped terrain mock language",
                optionC:"Hyper text markup language",
                optionD:"Hyper type marked language"
            },{
                Question:"blahhhhhh?",
                Answer:"yes",
                optionA:"yes",
                optionB:"no",
                optionC:"what",
                optionD:"blah"
            },{
                Question:"testtttt?",
                Answer:"yes",
                optionA:"yes",
                optionB:"no",
                optionC:"what",
                optionD:"blah"
            },{
                Question:"another test?",
                Answer:"yes",
                optionA:"yes",
                optionB:"no",
                optionC:"what",
                optionD:"blah"
            },
      ]
    };

    timerCountDown(){
        this.count -= 1;

        if(this.count <= 0){
            clearInterval(this.counter);
            return;
        }
    }

    whenCandidateOneAnswers(){
        let guessedRight = Candidates.candidateOne[0].right;
        let selectedAnswer = ["clicked"];
        let currentQuestion = this.juniorLevel[0].question;
    
        if(selectedAnswer[0] === questions[0].Answer){
            this.guessedRight += 1;
        } 
    }

    whenCandidateTwoAnswers(){
        let guessedRight = Candidates.candidateTwo[0].right;
        let selectedAnswer = ["clicked"];
        let currentQuestion = this.juniorLevel[0].question;
    
        if(selectedAnswer[0] === questions[0].Answer){
            this.guessedRight += 1;
        } 
    }
} //end of classes & methods