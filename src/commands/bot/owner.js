const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed(
        {
            title: `📘・Owner information`,
            desc: `____________________________`,
            thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
            fields: [
                {
                    name: '👑┆Owner name',
                    value: `Neppixel`,
                    inline: true,
                },
                {
                    name: '🏷┆Discord tag',
                    value: `biraj#7570`,
                    inline: true,
                },
                {
                    name: '🏢┆Organization',
                    value: `iHalloween`,
                    inline: true,
                },
                {
                    name: '🌐┆Website',
                    value: `[https://birajrai.tk](https://ihalloween.ml)`,
                    inline: true,
                },
            ],
            type: 'editreply',
        },
        interaction
    );
};
