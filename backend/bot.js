const fs = require('fs');
const path = require('path');

// load .env variables manually
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split(/\r?\n/);
  lines.forEach(line => {
    const match = line.match(/^([A-Z_]+)=(.*)$/);
    if (match) {
      const key = match[1];
      const value = match[2];
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const token = process.env.BOT_TOKEN;
const chatId = process.env.ADMIN_CHAT_ID;

if (!token) {
  console.error('BOT_TOKEN is not set in environment');
  process.exit(1);
}

if (!chatId) {
  console.warn('ADMIN_CHAT_ID is not set. Nothing to send.');
  process.exit(0);
}

const url = `https://api.telegram.org/bot${token}/sendMessage`;
console.log('To notify admin, send POST request to:', url);
console.log('With body:', JSON.stringify({ chat_id: chatId, text: 'Магазин обуви запущен' }));
