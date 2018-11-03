    let newGame;
    let newCandidate;
    let newQuestion;

class Game {
    constructor(){
        this.winner = [];
    }
};

class Candidates{
    constructor(){
        this.candidatesName = ["name1", "name2"];
        this.candidatesAnsweredCorrectly = [];
        this.candidatesSteals = [];
        this.candidatesTotalPoints = [];
    }

    enterCandidateName(){
        console.log(this.candidateOne[0].name);
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
        let clickOne = prompt("Candidate 1: Please enter your name:");
        let nameOneHtml = document.getElementsByClassName("namePromptOne");
        nameOneHtml.innerHTML = clickOne;

        let playerOneName = clickOne;

        newCandidate = new Candidates();

        console.log("1" + playerOneName);

        if (playerOneName != null) {
            
            newCandidate.candidatesName[0] = playerOneName;
            console.log(newCandidate.candidatesName); 
            
        }

        if(newCandidate.candidatesName[0] != null){
            let clickTwo = prompt("Candidate 2: Please enter your name:");
            let nameTwoHtml = document.getElementsByClassName("namePromptTwo");
            nameTwoHtml.innerHTML = clickTwo;
            let playerTwoName = clickTwo;
           

            console.log("2" + playerTwoName);
            
            newCandidate.candidatesName[1] = playerTwoName;
            console.log(newCandidate.candidatesName); 
            
        }

     // if(newCandidate.candidatesName.length === 2){
        //     newGame = new Game;
     // }
    }


        // var person = prompt("Please enter your first name", "Johnny");
        // var x = document.getElementById('personName');
        // x.innerHTML = person;

    

    
    
    















































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