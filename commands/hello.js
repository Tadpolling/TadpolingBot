exports.run = async (bot, msg, args) => {
  msg.channel.send(`Hello to you as well, ${msg.author.tag}`);
};
exports.help = {
  name: "hello",
};
