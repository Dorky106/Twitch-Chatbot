import { DGrimDawn } from "../../constants";

export function GrimDawn(argument)
{
    for(const[key, value] of Object.entries(DGrimDawn))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}