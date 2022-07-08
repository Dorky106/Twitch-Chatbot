import { Shoutouts } from "../constants";

const Shouted = [];

export function Shoutout(user)
{
    if(Shoutouts.length != 0)
    {
        if(Shoutouts.includes(user))
        {
            if(Shouted.includes(user))
            {
                return null;
            }
            Shouted.push(user);
            return "@" + user + " is an awesome streamer and should be checked out www.twitch.tv/"+user;
        }
    }
    return null;
}