module.exports =  {
    name: 'ping',
    description: "geeft Bot ping weer.",

    callback: async(client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(`Pong! \n Client ${ping} ms.\n WS Ping ${client.ws.ping}`);
    },
};