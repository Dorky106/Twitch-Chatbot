import { DLastEpoch } from "../../constants";

export function LastEpoch(argument)
{
    for(const[key, value] of Object.entries(DLastEpoch))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}