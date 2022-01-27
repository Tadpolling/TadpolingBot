const fetch = require("node-fetch");
const Discord = require("discord.js");
const factLink = "https://cat-fact.herokuapp.com/facts/random";
const picLink = "https://api.thecatapi.com/v1/images/search";
exports.run = async (bot, msg, args) => {
  const fetchFact = await fetch(factLink).then((m) => m.json());
  const fetchPic = await fetch(picLink).then((m) => m.json());

  const catEmbed = new Discord.MessageEmbed()
    .setTitle("Cat Fact!")
    .setDescription(fetchFact.text)
    //.addField(" ", fetchFact.text)
    .setImage(fetchPic[0].url);
  msg.channel.send({ embeds: [catEmbed] });

  //console.log(fetchPic);
  //msg.channel.send(fetchFact.text);
  //console.log(fetchFact);
};
exports.help = {
  name: "catFact",
};
