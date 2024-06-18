import { Groq } from "groq-sdk";
import "dotenv/config";

const groq = new Groq({
  apiKey: process.env.GROQ_KEY,
});

export const requestToGroqAI = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [
      // {
      //   role: "system",
      //   content: "You are a trainer who always respond in JSON",
      // },
      {
        role: "user",
        content,
      },
    ],
    // model: "gemma-7b-it",
    model: "llama3-8b-8192",
    // response_format: {
    //   type: "json_object",
    // },
  });
  // console.log(reply.choices[0].message);
  return reply.choices[0].message.content;
  //   return reply.choices[0].message.content;
  //   return reply;
  //   return Object.assign(
  //     new Recipe(),
  //     JSON.parse(reply.choices[0].message.content)
  //   );
};
