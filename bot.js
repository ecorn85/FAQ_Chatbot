const tmi = require('tmi.js');
const fs = require('fs');

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

//Read questions from FAQ.json
let rawFAQ = fs.readFileSync('FAQ.json');
let FAQ = JSON.parse(rawFAQ);


// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  
  //Iterate through each question from FAQ.json
  FAQ.questions.forEach(function(question){
    if(question.isActive){
      let match = false;
      
    }
  })
  // If the command is known, let's execute it
  /*
  if (commandName.includes("test")) {
    const num = rollDice(commandName);
    client.say(target, `You rolled a ${num}. Link: https://glitch.com/~twitch-chatbot`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }*/
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 20;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
