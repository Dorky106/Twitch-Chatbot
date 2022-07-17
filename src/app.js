import TwitchJs from 'twitch-js'
import fetchUtil from 'twitch-js/lib/utils/fetch'
import { Reponses } from './ResponseSelector';

import { BOT_USERNAME, CHANNEL_NAME, CLIENT_ID, CLIENT_SECRET, OAUTH_TOKEN, REFRESH_TOKEN, TIMER, BROADCASTER_ID, DGrimDawn, DWolcenLordsofMayhem, DTorchLight2, DPathofExile, DLastEpoch, Shoutouts, StreamRaidersMessage } from './constants';
import { Chat, ChatCommands, ChatEvents } from 'twitch-js';
import { StreamRaidersInit, StreamRaidersUpdate } from './StreamRaiders';
import { Shoutout } from './Responses/Shoutouts';
import { Console } from 'console';

var twitchJs
const fs = require('fs');
async function FillInfo()
{
    let promise = new Promise((resolve, reject) => {fs.readFile('src/Input.txt', 'utf-8', (err, data) => 
    {
        if(err) throw err
        var content = data.split(/\r\n|\n/);
        for(var line = 0; line < content.length; line++)
        {
        //#region Auth and Channel Info
            if(content[line].startsWith("CLIENT_ID:"))
            {
                CLIENT_ID = content[line].replace("CLIENT_ID:","");
                continue;
            }
            if(content[line].startsWith("CLIENT_SECRET:")) 
            {
                CLIENT_SECRET = content[line].replace("CLIENT_SECRET:","");
                continue;
            }
            if(content[line].startsWith("ACCESS_TOKEN:")) 
            {
                OAUTH_TOKEN = content[line].replace("ACCESS_TOKEN:","");
                continue;
            }
            if(content[line].startsWith("REFRESH_TOKEN:")) 
            {
                REFRESH_TOKEN = content[line].replace("REFRESH_TOKEN:","");
                continue;
            }
            if(content[line].startsWith("STREAMRAIDER_MSG:"))
            {
                StreamRaidersMessage = content[line].replace("STREAMRAIDER_MSG:","");
                continue;
            }
            if(content[line].startsWith("CHANNEL_NAME:")) 
            {
                CHANNEL_NAME = content[line].replace("CHANNEL_NAME:","");
                continue;
            }
            if(content[line].startsWith("BROADCASTER_ID:")) 
            {
                BROADCASTER_ID = content[line].replace("BROADCASTER_ID:","");
                continue;
            }
            if(content[line].startsWith("BOT_NAME:")) 
            {
                BOT_USERNAME = content[line].replace("BOT_NAME:","");
                continue;
            }
            //#endregion
            if(content[line].startsWith("SHOUTOUT:"))
            {
                Shoutouts.push(content[line].replace("SHOUTOUT:",""));
                continue;
            }

            if(content[line].startsWith("GRIMDAWN:"))
            {
                content[line] = content[line].replace("GRIMDAWN:","");
                DGrimDawn.push({ 
                    key: content[line].split(':')[0],
                    value: content[line].split(':')[1]
                });
                continue;
            }
            
            if(content[line].startsWith("LASTEPOCH:"))
            {
                content[line] = content[line].replace("LASTEPOCH:","");
                DLastEpoch.push({ 
                    key: content[line].split(':')[0],
                    value: content[line].split(':')[1]
                });
                continue;
            }
            
            if(content[line].startsWith("PATHOFEXILE:"))
            {
                content[line] = content[line].replace("PATHOFEXILE:","");
                DPathofExile.push({ 
                    key: content[line].split(':')[0],
                    value: content[line].split(':')[1]
                });
                continue;
            }
            
            if(content[line].startsWith("TORCHLIGHT2:"))
            {
                content[line] = content[line].replace("TORCHLIGHT2:","");
                DTorchLight2.push({ 
                    key: content[line].split(':')[0],
                    value: content[line].split(':')[1]
                });
                continue;
            }
            
            if(content[line].startsWith("WOLCENLORDSOFMAYHEM:"))
            {
                content[line] = content[line].replace("WOLCENLORDSOFMAYHEM:","");
                DWolcenLordsofMayhem.push({ 
                    key: content[line].split(':')[0],
                    value: content[line].split(':')[1]
                });
                continue;
            }
        }
    });
        setTimeout(() => resolve("DONE!"), 1000)
    });
    let result = await promise;
    CheckStreamInfo()
    setInterval(CheckStreamInfo, TIMER);
    run();
}
FillInfo();
const OnAuthFailure = () =>
    fetchUtil('https://id.twitch.tv/oauth2/token', {
        method: 'post',
        search: {
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        },
    }).then((response) => response.accessToken)


let chat;
let gameName;
let buildArg;
let livestream = false;

function CheckStreamInfo()
{
    twitchJs = new TwitchJs({
        token: OAUTH_TOKEN, 
        clientId: CLIENT_ID, 
        username: BOT_USERNAME, 
        onAuthenticationFailure: OnAuthFailure})
    twitchJs.api
    .get('streams', {search: {user_id: BROADCASTER_ID}})
    .then(response =>{
        if(response['data'].length != 0)
        {
            if(response['data'][0]['type'] == "live")
            {
                livestream = true;
            }
            else
            {
                livestream = false;
            }
        }
        else
        {
            livestream = false;
        }
    });
    

    twitchJs.api
    .get('channels', {search: {broadcaster_id: BROADCASTER_ID}})
    .then(response =>{
        //Get what game is being played!
        gameName = response['data'][0]['gameName'];
        var tmp = response['data'][0]['title'];
        if(livestream)
        {
            if(tmp.includes("!streamraiders"))
            {
                StreamRaidersUpdate(true, CHANNEL_NAME);
            }
            else
            {
                StreamRaidersUpdate(false);
            }
        }
        else
        {
            StreamRaidersUpdate(false);
        }
        var splits = tmp.split(' ');
        splits.forEach(element => {
            if(element.startsWith("#"))
            {
                buildArg = element.replace('#', '');
            }
        });
        //Used to check gameName
        //console.log(response);
    });

}

const run = async() => {
    chat = new Chat({
        username: BOT_USERNAME,
        token: OAUTH_TOKEN,
        log: {level: "silent"}
    });

    await chat.connect();
    await chat.join(CHANNEL_NAME);
    StreamRaidersInit(chat, CHANNEL_NAME, StreamRaidersMessage);
    chat.on('PRIVMSG', (message) => 
    {
        var user = message.tags.displayName;
        var command = message.message.split(" ")[0];
        var response = null;
        //Check if a basic command
        if(command.startsWith("!"))
        {
            response = Reponses(command, user, message.message, gameName, buildArg);
        }
        else //Normal message for shoutout options upon their first message
        {
            //Checks if user should be shouted out in their first message or not
            response = Shoutout(user);
        }
        if(response != null)
        {
            chat.say(CHANNEL_NAME, response);
        }
    });
};