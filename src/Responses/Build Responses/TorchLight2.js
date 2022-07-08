import { DTorchLight2 } from "../../constants";

export function TorchLight2(argument)
{
    for(const[key, value] of Object.entries(DTorchLight2))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}