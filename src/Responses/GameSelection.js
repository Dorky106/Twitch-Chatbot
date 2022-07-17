import { TorchLight2 } from "./Build Responses/TorchLight2";
import { GrimDawn } from "./Build Responses/GrimDawn";
import { LastEpoch } from "./Build Responses/LastEpoch";
import { PathofExile } from "./Build Responses/PathofExile";
import { WolcenLordsOfMayhem } from "./Build Responses/WolcenLordsOfMayhem";
import { Diablo3 } from "./Build Responses/Diablo3";
import { AdventuresofVanHelsingFinalCut } from "./Build Responses/TheIncredibleAdventuresofVanHelsing-FinalCut";

export function GameSelection(gameName, buildArg)
{
    switch(gameName)
    {
        case "The Incredible Adventures of Van Helsing":
        case "The Incredible Adventures of Van Helsing: Extended Edition":
        case "The Incredible Adventures of Van Helsing II":
        case "The Incredible Adventures of Van Helsing III":
        case "The Incredible Adventures of Van Helsing: Final Cut":
            return AdventuresofVanHelsingFinalCut(buildArg);
        case "Diablo 3":
            return Diablo3(buildArg);
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