let HumScore = 0;
let CompScore = 0;

function getComputerChoice(){
    let CompChoice = Math.floor(Math.random()*100);
    
    if (CompChoice <= 33){
        return "Rock";
    }
    else if (CompChoice > 33 & CompChoice <= 66){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice(){
    let HumChoice = prompt(`What will you choose:
        1. Rock
        2. Paper
        3. Scissor`)

        HumChoice = HumChoice?.toString();
        HumChoice = HumChoice?.toLowerCase();
        
        switch (HumChoice){
            case "1":
                return "Rock";
            break;

            case "2":
                return "Paper";
            break;

            case "3":
                return "Scissor";
            break;

            case "rock":
                return "Rock";
            break;

            case "paper":
                return "Paper";
            break;

            case "scissor":
                return "Scissor";
            break;

            default:
                alert("Invalid option, please try again.");
            return getHumanChoice();
        }
}

function playRound(){
    let HC = getHumanChoice();
    console.log(`Nice!!! you have selected: ${HC}`);

    let CC = getComputerChoice();
    console.log(`The computer have selected: ${CC}`);

    switch(true){

        // cases human win
        case (HC === "Rock" && CC === "Scissor"):
            HumScore++;
            console.log(`You WIN the round ${HC} beats ${CC}!!!
Score: You ${HumScore}    Computer ${CompScore}
                
                `);
            
        break;
        case (HC === "Paper" && CC === "Rock"):
            HumScore++;
            console.log(`You WIN the round ${HC} beats ${CC}!!!
Score: You ${HumScore}    Computer ${CompScore}

                `);
        break;
        case (HC === "Scissor" && CC === "Paper"):
            HumScore++;
            console.log(`You WIN the round ${HC} beats ${CC}!!!
Score: You ${HumScore}    Computer ${CompScore}
                
                `);
        break;

        // cases computer win
        case (CC === "Rock" && HC === "Scissor"):
            CompScore++;
            console.log(`You LOSE the round ${CC} beats ${HC}!!!
Score: You ${HumScore}    Computer ${CompScore}
                
                `);
        break;
        case (CC === "Paper" && HC === "Rock"):
            CompScore++;
            console.log(`You LOSE the round ${CC} beats ${HC}!!!
Score: You ${HumScore}    Computer ${CompScore}
                
                `);
        break;
        case (CC === "Scissor" && HC === "Paper"):
            CompScore++;
            console.log(`You LOSE the round ${CC} beats ${HC}!!!
Score: You ${HumScore}    Computer ${CompScore}
                
                `);
        break;

        //cases where both choises are the same
        default:
            console.log(`TIE!! Shoot again...
                
                `)
        return playRound();
               
    }
}

function playGame(){
    do{
        playRound();
    }while(HumScore < 5 && CompScore < 5)

    if(HumScore===5){
        console.log(`Congrats you WIN the game`);
    }else{
        console.log(`you LOSE...`)
    }
}

playGame();