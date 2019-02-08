const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const request = require('request');
const fs = require('fs');
const Canvas = require("canvas");
const jimp = require("jimp");
var prefix = "t!";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', function(){
    var ms = 20000 ;    
    var setGame = ['Soon'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.twitch.tv/n3k4a`);    
}, ms);    
    
}); 

client.on('message', message => {
if(message.content.startsWith(prefix +"server")){
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط**`)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("``Server ID``",  message.guild.id,true )
.addField("``Created On``",  message.guild.createdAt.toLocaleString(),true )
.addField("``Owned by``",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("``Members``",`[${message.guild.memberCount}]`,true)
.addField('``Channels``',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("``Others``" , message.guild.region,true)
.addField("``Roles``",`**[${message.guild.roles.size}]** Role `,true)
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
     message.channel.send('```تم ارسال رسالة في الخاص```');




 message.author.sendMessage(`
**
\`\`\`
Soon 
\`\`\`

**
 `);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "t!inv") {


 message.author.sendMessage(`

**بامكانك دعوة البوت من هنا
\`\`\`
https://discordapp.com/api/oauth2/authorize?client_id=533070826011099146&permissions=8&scope=bot
\`\`\`
**
`);

message.channel.send('```تم الارسال في الخاص```');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "t!support") {


 message.author.sendMessage(`
**
\`\`\`
Server Support : https://discord.gg/hDeK9TP
\`\`\`
**
`);

message.channel.send('```تم الارسال في الخاص```');

    }
});





var prefix = "t!"//برفكسك
 //Toxic Codes    //  PremiumBot
client.on('message', message=>{ //Toxic Codes    //  PremiumBot
    if(message.author.bot) return; //Toxic Codes    //  PremiumBot
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) { //Toxic Codes    //  PremiumBot
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("``` ADMINISTRATOR لا يتوفر لديك رتبه```");
    let log = message.guild.channels.find("name", "log") //Toxic Codes    //  PremiumBot
    if(log) return message.reply("**يوجد بالفعل روم اللوق**")  //Toxic Codes    //  PremiumBot
    if(!log) {  //Toxic Codes    //  PremiumBot
    message.guild.createChannel("log", "text").then(c=> { //Toxic Codes    //  PremiumBot
        c.overwritePermissions(message.guild.id, { //Toxic Codes    //  PremiumBot
            SEND_MESSAGES: false
    })
})
message.channel.send("``تم انشاء روم اللوق بنجــاح``")
    }
    } //Toxic Codes    //  PremiumBot
     })
client.on('error', console.error);
 
client.on('messageDelete', message => { //Toxic Codes    //  PremiumBot
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return; //Toxic Codes    //  PremiumBot
 
    var logChannel = message.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    let messageDelete = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
    .setTitle('**[MESSAGE DELETE]**') //Toxic Codes    //  PremiumBot
    .setColor('RED') //Toxic Codes    //  PremiumBot
    .setThumbnail(message.author.avatarURL) //Toxic Codes    //  PremiumBot
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp() //Toxic Codes    //  PremiumBot
    .setFooter(message.guild.name, message.guild.iconURL) //Toxic Codes    //  PremiumBot
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => { //Toxic Codes    //  PremiumBot
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return; //Toxic Codes    //  PremiumBot
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs //Toxic Codes    //  PremiumBot
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL) //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => { //Toxic Codes    //  PremiumBot
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp() //Toxic Codes    //  PremiumBot
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete); //Toxic Codes    //  PremiumBot
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName); //Toxic Codes    //  PremiumBot
        }
        if(oldRole.hexColor !== newRole.hexColor) { //Toxic Codes    //  PremiumBot
            if(oldRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var oldColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var oldColor = oldRole.hexColor;
            } //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
            if(newRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var newColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var newColor = newRole.hexColor; //Toxic Codes    //  PremiumBot
            } //Toxic Codes    //  PremiumBot
            let roleUpdateColor = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[ROLE COLOR UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE') //Toxic Codes    //  PremiumBot
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
  //Toxic Codes    //  PremiumBot
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) { //Toxic Codes    //  PremiumBot
            let roleUpdate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[UPDATE ROLE PERMISSIONS]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) //Toxic Codes    //  PremiumBot
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => { //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        let channelCreate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
        .setTitle('**[CHANNEL CREATE]**') //Toxic Codes    //  PremiumBot
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); //Toxic Codes    //  PremiumBot
client.on('channelDelete', channel => { //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); //Toxic Codes    //  PremiumBot
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) //Toxic Codes    //  PremiumBot
 
            logChannel.send(newName); //Toxic Codes    //  PremiumBot
        }
        if(oldChannel.topic !== newChannel.topic) { //Toxic Codes    //  PremiumBot
            let newTopic = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[CHANNEL EDIT]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => { //Toxic Codes    //  PremiumBot
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`'; //Toxic Codes    //  PremiumBot
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  //Toxic Codes    //  PremiumBot
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') //Toxic Codes    //  PremiumBot
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
} //Toxic Codes    //  PremiumBot
client.on('guildMemberRemove', member => { //Toxic Codes    //  PremiumBot
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`) //Toxic Codes    //  PremiumBot
  .setTimestamp() //Toxic Codes    //  PremiumBot
  .setFooter(member.user.tag, member.user.avatarURL)
  //Toxic Codes    //  PremiumBot
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); //Toxic Codes    //  PremiumBot
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave); //Toxic Codes    //  PremiumBot
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    } //Toxic Codes    //  PremiumBot
}); //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot


client.on('message', msg => {
  if (msg.content === 't!avatar') {
    msg.channel.send('${client.avatarURL}');
  }
});

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``t!move [USER] لاستخدام خصيه السحب اكتب``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setDescription("**<@${usermentioned}>**``تم سحب العضو الي الروم الصوتي الخاص بك``")
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``منشان اقدر اسحبه``"+ message.mentions.members.first() +"``يجب ان يكون العضو في روم صوتي``")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("``انا لا امتلك رتبه لاسحب الاعضاء``")
}
 }
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('``انت ليس لديك صلحيات كافيه``');
	if( msg.toLowerCase().startsWith( prefix + 'rolemove' ) ){
		if( !args[0] ) return message.reply("``يرجى وضع الشخص المراد سحب منه الرتبة``");
		if( !args[1] ) return message.reply('``يرجى وضع الرتبة المراد سحبها من الشخص``');
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply('``يرجى وضع الرتبة المراد سحبها من الشخص``');if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('`` '+args[0]+' من '+role1.name+' تم سحب رتبه ``');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('``'+role1.name+' تم سحب من الكل رتبة``');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('`` '+role1.name+' تم سحب من البوتات رتبة``');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('`` '+role1.name+'  تم سحب من البشريين رتبة``');
		} 	
	} else {
		if( !args[0] ) return message.reply( '`` يرجى وضع الشخص المراد اعطائها الرتبة``' );
		if( !args[1] ) return message.reply( '`` يرجى وضع الرتبة المراد اعطائها للشخص``' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '`` يرجى وضع الرتبة المراد اعطائها للشخص``' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('``'+role1.name+' تم اعطاء الكل رتبة``');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('`` '+role1.name+'  تم اعطاء البوتات رتبة``');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('``'+role1.name+'  تم اعطاء البشريين رتبة``');
		} 
	} 
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "#roles"){
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("``ضع عدد الرسائل التي تريد مسحها ``").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



const pretty = require('pretty-ms'); // npm i pretty-ms
const credits = require('./Credits.json');
const creditsPath = './Credits.json';
client.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(' ');
    let author = message.author.id;
    if(!credits[author]) credits[author] = { messages: 0, credits: 0, xp: 0, daily: 86400000 };
    credits[author].messages += 1;
    credits[author].xp += 1;
    if(credits[author].xp === 5) {
        credits[author].xp = 0;
        credits[author].credits += 1;
        fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
    }
    fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
 
   
   if(args[0].toLowerCase() == `${prefix}credit` || args[0].toLowerCase() === `${prefix}credits`) {
       let mention = message.mentions.users.first() || message.author;
       let mentionn = message.mentions.users.first();
       if(!credits[mention.id]) return message.channel.send(`**❎ |** Failed To Find the **Needed Data**.`);
       if(!args[2]) {
        let creditsEmbed = new Discord.RichEmbed()
       .setAuthor(mention.username, mention.avatarURL)
       .setThumbnail(mention.avatarURL)
       .addField(`❯ الكردت`, `» \`${credits[mention.id].credits} $\`\n`, true)
       message.channel.send(creditsEmbed);
       
       } else if(mentionn && args[2]) {
           if(isNaN(args[2])) return message.channel.send(`**❎ |** The **"Number"** You Entered **Isn't Correct**.`);
         if(mentionn.id === message.author.id) return message.channel.send(`**❎ |** You Can't Give **Credits** To **Yourself**.`);
           if(args[2] > credits[author].credits) return message.channel.send(`**❎ |** You don't have **Enough** credits to give to ${mentionn}`);
         let first = Math.floor(Math.random() * 9);
         let second = Math.floor(Math.random() * 9);
         let third = Math.floor(Math.random() * 9);
         let fourth = Math.floor(Math.random() * 9);
         let num = `${first}${second}${third}${fourth}`;
       
         message.channel.send(`**Type** \`${num}\` To **Complete** the transfer!`).then(m => {
             message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors:['time'] }).then(collected => {
                 let c = collected.first();
                 if(c.content === num) {
                         message.channel.send(`**✅ |** Successfully **Transfered** \`$${args[2]}\` !`);
                         m.delete();
                         c.delete();
                         credits[author].credits += (-args[2]);
                         credits[mentionn.id].credits += (+args[2]);
                         fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
                 } else {
                         m.delete();
                 }
             });
         });
       
     } else {
         message.channel.send(`**❎ |** The **Syntax** should be like **\`${prefix}credits <Mention> [Ammount]\`**`);
     }
 } else if(args[0].toLowerCase() === `${prefix}daily`) {
     if(credits[author].daily !== 86400000 && Date.now() - credits[author].daily !== 86400000) {
         message.channel.send(`**❎ |** You already **Claimed** the daily ammount of credits since \`${pretty(Date.now() - credits[author].daily)}\`.`);
     } else {
         let ammount = getRandom(300, 500);
         credits[author].daily = Date.now();
         credits[author].credits += ammount;
         fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
         message.channel.send(`**✅ |** \`${ammount}\`, Successfully **Claimed** Your daily ammount of credits!`);
     }
 }
});







client.on('message', message => { 
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Torz Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}});

const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("`` I Can’t Find 'Muted' Role ``").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply('`` Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("``User Has Been UnMuted.``").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("``User Has Been UnMuted.``").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});
 
 
client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
           
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       message.channel.send('**${muteMember} Has Been Muted.**').then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   }
});




  client.on('message', (message) => {
    if (message.content.startsWith('t!kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + '**keeck from the server ! :airplane:  **');
        }).catch(() => {
            message.channel.send("``لا استطيع طرض العضو``");
        });
    }
}); 
 
 
 




client.on('message', (message) => {
    if (message.content.startsWith('t!ban')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + ' **bann from the server ! **');
        }).catch(() => {
            message.channel.send('``لا استطيع تبنيد العضو``');
        });
    }
});

client.on('message' , message => {
    ;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('Pong').then((msg) => {
        msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
   })
    }  
   });
   
   



client.login(process.env.BOT_TOKEN);
