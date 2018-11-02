
class Game {
    constructor(){
        this.winner = [];
    }
};

class Players{
    constructor(){
        this.playerOne = [{name: " ", points: " ", steals: " "}];
        this.playerOne = [{name: " ", points: " ", steals: " "}];
    }

    enterPlayerName(){

    }
};

class Questions{
    constructor(){
        this.juniorLevel = [];
        this.midLevel = [];
        this.seniorLevel = [];
        this.count = 10
        this.counter = setInterval(timer, 1000);
    }

    chosenLevelJunior(){

    }

    chosenLevelMid(){

    }

    chosenLevelSenior(){

    }

    timerCountDown(){
        this.count -= 1;

        if(this.count <= 0){
            clearInterval(this.counter);
            return;
        }

    }
    // document.getElementById("timer").innerHTML=count + " seconds"; this will connect to HTML timer once HTML is written
}


