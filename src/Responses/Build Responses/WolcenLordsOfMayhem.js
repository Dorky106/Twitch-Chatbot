import { DWolcenLordsofMayhem } from "../../constants";

export function WolcenLordsOfMayhem(argument)
{
    for(const[key, value] of Object.entries(DWolcenLordsofMayhem))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}