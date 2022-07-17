//#region App Info
//https://dev.twitch.tv/console 
//Set the application name to whatever you want
//Set your redirect to https://twitchtokengenerator.com
//Set category to Chat Bot
//Copy your client ID and paste it below
//Copy your client secret to below
//https://twitchtokengenerator.com/
//Fill out the info
//Scopes required is just chat:read, chat:edit
//Generate Token! to get the OAuth_Token(Access Token) and Refresh Token
//Client ID of your app
export var CLIENT_ID = '';
//Client secret of your app
export var CLIENT_SECRET = '';
//Access token of your app
export var OAUTH_TOKEN = '';
//Refresh token of your app
export var REFRESH_TOKEN = '';
//#endregion

//Your channel name with a # in front of it
export var CHANNEL_NAME = '';
//The broadcaster ID of the channel you want to get the info from
//Can get the ID here https://www.streamweasels.com/tools/convert-twitch-username-to-user-id/
export var BROADCASTER_ID = ''
//Account the bot will use
export var BOT_USERNAME = '';

////#region Update timer
//Milliseconds to Seconds
const MILLISECONDS = 1000;
//Seconds to minutes
const MtSECONDS = 60;
//How often in minutes the bot should check the stream info       
const MINUTES = 15;
//Time in milliseconds of how often to check the stream         
export const TIMER = MILLISECONDS * MtSECONDS * MINUTES;
//#endregion

//#region StreamRaiders
export var StreamRaidersMessage = '';
//#endregion

//#region Shoutout List
export var Shoutouts = [];
//#endregion

export var DADVENTURESOFVANHELSINGFINALCUT = [];
export var DDiablo3 = [];
export var DGrimDawn = [];
export var DLastEpoch = [];
export var DPathofExile = [];
export var DTorchLight2 = [];
export var DWolcenLordsofMayhem = [];