
//start logic here
$(document).ready(function() { //JQuery start wrap\
   
    $(".levels").removeClass("active");

    $(".applyButton").click(function(){
    newCandidate = new Candidates();
    clickApply();
        if(newCandidate.candidatesName.length === 2){
            newGame = new Game;
            newQuestion = new Questions;
        
            newGame.showScreenTwo();
            
            $(".job").removeClass("levels");
            $(".job").addClass("active");
    }
})   // end of "onclick" APPLY button

    $(".job").click(function(){
    newGame.pickLevel();
    $(".job").addClass("levels");
    $(".job").removeClass("active");

})

    $("#beginGame").click(function(){
        newGame.beginInterview();
})


function clickApply(){
    let clickOne = prompt("Candidate 1: Please enter your name:");
    $(".namePromptOne").html("Candidate 1: " + clickOne);
        newCandidate.candidatesName[0] = clickOne;

    if(newCandidate.candidatesName[0] != null){
        let clickTwo = prompt("Candidate 2: Please enter your name:");
        $(".namePromptTwo").html("Candidate 2: " + clickTwo);
        newCandidate.candidatesName[1] = clickTwo;
    }
}
    


}) //JQuery end wrap