const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
  }

  run(client, message, args) {
        const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const banEmbed = new Discord.MessageEmbed()
        .setColor('#FF186A')
        .setDescription(`${target} Has Been Banned!`)
        
        targetMember.ban()
        message.channel.send(banEmbed)
      } else {
        message.channel.send(`${tag} Please specify someone to ban!`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command!`
      )
    }
  }
}