import { DGrimDawn } from "../../constants";

export function GrimDawn(argument)
{
    for(const[key, value] of Object.entries(DGrimDawn))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}