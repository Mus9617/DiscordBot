// This is the main file of the bot

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

    const discord = new SlashCommandBuilder()
    .setName("discord")
    .setDescription("Discord invite link");

    const async = new SlashCommandBuilder()
    .setName("async")
    .setDescription("async Function example in javascript");

    const what = new SlashCommandBuilder()
    .setName("what")
    .setDescription("What is your favorite programming language");

    const avnyr = new SlashCommandBuilder()
    .setName("avnyr")
    .setDescription("Who is Avnyr?");
  
    const emily = new SlashCommandBuilder()
    .setName("emily")
    .setDescription("Who is Emily?");

  
  client.application.commands.create(ping);
  client.application.commands.create(buenas);
  client.application.commands.create(creador);
  client.application.commands.create(discord);
  client.application.commands.create(async);
  client.application.commands.create(what);
  client.application.commands.create(avnyr);
  client.application.commands.create(emily);
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
    interaction.reply("Mi Desarrollador Es zowix_96 Puedes Encontrarlo En GitHub: https://github.com/Mus9617");
 
  }
  if (interaction.commandName === "discord") {
    interaction.reply("https://discord.gg/k2a7JRU32B");
  }


  if (interaction.commandName === "async") {
    interaction.reply("An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.");
  }

  if (interaction.commandName === "what") {
    interaction.reply("My favorite programming language is JavaScript");
  }
    // ---Meme For avnyr---

  if (interaction.commandName === "avnyr") {
    interaction.reply("Avnyr is the lord of the code, the master of the code, the creator of the code, the one who created you, the one who created everything, the one who created the universe, the one who created the multiverse, the one who created the omniverse. You can find his GitHub profile at https://github.com/matherriot");
  }

     // ---Meme For Emily---

  if (interaction.commandName === "emily") {
    interaction.reply("Emily is an amazing friend who always helps me debug my code, even when she's exhausted. She's the queen of coding, the master of programming, the creator of everything from you to the entire universe, multiverse, and omniverse. Check out her GitHub profile at https://github.com/Emily-38");
  }
});

client.login(process.env.TOKEN);
