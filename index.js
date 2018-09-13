const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: "/"
});
const TOKEN = 'NDg5ODMwODYyNDg2MTEwMjE5.DnwfUA.U0TFOvxrOoPauZxER7MHjT9yzCA'

bot.registry.registerGroup('embedy', 'Embedy');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function (message){
    if(message.content == 'konon')
    {
        message.channel.sendMessage('Hej ' + message.author + ', znalazłeś ukrytego złotego prezydenta, od teraz spotykać będzie Cię wyłącznie szczęście.');
    }
    if(message.content == 'pomoc')
    {
        message.channel.sendMessage('W celu uzyskania wymaganej pomocy, zgłoś swój problem do zarządu na kanale #pomoc. Aby poznać skład zarządu, wpisz "zarząd"');
    }
    if(message.content == 'zarząd')
    {
        message.channel.sendMessage('Osoby boże - Zgredu, kosmaty; opieka nad botem - verit');
    }
});

bot.on('ready', function(){
    console.log('W-11, pokaż mi dostępność');
    bot.user.setActivity("Powija szmal od czarnuchów", {url: 'https://www.twitch.tv/usa_'}, {type: 'STREAMING'})
});

bot.login(TOKEN);