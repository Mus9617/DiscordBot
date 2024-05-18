require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionsBitField,
  Permissions,
} = require("discord.js");

/**
 * Represents the client for interacting with the Discord API.
 * @type {Client}
 */
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", (x) => {
  console.log(`${x.user.tag} is ready`);
  client.user.setActivity("Desarrollado por: zowix_96");

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

    const buenas = new SlashCommandBuilder()
    .setName("buenas")
    .setDescription("Te saluda!");

    const creador = new SlashCommandBuilder()
    .setName("creador")
    .setDescription("Pregunta Quien La Desarollo?");


  
  client.application.commands.create(ping);
  client.application.commands.create(buenas);
  client.application.commands.create(creador);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
  if (interaction.commandName === "buenas") {
    interaction.reply("Buenas! Como estas?");
  }
  if (interaction.commandName === "creador") {
    interaction.reply("Mi Desarrollador Es zowix_96 ");
  }
});

client.login( process.env.TOKEN
);
