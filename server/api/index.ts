import { Message, messages } from "@/data/messages";

type Response = {
  emoji: string;
  message: string;
  shouldIDeploy: boolean;
  timestamp: string;
};

export default defineEventHandler<Response>(() => {
  const timezoneOffset: number = 180 * 60 * 1000;
  const date: Date = new Date(Date.now() - timezoneOffset);
  const message: Message = getRandomMessage(messages);

  return {
    emoji: message.emoji,
    message: message.message,
    shouldIDeploy: shouldIDeploy(date),
    timestamp: date.toISOString(),
  };
});
