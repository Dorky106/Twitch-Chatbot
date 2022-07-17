import { RollDice } from "./Responses/DiceRolls";
import { GameSelection } from "./Responses/GameSelection";


export function Reponses(command, user, message, gameName, buildArg)
{
    console.log(gameName + " : " + buildArg)
    switch(command)
    {
        case "!build":
            return GameSelection(gameName, buildArg);
        case "!gamebuild":
            var game = message.split("\'")[1];
            var build = message.split("\'")[2];
            console.log("Game Build!");
            return Reponses("!build", user, message, game, build);
        case "!commands":
            return "@"+user+" a list of commands can be found at https://github.com/Dorky106/Twitch-Chatbot/wiki/Commands";
        default:
            //Dice Roll Regex
            const diceRegex = /^\!d\d/gm;
            if(command.match(diceRegex))
            {
                return RollDice(user, command);
            }
            //Last possible thing, check if command is a build in the currently played game
            buildArg = command.replace("!", "");
            console.log(buildArg);
            return Responses("!build", user, message, gameName, );
    }
}