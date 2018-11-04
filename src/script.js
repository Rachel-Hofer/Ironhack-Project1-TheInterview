    let newGame;
    let newCandidate;
    let newQuestion;


class Game {
    constructor(){
        this.winner;
    }

    // showScreenOne(){
    //     $("body").show("screenOne")
    // }

    showScreenTwo(){
        $("body").toggleClass("screenTwo")
        $(".applyButton").hide();
        $(".jobDescription").hide();
    }

    // hideApplyButton(){
    //     $(".applyButton").hide();
    // }

    // hideJobDescription(){
    //     $(".jobDescription").hide();
    // }

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




//start logic here
$(document).ready(function() { //JQuery start wrap
    $(".applyButton").click(function(){
    newCandidate = new Candidates();
    clickApply();
    
    if(newCandidate.candidatesName.length === 2){
        newGame = new Game;
        newGame.showScreenTwo();
    }
})


function clickApply(){
    let clickOne = prompt("Candidate 1: Please enter your name:");
    $(".namePromptOne").html("Candidate 1: " + clickOne);

    console.log(" = == = ", $(".namePromptOne"))
    console.log("1" + clickOne);
        
        newCandidate.candidatesName[0] = clickOne;
        console.log(newCandidate.candidatesName); 

    if(newCandidate.candidatesName[0] != null){
        let clickTwo = prompt("Candidate 2: Please enter your name:");
        $(".namePromptTwo").html("Candidate 2: " + clickTwo);
       
        console.log("2" + clickTwo);
        
        newCandidate.candidatesName[1] = clickTwo;
        console.log(newCandidate.candidatesName); 
        
    }

}
}) //JQuery end wrap
    

    
    
    















































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