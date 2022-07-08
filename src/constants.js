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
export const CLIENT_ID = "<CLIENT_ID>";
//Client secret of your app
export const CLIENT_SECRET = '<CLIENT_SECRET>';
//Access token of your app
export const OAUTH_TOKEN = '<ACCESS_TOKEN>';
//Refresh token of your app
export const REFRESH_TOKEN = '<REFRESH_TOKEN>';
//#endregion

//Your channel name with a # in front of it
export const CHANNEL_NAME = '<CHANNEL_NAME>';
//The broadcaster ID of the channel you want to get the info from
//Can get the ID here https://www.streamweasels.com/tools/convert-twitch-username-to-user-id/
export const BROADCASTER_ID = "<BROADCASTER_ID>"
//Account the bot will use
export const BOT_USERNAME = '<BOT_USERNAME>';

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
export const StreamRaidersMessage = '<StreamRaiders URL if you want to use it>';
//#endregion

//#region Shoutout List
export const Shoutouts = ["<TWITCH_USER1>", "<TWITCH_USER2>", "<TWITCH_USER3>", "<TWITCH_USER4>"];
//#endregion

//#region Dictionaries
export const DGrimDawn = {
    "<BUILDNAME>": "<BUILD LINK>"
};
export const DLastEpoch = {
    "<BUILDNAME>": "<BUILD LINK>"
};

export const DPathofExile = {
    "<BUILDNAME>": "<BUILD LINK>"
};

export const DTorchLight2 = {
    "<BUILDNAME>": "<BUILD LINK>"
};

export const DWolcenLordsofMayhem = {
    "<BUILDNAME>": "<BUILD LINK>"
};
//#endregion