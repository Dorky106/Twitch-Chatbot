import { DPathofExile } from "../../constants";

export function PathofExile(argument)
{
    for(const[key, value] of DPathofExile.entries(dictionary))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}