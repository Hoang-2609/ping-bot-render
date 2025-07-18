const axios = require("axios");

const BOT_URL = "https://08dcc9c4-b519-4324-91b6-53118c61e61e-00-46zd7avli2xn.sisko.replit.dev/"; // <- Thay link Replit bot bạn ở đây

function pingBot() {
  const time = new Date().toLocaleTimeString();
  axios.get(BOT_URL)
    .then(() => console.log(`[${time}] ✅ Ping thành công`))
    .catch(err => console.log(`[${time}] ❌ Ping lỗi: ${err.message}`));
}

pingBot(); // Ping khi khởi động

setInterval(pingBot, 240000); // Ping mỗi 4 phút
