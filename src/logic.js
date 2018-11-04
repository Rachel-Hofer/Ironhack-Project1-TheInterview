
//start logic here
$(document).ready(function() { //JQuery start wrap
    $(".levels").removeClass("active");

    $(".applyButton").click(function(){
    newCandidate = new Candidates();
    clickApply();
    
    if(newCandidate.candidatesName.length === 2){
        newGame = new Game;
        newGame.showScreenTwo();
        $(".job").removeClass("levels");
        $(".job").addClass("active");
    }
})

    $(".job").click(function(){
        newGame.pickLevel();
        $(".job").addClass("levels");
        $(".job").removeClass("active");
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