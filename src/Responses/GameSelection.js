import { TorchLight2 } from "./Build Responses/TorchLight2";
import { GrimDawn } from "./Build Responses/GrimDawn";
import { LastEpoch } from "./Build Responses/LastEpoch";
import { PathofExile } from "./Build Responses/PathofExile";
import { WolcenLordsOfMayhem } from "./Build Responses/WolcenLordsOfMayhem";

export function GameSelection(gameName, buildArg)
{
    switch(gameName)
    {
        case "Grim Dawn":
            return GrimDawn(buildArg);
        case "Path of Exile":
            return PathofExile(buildArg);
        case "Last Epoch":
            return LastEpoch(buildArg);
        case "Wolcen Lords of Mayhem":
            return WolcenLordsOfMayhem(buildArg);
        case "Torch Light 2":
            return TorchLight2
        default:
            return "Game '" + gameName + "' not listed!";
    }
}