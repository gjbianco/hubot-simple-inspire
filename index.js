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

  robot.hear(/^!evangelize (\d)$/i, async (res) => {
    let imgStr = "";
    try {
      for (let i = 0; i < res.match[1]; i++) {
        const axiosResp = await axios(
          "https://inspirobot.me/api?generate=true"
        );
        imgStr += axiosResp.data + "\n";
      }
      res.send(imgStr);
    } catch (err) {
      console.error(err);
      res.send("error occurred evangelizing. donate more to the megachurch.");
    }
  });
};
