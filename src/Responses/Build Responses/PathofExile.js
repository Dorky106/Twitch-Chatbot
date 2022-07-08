import { DPathofExile } from "../../constants";

export function PathofExile(argument)
{
    for(const[key, value] of Object.entries(DPathofExile))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}