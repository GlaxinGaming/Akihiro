const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'Misc', ['embed']);
  }

  run(client, message, args) {
    const color = args[0]
    if (!color) {
      return message.reply('Please provide a color code!');
    };
    const announceMessage = args[1]
    if (!announceMessage) {
      return message.reply('Please provide a message!');
    };
    const announceEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(announceMessage)
    
    message.channel.send(announceEmbed)
  }
}