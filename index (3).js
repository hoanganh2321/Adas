
token = "";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;

noti_key = "Vaction"
console.log("Vaction \nJoinDiscord: https://discord.gg/tAD4TFuxZN");
name_server = "  **__Godez Community | 2024__**"; 
invite_discord = "https://discord.gg/tAD4TFuxZN"; 
ping_role_id = {
  boss: "",
  sword: "",
  mirage: "",
  kitsune: "",
  haki: {
    normal: "",
    legend: ""
  },
  fullmoon: "",
  fruit_drop: "",
  near: "",
  king_legacy: "",

},
noti_config = {
  random_anime_picture: false,
  boss: true,
  sword: true,
  mirage: true,
  kitsune: true,
  haki: {
    normal: false,
    legend: true,
  },
  fullmoon: true,
  fruit_drop: false,
  king_legacy: false,
  near: false,
};

// req: turn on for edit webhook or no = error
webhook_config = {
  boss: "https://discord.com/api/webhooks/1271875178594308330/N5oARYQGRZAUQKZR23OJFxgECi_ieLhqAm1NgksM--EGWsECDATZORFIhUiQHaA9uAOM",
  sword: "https://discord.com/api/webhooks/1271875396496920697/gjB9j3n4rRYTnDTRjbAmwzI9v714OcOySB0zOC5FKXGU7rHyDy1sQ49lnEAcpviYwGSV",
  mirage: "https://discord.com/api/webhooks/1271875472015229032/-e1DgLfI4ug7HbRqgDKDlgfC06nipwj6DE5u7w79kjPHzQlwfu-h5gU1nRHlTdFz8UG4",
  kitsune: "https://discord.com/api/webhooks/1271875525018652672/gwThbfCQYbvB4YEumHYqZ9pripSnAZVf4Sir6UPAKlYBJnSHAyZyyoKwmVCJnYGr7pXZ",
  haki: {
    normal: "https://discord.com/api/webhooks/1236617968583049237/6hVNE6rFE704JUEuQQujZdtMWgj_QlLpAyPfKkTfErjOogxhgQLTuCWRD6STJA1jI7Pc",
    legend: "https://discord.com/api/webhooks/1271875579075100774/XfNKtVwhC1RFBycaTHOQp3GwdvyNHEAxkYjZVLE0gKGY8yWQR6AoLt-RfRtPrTbQ07nA",
  },
  fullmoon: "https://discord.com/api/webhooks/1271875252980289547/3Zmd9NaSlOylIE-k0exT_CDkntLFZAs7bC3H3lRCAxlIiwHgDyek1Hu-U6oXBWkXUqnq",
  fruit_drop: "https://discord.com/api/webhooks/1236618754704543854/EUc8d2PHG2Nfe6v9ynUAPlVPj4ROi8zWdTdnyjwr6FuTbY53anN6IWXmBcQFB8C6rVi8",
  king_legacy: "https://discord.com/api/webhooks/1237047011966976073/bwCg8XBou5PP6EUIq4Vpu7S_bcWhPI2tzfnyiuHyqnFv5jFz0zAVJFwbZ4e64xIDIwfU",
  near: "https://discord.com/api/webhooks/1226816162248265810/aRKnVXVGLsB8bhJhtd5mKzgi4U9WZDpq0x9yIPScs8qDFu2_xFdHQpnhRg28XlrxYlRu",
};

try {
  require.resolve("discord.js-selfbot-v13");
} catch (e) {
  console.log("Please run: `npm install discord.js-selfbot-v13");
  process.exit(0);
}

try {
  require.resolve("discord.js");
} catch (e) {
  console.log("Please run: `npm install discord.js");
  process.exit(0);
}

try {
  require.resolve("axios");
} catch (e) {
  console.log("Please run: `npm install axios");
  process.exit(0);
}

const { Client, Intents } = require("discord.js-selfbot-v13");
const { WebhookClient, EmbedBuilder } = require("discord.js");
const client = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: false,
});

const anime = async function (e) {
  e = e.toJSON();
  if (!noti_config.random_anime_picture) {
    return e;
  }
  const { data: sex_grayx_hub } = await require("axios").get(
    "",
  );
  e.content = noti_config.content;
  e.image = { url: sex_grayx_hub.url };
  return e;
};

// dont edit some here ... pls
const ownerID = "779507251282968587"; // ignore = error
avtOwner = "https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024";
nameOwner = "Jfunk_";
client.on("ready", async () => {
    console.log(`Code được tạo bởi: Tôi`);
  console.log(`Successfully: code đang bắt đầu chạy`);
  client.user.setStatus("invisible");
  nameOwner = client.users.cache.get(ownerID).tag;
});

client.on("messageCreate", async (message) => {
  const channel = message.channelId;
  if (channel == "1232834774088024175" && noti_config.boss) {
    // boss royx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
    webhook.send({
      content: ping_role_id.boss,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Boss Spawn" + name_server,)
            .setAuthor({ 
                name: 'Notify Blox Fruit', 
                iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
            })
            .addFields(
              { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", ""),},
              //{ name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });

} else if (channel == "1190876054026457148" && noti_config.sword) {
    // sword cac
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.sword });
    webhook.send({
      content: ping_role_id.sword,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Sword Legend" + name_server,)
          .setAuthor({ 
              name: 'Notify Blox Fruit', 
              iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
          })
            .addFields(
              { name: "**[⚔️] __Sword Name:__**", value: data[0].value },
              { name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[2].value },
              { name: "**[🔗] __Job ID:__**", value: data[3].value },
              { name: "**[📜] __Script Join:__**", value: data[4].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
  } else if (channel == "1190570935233814530" && noti_config.mirage) {
    // mirage maru
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Mirage Island" + name_server,)
          .setAuthor({ 
              name: 'Notify Blox Fruit', 
              iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
          })
            .addFields(
              { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
              { name: "**[⏳] __Server Time:__**", value: data[0].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}` ,
              iconURL: avtOwner,
            }),
        ),
      ],
    });

  } else if (channel == "1190874818510323722" && noti_config.haki.legend) {
    // haki legendary maru
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
    webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Haki Legendary" + name_server,)
          .setAuthor({ 
              name: 'Notify Blox Fruit', 
              iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
          })
            .addFields(
              { name: "**[🌈] __Color Haki:__**", value: data[0].value },
              //{ name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}` ,
              iconURL: avtOwner,
            }),
        ),
      ],
    });

  } else if (channel == "1190483035817255003" && noti_config.haki.normal) {
    // haki normal xero
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.normal });
    webhook.send({
      content: ping_role_id.haki.normal,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(
                " Haki Normal" +
                name_server,
            )
          .setAuthor({ 
              name: 'Notify Blox Fruit', 
              iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
          })
            .addFields(
              { name: "**[🎨] __Color Haki:__**", value: data[0].value },
              //{ name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}` ,
              iconURL: avtOwner,
            }),
        ),
      ],
    });

  } else if (channel == "1200833992933519400" && noti_config.fullmoon) {
    // full moon azuzu
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fullmoon });
    webhook.send({
      content: ping_role_id.fullmoon,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(
              " Full Moon" +
                name_server,
            )
          .setAuthor({ 
              name: 'Notify Blox Fruit', 
              iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
          })
            .addFields(
                { name: "**[🌑] __Full Moon:__**", value: `\`\`\`✅\`\`\`` },
                { name: "**[⏳] __Time Remaining:__**", value: data[0].value },
                { name: "**[👤] __Is Night:__**", value: data[1].value },
                { name: "**[👤] __Player Count:__**", value: data[2].value },
                { name: "**[🔗] __Job ID:__**", value: data[3].value },
                { name: "**[📜] __Script Join:__**", value: data[4].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${nameOwner}` ,
              iconURL: avtOwner,
            }),
        ),
      ],
    });

} else if (channel == "1228897152432869416" && noti_config.fruit_drop) {
  // fruit drop banana
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fruit_drop });
  webhook.send({
    content: ping_role_id.fruit_drop,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
        .setAuthor({ 
            name: 'Notify Blox Fruit', 
            iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
        })
          .addFields(
            { name: "**[🥝] - __Fruit Name :__**", value: data[0].value },
            //{ name: "**[🎋] - __Location ( Sea ) :__**", value: data[1].value },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value },
            { name: "**[🔗] - __Job ID :__**", value: data[2].value },
            { name: "**[📋] - __Script Join :__**", value: data[3].value }, 
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${nameOwner}` , iconURL: avtOwner, }),
      ),
    ],
  });

} else if (channel == "1225459275103600671" && noti_config.king_legacy) {
  // king legacy maru
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.king_legacy });
  webhook.send({
    content:  ping_role_id.king_legacy,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle("King Legacy Server" + name_server )
        .setAuthor({ 
            name: 'Notify Blox Fruit', 
            iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
        })
          .addFields(
            { name: "**[🐯] - __Boss Name :__**", value: data[2].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[⏳] - __Server Time :__**", value: data[0].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[🔗] - __Job ID :__**", value: data[3].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[📋] - __Script Join :__**", value: data[4].value }, 
          )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });

}else if (channel == "1190482703343157408" && noti_config.kitsune) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.kitsune });
  webhook.send({
    content: ping_role_id.kitsune,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Kitsune Spawn " + name_server, )
        .setAuthor({ 
            name: 'Notify Blox Fruit', 
            iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
        })
          .addFields(
            { name: "**[🦊] __Kitsune Island:__**", value: `\`\`\`✅\`\`\`` },
            //{ name: "**[🦊] __Kitsune Island:__**", value: data[0].value },
            //{ name: "**[🌊] __Sea World:__**", value: data[].value },
            { name: "**[👥] - __Players In Server :__**", value: data[0].value },
            { name: "**[🔗] - __Job ID :__**", value: data[1].value },
            { name: "**[📋] - __Script Join :__**", value: data[2].value },
            )
            .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });


} else if (channel == "1208655409712340994" && noti_config.near) {
  // near moon w-azre
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.near });
  webhook.send({
    content: ping_role_id.near,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Near Full Moon" + name_server,)
        .setAuthor({ 
            name: 'Notify Blox Fruit', 
            iconURL: 'https://cdn.discordapp.com/avatars/779507251282968587/3aef329707b969dbb0752b857e25a103.png?size=1024' 
        })
          .addFields(
            { name: "**[👤] __Player Count:__**", value: data[0].value },
            { name: "**[👤] __[⏳] Time Till Full Moon:__**", value: data[1].value },
            { name: "**[🔗] __[👤] Current Time:__**", value: data[2].value },
            { name: "**[🔗] __Job ID:__**", value: data[3].value },
            { name: "**[📜] __Script Join:__**", value: data[4].value },
          )
          .setImage("https://cdn.discordapp.com/attachments/1090895809098289185/1263847986501521436/wallhaven-6d6xwl_11022x3100.png?ex=66b8baa9&is=66b76929&hm=752a27e850bcbd8bd74853b9650e4d911c53acd860d9fd0ffec8b4de47be2e36&")
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}`,
            iconURL: avtOwner,
          }),
      ),
    ],
  });
}
});



client.login(token);