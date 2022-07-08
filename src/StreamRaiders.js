import { CHANNEL_NAME, StreamRaidersMessage, TIMER} from './constants';
let chat = null;
let playingStreamRaiders = false;

export function StreamRaidersInit(_chat)
{
    chat = _chat;
    setInterval(StreamRaiders, TIMER);
}

export function StreamRaidersUpdate(playing)
{
    playingStreamRaiders = playing;
}

function StreamRaiders()
{
    if(playingStreamRaiders)
    {
        chat.say(CHANNEL_NAME, StreamRaidersMessage)
    }
}