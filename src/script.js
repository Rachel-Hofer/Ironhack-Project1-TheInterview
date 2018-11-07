let newGame; //global variable to be able to call the methods under Game class

class Game {
  //class that holds all methods to Game class
  constructor() {
    this.candidatesName = ["name1", "name2"];
    this.playerOnePoints = 0;
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
    this.playerTwoPoints = 0;
    this.nextIndex = 0;
    this.juniorQuestionsOne = [
      {
        qa:
          "Question 1: What does HTML stand for?<br>(a) Hyper type marked language<br> (b) Hyper text markup language<br> (c) Hyped terrain mock language<br> (d) Hyper typeface main loop",
        answer: "b"
      },
      {
        qa:
          "Question 1: What does CSS stand for?<br> (a) Cascading Style Sheet<br> (b) Complex Style Syntax<br> (c) Complete Sound Sheet<br> (d) Comparison Sound Sheet",
        answer: "a"
      },
      {
        qa:
          "Question 2: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 2: Margin-top and margin-bottom do not have an effect on an inline element?<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 3: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "b"
      },
      {
        qa:
          "Question 3: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 4: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 4: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "b"
      },
      {
        qa:
          "Question 5: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "c"
      },
      {
        qa:
          "Question 5: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "c"
      },
      {
        qa:
          "Question 6: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 6: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "b"
      },
      {
        qa:
          "Question 7: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 7: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 8: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "b"
      },
      {
        qa:
          "Question 8: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 9: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "b"
      },
      {
        qa:
          "Question 9: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "d"
      },
      {
        qa:
          "Question 10: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "a"
      },
      {
        qa:
          "Question 10: Insert Question?<br> (a) option 1<br> (b) Option 2<br> (c) Option 3<br> (d) Option 4",
        answer: "c"
      }
    ];
  } //end of Game constructor

  clickApply() {
    let clickOne = prompt("Candidate 1: Please enter your name:");
    $(".namePromptOne").html("Candidate 1: " + clickOne);
    this.candidatesName[0] = clickOne;

    if (this.candidatesName[0] != null) {
      let clickTwo = prompt("Candidate 2: Please enter your name:");
      $(".namePromptTwo").html("Candidate 2: " + clickTwo);
      this.candidatesName[1] = clickTwo;
    }
  }
  showScreenTwo() {
    //hides everything on screen 1 and shows background of screen 2, after both names have been entered in prompt
    $("body").toggleClass("screenTwo"); //switches from screen1 background to screen2 background
    $("#entirePlayerInfo").removeClass("defaultHide");
    $("#entirePlayerInfo").addClass("playerStats");
    $(".applyButton").hide(); //hides the apply button
    $(".jobDescription").hide(); //hides the instructions
  } // end of showScreenTwo method

  pickLevel() {
    //hides everything on screen 2 and shows background of screen 3, after level is created
    $("body").toggleClass("screenThree"); //switches from screen2 background to screen3 background
    $(".playerStats").toggleClass("showNewColor"); //switches CSS on the Player Stats box
    $(".statsHide").toggleClass("defaultPoints"); //removes default of unhide to show player points
    $(".defaultPoints").toggleClass("statsShow");
    $("#beginGame").removeClass("defaultStart"); //this line and line below combined "show" the Begin Interview button
    $("#beginGame").addClass("startQuestions"); //this line and line above combined "show" the Begin Interview button
  } // end of pickLevel method

  beginInterview() {
    let theQuestion = this.juniorQuestionsOne[this.nextIndex].qa;
    $("#changeQuestions").html(theQuestion);
  }

  increaseQuestion() {
    this.nextIndex += 1;
    if (this.nextIndex !== this.juniorQuestionsOne.length)  {
    let theQuestion = this.juniorQuestionsOne[this.nextIndex].qa;
    let theAnswer = this.juniorQuestionsOne[this.nextIndex].answer;
    $("#changeQuestions").html(theQuestion);
  }}

} // end of Game class

//end of classes/methods