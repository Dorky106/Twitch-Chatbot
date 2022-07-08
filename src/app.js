import TwitchJs from 'twitch-js'
import fetchUtil from 'twitch-js/lib/utils/fetch'
import { Reponses } from './ResponseSelector';

import { BOT_USERNAME, CHANNEL_NAME, CLIENT_ID, CLIENT_SECRET, OAUTH_TOKEN, REFRESH_TOKEN, TIMER, BROADCASTER_ID } from './constants';
import { Chat, ChatCommands, ChatEvents } from 'twitch-js';
import { StreamRaidersInit, StreamRaidersUpdate } from './StreamRaiders';
import { Shoutout } from './Responses/Shoutouts';

const OnAuthFailure = () =>
    fetchUtil('https://id.twitch.iv/oauth2/token', {
        method: 'post',
        search: {
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        },
    }).then((response) => response.accessToken)

const twitchJs = new TwitchJs({
    token: OAUTH_TOKEN, 
    clientId: CLIENT_ID, 
    username: BOT_USERNAME, 
    onAuthenticationFailure: OnAuthFailure})
let chat;
let gameName;
let buildArg;
let livestream = false;

function CheckStreamInfo()
{
    twitchJs.api
    .get('streams', {search: {user_id: BROADCASTER_ID}})
    .then(response =>{
        if(response['data'].length != 0)
        {
            if(response['data'][0]['type'] == "live")
            {
                livestream = true;
            }
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
                StreamRaidersUpdate(true);
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
    StreamRaidersInit(chat);
    chat.on('PRIVMSG', (message) => 
    {
        console.log(message);
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

CheckStreamInfo();
setInterval(CheckStreamInfo, TIMER);
run();
