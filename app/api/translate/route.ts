import { openai } from "@/app/lib/open-ai";

type Prompt = {
  text: string;
  from: string;
  to: string;
};

export async function POST(request: Request) {
  const { text, from, to }: Prompt = await request.json();

  const prompt = `Translate the following text from ${from} to ${to}: ${text}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are a expert translator and only reply with the translated text in the language specified  in the prompt and nothing else in the response. The language is specified in the prompt. You must not add any other text to the response.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_completion_tokens: 500,
    temperature: 0.3,
  });

  const response = JSON.stringify({
    translatedText: completion.choices[0].message.content,
  });

  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
