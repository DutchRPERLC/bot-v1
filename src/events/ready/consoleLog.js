const { ActivityType } = require("discord.js");

module.exports = (client) => {
    console.log(client.user.id, ": De bot staat klaar.");
    client.user.setActivity({
        name: "In onderhoud..🛠️",
        type: ActivityType.Custom,
    });
};