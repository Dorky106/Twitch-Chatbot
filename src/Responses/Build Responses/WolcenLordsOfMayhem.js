import { DWolcenLordsofMayhem } from "../../constants";

export function WolcenLordsOfMayhem(argument)
{
    for(const[key, value] of Object.entries(DWolcenLordsofMayhem))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}