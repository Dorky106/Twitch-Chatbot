import { DTorchLight2 } from "../../constants";

export function TorchLight2(argument)
{
    for(const[key, value] of DTorchLight2.entries(dictionary))
    {
        console.log(key, value);
        if(argument == key)
        {
            return value;
        }
    }
    return "Nothing to see here!";
}