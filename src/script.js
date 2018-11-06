    let newGame;  //global variable to be able to call the methods under Game class
    
class Game {   //class that holds all methods to Game class
    constructor(){
    this.candidatesName = ["name1", "name2"];
    this.playerOnePoints = 0;
    this.playerTwoPoints = 0;
    this.juniorQuestionsOne = 
        [
    {
        prompt: "Question: What does HTML stand for??\n (a) Hyper type marked language\n (b) Hyper text markup language\n (c) Hyped terrain mock language\n (d) Hyper typeface main loop",
        answer: "b"
    },
    {
        prompt: "Question: What does CSS stand for?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "a"
    },
    {
        prompt: "Question: Which is the correct CSS syntax?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Margin-top and margin-bottom do not have an effect on an inline element?\n (a) True\n (b) False\n",
        answer: "b"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Next Question?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "b"
    },
    {
        prompt: "Next Question?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "d"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "c"
    },
    {
        prompt: "Next Question\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "c"
    }
        ];

    this.juniorQuestionsTwo = 
        [
    {
        prompt: "Question: Which is the correct CSS syntax?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Question: What does HTML stand for??\n (a) Hyper type marked language\n (b) Hyper text markup language\n (c) Hyped terrain mock language\n (d) Hyper typeface main loop",
        answer: "b"
    },
    {
        prompt: "Question: What does CSS stand for?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "a"
    },
    {
        prompt: "Question: Which is the correct CSS syntax?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Margin-top and margin-bottom do not have an effect on an inline element?\n (a) True\n (b) False\n",
        answer: "b"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Next Question?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "b"
    },
    {
        prompt: "Next Question?\n (a) Cascading Style Sheet\n (b) Complex Style Syntax\n (c) Complete Sound Sheet\n (d) Comparison Sound Sheet",
        answer: "d"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "a"
    },
    {
        prompt: "Next Question?\n (a) Body{color: black}\n (b) {body;color:black}\n (c) {body:color=black(body}\n (d) body:color=black",
        answer: "c"
    }
        ];
    } //end of Game constructor
          
        clickApply(){
            // newGame = new Game();

            let clickOne = prompt("Candidate 1: Please enter your name:");
            $(".namePromptOne").html("Candidate 1: " + clickOne);
            this.candidatesName[0] = clickOne;
    
            if(this.candidatesName[0] != null){
            let clickTwo = prompt("Candidate 2: Please enter your name:");
            $(".namePromptTwo").html("Candidate 2: " + clickTwo);
            this.candidatesName[1] = clickTwo;
        }
    }
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
            $("#beginGame").removeClass("defaultStart"); //this line and line below combined "show" the Begin Interview button
            $("#beginGame").addClass("startQuestions");   //this line and line above combined "show" the Begin Interview button
    } // end of pickLevel method
    
        beginInterview(){
        $("#beginGame").hide();        
        for(let i = 0; i < this.juniorQuestionsOne.length; i++){
            let response = window.prompt(this.juniorQuestionsOne[i].prompt);
          
            if(response === this.juniorQuestionsOne[i].answer){
                this.playerOnePoints += 1;
                $("#scoreOne").html(this.playerOnePoints)
                alert("That is correct!")
            } else {
                alert("That is not orrect! Next question.")
            }
        }
    }

        nextPlayer()
        {for(let i = 0; i < this.juniorQuestionsTwo.length; i++){
            let response = window.prompt(this.juniorQuestionsTwo[i].prompt);
          
            if(response === this.juniorQuestionsTwo[i].answer){
                this.playerTwoPoints += 1;
                $("#scoreTwo").html(this.playerTwoPoints)
                alert("That is correct!")
            } else {
                alert("That is not correct! Next question.")
            }   
        }
    }

        whoWon(){
            if(this.playerOnePoints > this.playerTwoPoints){
                alert("Candidate 1: Congratulations, we would like to offer you the job.")
            }
            if(this.playerOnePoints < this.playerTwoPoints){
                alert("Candidate 2: Congratulations, we would like to offer you the job.")
            }
            if(this.playerOnePoints === this.playerTwoPoints){
                alert("Thank you for coming in for the interview. Unfortunately, it was a tie, therefore we will not be offering either of you the job.")
            }
        }
};  // end of Game class
    
//end of classes/methods
















