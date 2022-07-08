export function RollDice(user, message)
{
    message = message.replace("!d", "");
    var max = parseInt(message);
    return "@"+user + " rolled a " + Math.floor(Math.random() * max);
}