const commando = require('discord.js-commando');
const discord = require('discord.js');

class KickCommand extends commando.Command
{
    constructor (client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Wyrzuca gracza z serwera'
        });
    }

    async run(message, args)
    { 
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("Wybacz, nie mogę odnaleźć tego użytkownika")
            return;
        }
        if(!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send("Nie posiadasz uprawnień, aby wykonać powyższą czynność!");
            return;
        }
        message.channel.send("Wyrzucono: " + kickedUser + ". Powód: " + reason);
        var args2 = args.split('');
        args2.splice(0,1);
        var reason = args2.join('');
        let kickEmbed = new discord.RichEmbed()
            .setDescription("Informacje na temat kary")
            .addField("Wyrzucona osoba:", kickedUser)
            .addField("Moderator:", message.author)
            .addField("Wyrzucony w:", message.channel)
            .addField("Powód:", reason)
            .setColor(0xfc0000)
        message.channel.send(kickEmbed);
        message.delete(0)
            .then(console.log)
            .catch(console.error);
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = KickCommand;