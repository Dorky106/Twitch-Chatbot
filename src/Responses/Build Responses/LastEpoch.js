import { DLastEpoch } from "../../constants";

export function LastEpoch(argument)
{
    for(const[key, value] of Object.entries(DLastEpoch))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}