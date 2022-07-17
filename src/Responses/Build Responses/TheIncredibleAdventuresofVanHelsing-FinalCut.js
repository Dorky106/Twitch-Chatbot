import { DADVENTURESOFVANHELSINGFINALCUT} from "../../constants";

export function AdventuresofVanHelsingFinalCut(argument)
{
    for(const[key, value] of Object.entries(DADVENTURESOFVANHELSINGFINALCUT))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}