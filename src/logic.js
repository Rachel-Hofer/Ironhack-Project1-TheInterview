
//start logic here
$(document).ready(function() { //JQuery start wrap\
    
    $(".levels").removeClass("active");
    newGame = new Game;

    $(".applyButton").click(function(){
    newGame.clickApply();
        if(newGame.candidatesName.length === 2){
            newGame.showScreenTwo();
            
            $(".job").removeClass("levels");
            $(".job").addClass("active");
            $(".gameNameInterview").hide();
    }
})   // end of "onclick" APPLY button

    $(".job").click(function(){
    newGame.pickLevel();
    $(".job").addClass("levels");
    $(".job").removeClass("active");

})

    $("#beginGame").click(function(){
        $("#beginGame").hide('fast',  ()=>{
            $("#changeQuestions").removeClass("defaultHide");
            $("#changeQuestions").addClass("defaultShow");

            $("#defaultLabelInput").removeClass("defaultHide");
            $("#defaultLabelInput").addClass("defaultShow2");

            $("#entireQuestion").addClass("entireQuestionAdd");

            newGame.beginInterview();
        });
})

    $(".submit").click(function(){
        let theAnswer = newGame.juniorQuestionsOne[newGame.nextIndex].answer; 
        let theQuestion = newGame.juniorQuestionsOne[newGame.nextIndex].answer; 
        let theInput = $(".userTypes").val();
            console.log("answer " + theAnswer);
            console.log("input " + theInput);
   
        if(theAnswer === theInput){
            newGame.playerOnePoints+= 1;
            $("#scoreOne").html(newGame.playerOnePoints)
            alert("You are correct! " + newGame.candidatesName[0] + " you get 1 point." + newGame.candidatesName[1] + " your turn.")
            newGame.CandidateTwoTurn();
        
        }   else {
            alert("That is not correct. " + newGame.candidatesName[1] + " your turn.")
            newGame.CandidateTwoTurn();
        }
})

}) //JQuery end wrap