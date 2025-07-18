const express = require("express");
const axios = require("axios");

const app = express();
const BOT_URL = process.env.BOT_URL || "https://08dcc9c4-b519-4324-91b6-53118c61e61e-00-46zd7avli2xn.sisko.replit.dev/"; // Thay link bot

function pingBot() {
  const time = new Date().toLocaleTimeString();
  axios.get(BOT_URL)
    .then(() => console.log(`[${time}] ✅ Ping bot ok`))
    .catch(err => console.log(`[${time}] ❌ Ping lỗi: ${err.message}`));
}

pingBot();
setInterval(pingBot, 240000); // 4 phút

app.get("/", (req, res) => {
  res.send("Ping bot đang chạy...");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server chạy trên port ${port}`);
});
