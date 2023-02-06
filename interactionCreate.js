var devenirstaff = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
            .setCustomId('devenir-staff')
            .setLabel('Devenir staff')
            .setStyle(ButtonStyle.Primary),
    );
    var contestationdesanction = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
            .setCustomId('contestation-de-sanction')
            .setLabel('Contestation de sanction')
            .setStyle(ButtonStyle.Primary),
    );
    var report = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
            .setCustomId('report')
            .setLabel('report')
            .setStyle(ButtonStyle.Primary),
    );
    var autre = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
            .setCustomId('autre')
            .setLabel('Autre')
            .setStyle(ButtonStyle.Primary),
    );
    const ticket = new EmbedBuilder()
        .setColor(0xfc0019)
        .setTitle('Créer un ticket')
        .setDescription( `Pour créer un ticket veuillez appuyer sur l'un des boutons suivant.`);

    //bot.channels.cache.get("1070758578115313727").send({embeds: [ticket], components: [devenirstaff, contestationdesanction, report, autre]})
