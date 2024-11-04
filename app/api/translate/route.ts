import { openai } from "@/app/lib/open-ai";

export async function POST(request: Request) {
  const prompt: string = await request.json();
  const res = await openai.completions.create({
    model: "davinci-002",
    prompt,
    temperature: 0.7,
    max_tokens: 100,
  });

  console.log(res);

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
