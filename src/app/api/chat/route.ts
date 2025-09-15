import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4"),
    system:
      "You are a helpful AI assistant. Respond in a friendly and helpful manner.",
    messages,
  });

  return result.toDataStreamResponse();
}
