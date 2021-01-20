const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'Misc', []);
  }

  run(client, message, args) {
    const inviteEmbed = new Discord.MessageEmbed()
    .setColor('#FF186A')
    .setTitle('Akihiro Invite Link ')
    .setDescription('[Click Here To Add Akihiro In Your Server](https://discord.com/api/oauth2/authorize?client_id=800952368006561893&permissions=8&scope=bot%20applications.commands)')
    .setImage('https://cdn.discordapp.com/attachments/797798440176320515/800970992779788288/standard_21.gif')
    .setFooter('Invite Me In Your Server :)')
    
    message.channel.send(inviteEmbed);
  }
}