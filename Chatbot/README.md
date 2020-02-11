# Twitch Getting Started with Chatbots & IRC
=================

## Chatbot Overview

The focus of this project is to create a chatbot that can automatically respond to commonly asked questions, or anything else that would deem an automatic reply. It does this by parsing messages and looking for matching phrases designated by the streamer/bot owner, and responding with a set message.

### Chatbot Base

This chatbot is built upon Twitch's Chatbot tutorial. For more imformation, please look at the [Developer Docs](https://dev.twitch.tv/docs/irc/).

The chatbot is built using Node.js and the Twitch Messaging Interface (TMI) library.

### Get Twitch Environment Variables

To start, you’ll need three environment variables:
 
| `BOT_USERNAME`  |  The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate. |  
|`CHANNEL_NAME`   |  The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.
|`OAUTH_TOKEN`   |The token to authenticate your chatbot with Twitch's servers. Generate this with [https://twitchapps.com/tmi/](https://twitchapps.com/tmi/) (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string.|  

### Running the bot


1. To start with this template, click the Remix button in the upper right. 

2. Glitch automatically installs Node and Tmi.js for us.

3. Add the three environmental vars in our [`.env`](https://glitch.com/edit/#!/twitch-chatbot?path=.env:1:0) file.

4. View the code in `bot.js`. 

5. Your chatbot is ready to run! Glitch automatically deploys & runs each version. View the status button to ensure there are no errors. 

6. Try the chatbot! Interact with your channel (twitch.tv/<CHANNEL_NAME>) by trying  the `!dice` command. 

**Note**: This bot connects to the IRC network as a client and isn't designed to respond over HTTP. If you click "Show Live" you will see a simple "Hello World"


## Next Steps

* For a thorough understanding of Twitch chatbots and IRC, read the [Chatbots & IRC Guide](https://dev.twitch.tv/docs/irc/guide/) and the rest of the Twitch IRC documentation. 
* To authenticate your chatbot in a production setting, we recommend you [register your app](https://dev.twitch.tv/docs/authentication/#registration) (chatbot) and use the OAuth Authorization code flow. This enables you to authenticate programmatically. To learn more, read the [Apps & Authentication Guide](https://dev.twitch.tv/docs/authentication/).
Read [Chatbots & IRC documentation](https://dev.twitch.tv/docs/irc/guide/).
* Reach out to [@twitchdev](https://twitter.com/twitchdev) or the [Twitch chatbot forum](https://discuss.dev.twitch.tv/c/chat) for help!


