    let newGame;

class Game {
    constructor(){
        this.winner = [];
    }
};

class Candidates{
    constructor(){
        this.candidateOne = [{name: " ", right: 0, steals: 0, totalPoints: 0,}];
        this.candidateTwo = [{name: " ", right: 0, steals: 0, totalPoints: 0,}];
    }

    enterCandidateName(){

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




//start logic here
 
function clickApply(){
        let clickOne = prompt("Please enter your name:");
        let playerOneName = clickOne;
        console.log("2" + playerOneName);

        // if (clickApply.clickOne != null) {
        //     Candidates.candidateOne.name.push(playerOneName);

        //     document.getElementByClass("namePromptOne").innerHTML =
        //     this.playerOneName;
        
        //     console.log(this.playerOneName);
        // }

        // for(var i = 0; i < candidateOne.length; i++)
        // Candidates.candidateOne.push.prompt("Please enter your name:");
        
    }
       
    
    















































// {
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "", 
// },{
//     Question:"",
//     Answer:"",
//     OptionA: "",
//     OptionB: "",
//     OptionC: "",
//     OptionD: "",
// },
// ];
// this.midLevel = [
// {
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "", 
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },
// ];
// this.seniorLevel = [
// {
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "", 
// },{
// Question:"",
// Answer:"",
// OptionA: "",
// OptionB: "",
// OptionC: "",
// OptionD: "",
// }]



// chosenLevelJunior(){
        
// }

// chosenLevelMid(){

// }

// chosenLevelSenior(){
        
// // document.getElementById("timer").innerHTML=count + " seconds"; 
// //this will connect to HTML timer once HTML is written

// }