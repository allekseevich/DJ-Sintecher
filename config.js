module.exports = {
TOKEN: "MTAyMjUzOTI1MDY2NDc0Mjk4Ng.GDVuRu.sHqYnrXF6Znrek_0BSfHaCjilHh__gai5Tln2s",
ownerID: "583989204350926861", //write your discord user id.
botInvite: "", //write your discord bot invite.
mongodbURL: "mongodb+srv://djsintecher.o1lm9ci.mongodb.net/djsintecher?appName=mongosh+1.6.0", //write your mongodb url.
authSource: "mongodb+srv://djsintecher.o1lm9ci.mongodb.net/djsintecher?appName=mongosh+1.6.0",
status: 'Лучший музыкальный бот Лучшего Сервера',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl
embedColor: "ffa954", //hex color code
errorLog: "WAS", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },

    playlistSettings:{
        maxPlaylist: 20, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
