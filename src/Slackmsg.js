//const Slackbot = require('slackbots');
//const axios = require('axios');
import Slackbot from 'slackbots';
import axios from 'axios';
import React from "react";

class Slackmsg extends React.Component {
 state = {
   data : []
 }
 goon() {
  const bot = new Slackbot({
    token: "xoxb-498515394851-503524933492-niIAA0zKaRU67hQWLCcj3Kr1",
    name: "class6test"
  });
  bot.on("start", function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
      icon_emoji: ":cat:"
    };
    bot.postMessageToChannel("general", "meow!", params);
    bot.postMessageToUser("UETFETFEG", "meow!", params);
  });
  bot.on("error", err => console.log(err));
  bot.on("message", data => {
    if (data.type !== "message") {
      return;
    }
    console.log(data);
    //handleMessage(data.text);
  });
}
  render() {
    return (
      <div>
        <button onClick={this.goon}>send message</button>
      </div>
    )
  }
}
export default Slackmsg;

/* handleMessage(message => {
        if (message.includes(" chucknorris")) {
          chuckJoke();
        }
      })
      chuckJoke(()=> {
        axios.get("http://api.icndb.com/jokes/random").then(res => {
          const joke = res.data.value.joke;
          var params = {
            icon_emoji: ":laughing:"
          };
          bot.postMessageToChannel("general", "Ha Ha Ha", params);
        });
      })*/
// Respons to data

// Tell a chuck Norris Joke

/*const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);*/
