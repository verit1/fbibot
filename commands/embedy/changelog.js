const commando = require('discord.js-commando');
const discord = require('discord.js');

class ChangelogCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'changelog',
            group: 'embedy',
            memberName: 'changelog',
            description: 'Ostatnie zmiany wprowadzone we frakcji'
        });
    }

    async run(message, args)
    {
        var myChangelog = new discord.RichEmbed()
            .setTitle("INFORMATION 0.1")
            .addField("13.09.2018", [" :white_check_mark: Zgredu wylizał h00ja veritowi za bota", " :white_check_mark: Comatose to kurwa"], true)
            .setColor(0x42f46b)
        message.channel.send(myChangelog);
        message.delete(0)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = ChangelogCommand;