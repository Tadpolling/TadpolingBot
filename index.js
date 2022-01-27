/*
    This is the code for TadpolingBot!
*/

const Discord = require("discord.js");
const bot = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});
bot.commands = new Discord.Collection();
const fs = require("fs");

bot.on("ready", () => {
  fs.readdir("./commands", (err, files) => {
    if (err) return console.log(err);
    let jsfile = files.filter((f) => f.split(".").pop() == "js");
    if (jsfile.length == 0) {
      console.log("No Commands");
      return;
    }
    jsfile.forEach((f) => {
      let props = require(`./commands/${f}`);
      bot.commands.set(props.help.name, props);
    });
  });
});
bot.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  //msg.channel.send(msg.channel.type);
  if (msg.channel.type !== "GUILD_TEXT") return;
  const prefix = "!tad";
  if (!msg.content.startsWith(prefix)) return;
  const MessageArray = msg.content.split(" ");
  let cmd = MessageArray[0].slice(prefix.length);
  let args = MessageArray.slice(1);
  let commandfile = bot.commands.get(cmd);
  if (commandfile) {
    commandfile.run(bot, msg, args);
  }
});
bot.login("OTM2MDI5ODY3MjYxMTc3OTI3.YfHPvg.Gr9n9-yesaK2ff5s9sYv69H_DkU");
