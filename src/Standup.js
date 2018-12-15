import React from 'react';
import rp from 'request-promise';
//const rp = require('request-promise-native');
class Standup extends React.Component {

//class Standup {
  static message() {
    return {
      text: 'Time for standup <!here>: <https://www.devmynd.com/>'
    };
  }

  static options() {
    return {
      method: 'POST',
      uri: 'https://hooks.slack.com/services/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',
      body: this.message(),
      json: true,
      headers: {
        'content-type': 'application/json'
      }
    };
  }

  static postMessage() {
    const options = this.options();
    const onSuccess = (res) => {
      console.log('Hey you posted a message to the channel!');
    };
    const onError = (err) => {
      console.error('Uh oh, something broke...', err);
    };

    rp(options)
      .then(onSuccess)
      .catch(onError);
  }
}
export default Standup;

 //exports default  Standup;