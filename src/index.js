import { Telegraf } from "telegraf";
import express from "express";
import "dotenv/config";
import { requestToGroqAI } from "./groq.js";
const app = express();
app.get("/", (req, res) => {
  res.send("Bot is alive");
});

app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`);
});

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.on("text", async (ctx) => {
  const content = ctx.message.text;
  //   await requestToGPT();
  const ai = await requestToGroqAI(content);
  ctx.reply(ai.toString());
  console.log("reply");
  //   console.log(ai);
});

bot.launch();
