import { RollDice } from "./Responses/DiceRolls";
import { GameSelection } from "./Responses/GameSelection";


export function Reponses(command, user, message, gameName, buildArg)
{
    switch(command)
    {
        case "!build":
            return GameSelection(gameName);
        case "!gamebuild":
            var game = message.split("\'")[1];
            var build = message.split("\'")[2];
            console.log("Game Build!");
            return Reponses("!build", user, message, game, build);
        default:
            //Dice Roll Regex
            const diceRegex = /^\!d\d/gm;
            if(command.match(diceRegex))
            {
                return RollDice(user, command);
            }
            console.log("Doesn't match regex for dice roll!");
            return null;
    }
}