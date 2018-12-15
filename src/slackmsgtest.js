import React, { Component } from "react";
import axios from "axios";

class Slackmsg extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
/* POST https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
Content-type: application/json
{
    "text": "Hello, world."
}
*/

/*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

      axios
      .get("https://api.github.com/users/maecapozzi")
      .then(response => console.log(response));
  */
  handleClick() {
      axios({
          method :'https://slack.com/api/chat.postMessage',
          url:'https://hooks.slack.com/services/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',
          //url:'https://hooks.slack.com/services/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',
          data: "Hello, world.",
          config:{headers:{'Content-type' : 'application/json'}},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
        <p></p>
      </div>
    );
  }
}
export default Slackmsg
