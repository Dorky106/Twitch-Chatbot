import { DDiablo3 } from "../../constants";

export function Diablo3(argument)
{
    for(const[key, value] of Object.entries(DDiablo3))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}