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

        console.log(HumChoice);
        
        switch (HumChoice){
            case "1":
                return "Rock";
            break;

            case "2":
                return "Paper";
            break;

            case "3":
                return " Scissor";
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

console.log(getHumanChoice());