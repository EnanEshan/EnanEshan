const Discord = require('discord.js');
const config = require('../../config.json')

module.exports = {
    commands: ['avatar', 'icon', 'pfp'],
    expectedArgs: '<user> / none',
    maxArgs: 1,
    description: "Get someone else's discord avatar.",
    callback: (client, message, user, agruments, text) => {
        const avatarEmbed = new Discord.MessageEmbed()
                .setColor(config.embedColor)
                .setFooter(config.embedFooterText, config.embedFooterIcon)
            if (!message.mentions.users.size) {
                avatarEmbed.setTitle('Your Avatar')
                avatarEmbed.addField('URL', `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`, false)
                avatarEmbed.setImage(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                message.channel.send(avatarEmbed)
                return
            }
            const otherAvatar = message.mentions.users.map(user => {
                avatarEmbed.setTitle(`${user.username}'s Avatar`)
                avatarEmbed.addField('URL', `${user.displayAvatarURL({ format: "png", dynamic: true })}`, false)
                avatarEmbed.setImage(user.displayAvatarURL({ format: "png", dynamic: true }))
                return
            });
            message.channel.send(avatarEmbed)
    },
}