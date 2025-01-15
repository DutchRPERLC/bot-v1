const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports =  {
    deleted: true,
    name: 'ban',
    description: "Verban een member",
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [{
        name: "user",
        description: "Welke gebruiker wil je verbannen?",
        required: true,
        type: ApplicationCommandOptionType.Mentionable,
    },
    {
        name: "reden",
        description: "Geef een reden op om deze gebruiker te verbannen.",
        type: ApplicationCommandOptionType.String,
    }
],

permissionsRequired: [PermissionFlagsBits.Administrator],
botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply('ban..');
    },
};