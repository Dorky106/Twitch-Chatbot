import { StreamRaidersMessage, TIMER} from './constants';
let chat = null;
let playingStreamRaiders = false;
let channel = null;
let message = null;

export function StreamRaidersInit(_chat, _channel, _message)
{
    chat = _chat;
    channel = _channel;
    message = _message;
    setInterval(StreamRaiders, TIMER);
}

export function StreamRaidersUpdate(_playing)
{
    playingStreamRaiders = _playing;
}

function StreamRaiders()
{
    if(playingStreamRaiders)
    {
        chat.say(channel, message)
    }
}