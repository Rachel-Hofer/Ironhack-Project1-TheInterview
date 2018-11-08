let newGame; //global variable to be able to call the methods under Game class

class Game {  //class that holds all methods to Game class
  constructor() {
    this.candidatesName = ["name1", "name2"];  //array holding Candidate 1 and 2's names
    this.playerOnePoints = 0;  // number holding Candidate 1's points
    this.playerOneTurn = true;  // variable to hold boolean for Candidate 1, to alternate turns
    this.playerTwoTurn = false;  // variable to hold boolean for Candidate 2, to alternate turns
    this.playerTwoPoints = 0;  // number holding Candidate 1's points
    this.nextIndex = 0; // variable the holds number for the index of the questions array
    this.juniorQuestionsOne = [  //array of all questions used in Junior Level
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
          "Question 2: JavaScript variables can only hold string data.<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 2: JavaScript properties are the variables that makes up an object.<br> (a) True<br> (b) False",
        answer: "a"
      },
      {
        qa:
          "Question 3: CSS Margin-top and margin-bottom do not have an effect on an inline element.<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 3: Javascript function is a method that falls inside a class.<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 4: What values can an array hold?<br> (a) Numbers<br> (b) String<br> (c) Boolean<br> (d) All of the above",
        answer: "d"
      },
      {
        qa:
          "Question 4: A number cannot be a string.<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 5: What is a Boolean?<br> (a) X/Y<br> (b) Yes/No<br> (c) True/False<br> (d) Number",
        answer: "c"
      },
      {
        qa:
          "Question 5: JavaScript- var, let and const all accomplish the same task.<br> (a) True<br> (b) False",
        answer: "b"
      },
      {
        qa:
          "Question 6: How do you create a comment in Javascript?<br> (a) //<br> (b) !- -!<br> (c) /* */<br> (d) **",
        answer: "a"
      },
      {
        qa:
          "Question 6: How is an HTML id called in CSS?<br> (a) .<br> (b) !<br> (c) <><br> (d) #",
        answer: "d"
      },
      {
        qa:
          "Question 7: CSS- what position does 20px represent in the following syntax: #box- margin: 10px 5px 20px 25px?<br> (a) left<br> (b) right<br> (c) above<br> (d) below",
        answer: "d"
      },
      {
        qa:
          "Question 7: What is the correct structure of a for loop?<br> (a) for(condition; finalExpression; initialization)<br> (b) for(Expression; condition; finalExpression)<br> (c) for(initialization; condition; finalExpression)<br> (d) None of these",
        answer: "c"
      },
      {
        qa:
          "Question 8: What is the first line of an HTML5 file?<br> (a) document.ready()<br> (b) !DOCTYPE html<br> (c) heading<br> (d) body ",
        answer: "b"
      },
      {
        qa:
          "Question 8: Javascript- what does a break statement do?<br> (a) Exits a switch statement or a loop<br> (b) Breaks the code<br> (c) Returns a string<br> (d) None of these",
        answer: "a"
      },
      {
        qa:
          "Question 9: Which is an example of camel case?<br> (a) ThisExample<br> (b) thisEXAMPLE<br> (c) thisExample<br> (d) THISexample",
        answer: "c"
      },
      {
        qa:
          "Question 9: CSS Box Model- what box is directly after the HTML element?<br> (a) Border<br> (b) Margin<br> (c) Width<br> (d) Padding",
        answer: "d"
      },
      {
        qa:
          "Question 10: Javascript- which is not an array method?<br> (a) .map<br> (b) .get<br> (c) .filter<br> (d) .reduce",
        answer: "b"
      },
      {
        qa:
          "Question 10: Javascript- what does Math.random() do?<br> (a) Rounds down<br> (b) Adds two numbers<br> (c) Gets a random number between 0-1<br> (d) Rounds up",
        answer: "c"
      }
    ];
  } //end of Game constructor

  clickApply() {  // function that activates the prompts for candidates to enter their name
    let clickOne = prompt("Candidate 1: Please enter your name:");  // first click prompts Candidate 1 name
    $(".namePromptOne").html("Candidate 1: " + clickOne);  //JQuery to make the input of Candidate 1 name = the HTML for that candidate's name
    this.candidatesName[0] = clickOne;  // the first object in the candidates Name array is Candidate 1's name

    if (this.candidatesName[0] != null) {  // if object 1 of candidate names array is not empty,
      let clickTwo = prompt("Candidate 2: Please enter your name:");  // the second click will prompt Candidate 2's name
      $(".namePromptTwo").html("Candidate 2: " + clickTwo);  //JQuery to make the input of Candidate 2 name = the HTML for that candidate's name
      this.candidatesName[1] = clickTwo;  // the second object in the candidates Name array is Candidate 1's name
    }
  }  // end of clickApply method

  showScreenTwo() {   //hides everything on screen 1 and shows background of screen 2, after both names have been entered in prompt
    $("body").toggleClass("screenTwo"); //switches from screen1 background to screen2 background
    $("#entirePlayerInfo").removeClass("defaultHide");
    $("#entirePlayerInfo").addClass("playerStats");
    $(".applyButton").hide(); //hides the apply button
    $(".jobDescription").hide(); //hides the instructions
  } // end of showScreenTwo method

  pickLevel() {   //hides everything on screen 2 and shows background of screen 3, after level is created
    $("body").toggleClass("screenThree"); //switches from screen2 background to screen3 background
    $(".playerStats").toggleClass("showNewColor");  //switches CSS on the Player Stats box
    $(".statsHide").toggleClass("defaultPoints");  //removes default of unhide to show player points
    $(".defaultPoints").toggleClass("statsShow");
    $("#beginGame").removeClass("defaultStart");  //this line and line below combined "show" the Begin Interview button
    $("#beginGame").addClass("startQuestions");  //this line and line above combined "show" the Begin Interview button
  }  // end of pickLevel method

  beginInterview() {  // function that starts the interview. Is inserted into the onclick function in logic sheet
    let theQuestion = this.juniorQuestionsOne[this.nextIndex].qa;  // variable that is equal to the question of the index the gaem is on inside the questions array
    $("#changeQuestions").html(theQuestion);  // JQuery to make the question = the HTML for the question
  }

  increaseQuestion() {  // function that increases the variable next Index after each turn. Is inserted into the onclick function in logic sheet
    this.nextIndex += 1;  // add 1 to the current index
    if (this.nextIndex !== this.juniorQuestionsOne.length) {  // if the index is not greater than the length of the question array, 
    let theQuestion = this.juniorQuestionsOne[this.nextIndex].qa;  // move to the next question (since the index has already been increased) 
    $("#changeQuestions").html(theQuestion); // JQuery to make the new question = the HTML for the question


  }}

} // end of Game class

//end of classes/methods