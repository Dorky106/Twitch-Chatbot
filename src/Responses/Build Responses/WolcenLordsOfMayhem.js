import { DWolcenLordsofMayhem } from "../../constants";

export function WolcenLordsOfMayhem(argument)
{
    for(const[key, value] of DWolcenLordsofMayhem.entries(dictionary))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}