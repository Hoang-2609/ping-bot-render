const axios = require("axios");

const BOT_URL = process.env.BOT_URL || "https://bot.duohoagroblox.replit.dev";

function ping() {
  axios.get(BOT_URL)
    .then(() => console.log(`✅ Ping thành công: ${BOT_URL}`))
    .catch((err) => console.log(`❌ Ping lỗi: ${err.message}`));
}

ping(); // ping lần đầu
setInterval(ping, 4 * 60 * 1000); // ping mỗi 4 phút

// Thêm server express để giữ Render active
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🟢 Ping bot đang chạy...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Web đang chạy tại cổng ${PORT}`);
});
