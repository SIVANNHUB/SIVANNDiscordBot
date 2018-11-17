const Discord = require("discord.js-commando");
const Bot = new Discord.Client();
const Token = "NTEwNzgyMjMwMjU2MTU2Njcy.DshW0g.AmK1owxxFn9MpBNCbcGx_fqU0To";
Bot.login(Token);

Bot.on("ready", function(){

    console.log("Online");

});

Bot.on("message", function(message){

    switch(message.content.toLowerCase()) {

        case "sivann":
            message.channel.send(message.author + ",\n--> **ស៊ីវណ្ណ** <--\n**អាយុ** : 16 ឆ្នាំ\n**រៀនថ្នាក់ទី** : 11\n**រៀននៅ** : វិទ្យាល័យជាស៊ីមរក្សជ័យ");
        break;

    }

});
