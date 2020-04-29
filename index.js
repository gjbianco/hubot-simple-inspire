const axios = require("axios");

module.exports = (robot) => {
  robot.hear(/^!inspire$/i, (res) => {
    axios("https://inspirobot.me/api?generate=true")
      .then((response) => response.data)
      .then(res.send)
      .catch((err) => {
        console.error(err);
        res.send("error occurred trying to find inspiration D:");
      });
  });
};
