const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready',()=> {
    console.log(`logged in as ${client.user.tag}`);
})


client.on("message", msg => {
   // console.log(msg);
    if(msg.content =='chicken') {
        msg.reply('chicken run')
    }
});


client.on('message', msg => {
    if(msg.content.includes('!pin')) {
        msg.reply('pinned message')
    }
})

client.on('message', msg => {
    if(msg.content.includes('!list')) {
        
    }
})

client.login(process.env.TOKEN)