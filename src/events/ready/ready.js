const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    setInterval(function() {
    const activities = [`${client.users.cache.size} Users In ${client.guilds.cache.size} Servers` , `My Prefix Is & | &invite`];
        const activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(activity, { type: "WATCHING" });
    }, 5000);
  }
}