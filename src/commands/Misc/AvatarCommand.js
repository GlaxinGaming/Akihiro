const BaseCommand = require('../../utils/structures/BaseCommand');
const avatarEmbed = require('discord.js-avatar');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'Misc', []);
  }

  run(client, message, args) {
   avatarEmbed(message);
  }
}