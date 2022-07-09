import { DTorchLight2 } from "../../constants";

export function TorchLight2(argument)
{
    for(const[key, value] of Object.entries(DTorchLight2))
    {
        if(argument == value.key)
        {
            return value.value;
        }
    }
    return "Nothing to see here!";
}