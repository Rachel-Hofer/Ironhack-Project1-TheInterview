    let newGame;  //global variable to be able to call the methods under Game class
    let newCandidate;  //global variable to be able to call the methods under Candidates class
    let newQuestion;   //global variable to be able to call the methods under Questions class
    let playerOnePoints = 0;  //global variable to store candidate1 points
    let playerTwoPoints = 0;   //global variable to store candidate2 points
    

class Game {   //class that holds all methods to Game class
        constructor(){
        this.questionIndex = 0;
        this.juniorQuestions = [ 
        {
                question:"Question: What does HTML stand for?",
                answer:"Hyper text markup language",
                optionA:"Hyper typeface main loop",
                optionB:"Hyped terrain mock language",
                optionC:"Hyper text markup language",
                optionD:"Hyper type marked language"
        },
        {
                question:"blahhhhhh?",
                answer:"yes",
                optionA:"yes",
                optionB:"no",
                optionC:"what",
                optionD:"blah"
        }
    ]
        this.randomQuestion = this.juniorQuestions[this.questionIndex].question;
        this.answerOption1 = this.juniorQuestions[this.questionIndex].optionA;
        this.answerOption2 = this.juniorQuestions[this.questionIndex].optionB;
        this.answerOption3 = this.juniorQuestions[this.questionIndex].optionC;
        this.answerOption4 = this.juniorQuestions[this.questionIndex].optionD;
        this.theActualAnswer = this.juniorQuestions[this.questionIndex].answer;
    } //end of Game constructor
          
        showScreenTwo(){   //hides everything on screen 1 and shows background of screen 2, after both names have been entered in prompt
            $("body").toggleClass("screenTwo");  //switches from screen1 background to screen2 background
            $(".applyButton").hide();   //hides the apply button
            $(".jobDescription").hide();   //hides the instructions
    }  // end of showScreenTwo method
    
        pickLevel(){   //hides everything on screen 2 and shows background of screen 3, after level is created
            $("body").toggleClass("screenThree");  //switches from screen2 background to screen3 background
            $(".playerStats").toggleClass("showNewColor");   //switches CSS on the Player Stats box
            $(".statsHide").toggleClass("defaultPoints");   //removes default of unhide to show player points
            $(".defaultPoints").toggleClass("statsShow");
            $(".defaultStart").removeClass(); //this line and line below combined "show" the Begin Interview button
            $(".defaultStart").addClass("startQuestions");   //this line and line above combined "show" the Begin Interview button
    } // end of pickLevel method
    
    beginInterview(){    
            $(".theQuestion").removeClass();
            $(".theQuestion").addClass("showEverything");
            $(".theOptions").removeClass();
            $(".theOptions").addClass("showEverything");
            $("#beginGame").removeClass();
            $("#beginGame").addClass("defaultStart")
    
            $("#needToToggleQuestions").html(this.randomQuestion);
    
    // setTimeout(function() {
            $(".option1").html(this.answerOption1);
            $(".option2").html(this.answerOption2);
            $(".option3").html(this.answerOption3);
            $(".option4").html(this.answerOption4);
        // }, 300);
    } //end of beginInterview method
    
    getCorrectAnswer(){   
        $(".idForPress").click(function(e){
          

        if($(this).text() === newGame.theActualAnswer){
                playerOnePoints += 1;
    
            $("#scoreOne").html(playerOnePoints)
            }
        });   
    }

    displayQuestion(){
        this.juniorQuestions[this.questionIndex];
    }
        
};  // end of Game class
    
class Candidates{
    constructor(){
        this.candidatesName = ["name1", "name2"];
        }
};   // end of Candidates class
    
class Questions{
        constructor(){
            this.count = 10;
            // this.counter = setInterval(timer, 1000);
        }
    
} //end of Question class

//end of classes/methods
















