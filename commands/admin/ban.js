const commando = require('discord.js-commando');
const discord = require('discord.js');

class BanCommand extends commando.Command
{
    constructor (client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Banuje gracza na serwerze'
        });
    }

    async run(message, args)
    { 
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("Wybacz, nie mogę odnaleźć tego użytkownika")
            return;
        }
        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("Nie posiadasz uprawnień, aby wykonać powyższą czynność!");
            return;
        }
        message.channel.send("Wyrzucono: " + bannedUser + ". Powód: " + reason);
        var args2 = args.split('');
        args2.splice(0,1);
        var reason = args2.join('');
        let banEmbed = new discord.RichEmbed()
            .setDescription("Informacje na temat kary")
            .addField("Zbanowana osoba:", bannedUser)
            .addField("Moderator:", message.author)
            .addField("Zbanowany w:", message.channel)
            .addField("Powód:", reason)
            .setColor(0xfc0000)
        message.channel.send(banEmbed);
        message.delete(0)
            .then(console.log)
            .catch(console.error);
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = BanCommand;