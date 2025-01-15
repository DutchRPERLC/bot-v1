const { devs, testServer } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);
    
        if (!commandObject) return;
    
        if (commandObject.devOnly) {
            if (!devs.includes(interaction.member.id)) {
                return interaction.reply({
                    content: "Developers only command.",
                    ephemeral: true,
                });
            }
        }


        if (commandObject.PermissionsRequired?.length) {
            for (const permission of commandObject.PermissionsRequired) {
                if (!interaction.member.permissions.has(permission)) {
                    return interaction.reply({
                        content: "U heeft niet de juiste permissies.",
                        ephemeral: true,
                    });
                }
            }

        }

        await interaction.deferReply();
    
        if (commandObject.botPermissions?.length) {
            const bot = interaction.guild.members.me;
            for (const permission of commandObject.botPermissions) {
                if (!bot.permissions.has(permission)) {
                    return interaction.reply({
                        content: "Ik heb niet de juiste permissies.",
                        ephemeral: true,
                    });
                }
            }

            await commandObject.callback(client, interaction);
        }


    } catch (error) {
        console.log(`Er is een error gevonden: ${error}`);
    }
};