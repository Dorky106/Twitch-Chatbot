import { DGrimDawn } from "../../constants";

export function GrimDawn(argument)
{
    for(const[key, value] of DGrimDawn.entries(dictionary))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}