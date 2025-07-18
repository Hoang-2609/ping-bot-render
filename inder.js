const express = require("express");
const axios = require("axios");

const app = express();
const BOT_URL = process.env.BOT_URL || "https://bot.duohoagroblox.replit.dev"; // Thay link bot

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
