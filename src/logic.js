
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
    }
})   // end of "onclick" APPLY button

    $(".job").click(function(){
    newGame.pickLevel();
    $(".job").addClass("levels");
    $(".job").removeClass("active");

})

    $("#beginGame").click(function(){
        newGame.beginInterview();
        newGame.nextPlayer();
        newGame.whoWon();
})

}) //JQuery end wrap