import { DPathofExile } from "../../constants";

export function PathofExile(argument)
{
    for(const[key, value] of Object.entries(DPathofExile))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}