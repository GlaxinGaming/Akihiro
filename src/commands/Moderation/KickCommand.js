const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  run(client, message, args) {
        const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const kickEmbed = new Discord.MessageEmbed()
        .setColor('#FF186A')
        .setDescription(`${target} Has Been Kicked!`)
        
        targetMember.kick()
        message.channel.send(kickEmbed)
      } else {
        message.channel.send(`${tag} Please specify someone to kick!`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command!`
      )
    }
  }
}