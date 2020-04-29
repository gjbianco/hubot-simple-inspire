const axios = require("axios");

module.exports = (robot) => {
  robot.hear(/^!inspire$/i, (res) => {
    axios("https://inspirobot.me/api?generate=true")
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.error(err);
        res.send("error occurred trying to find inspiration D:");
      });
  });
};
