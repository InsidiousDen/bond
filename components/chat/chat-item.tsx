"use client";

import { Message } from "@prisma/client";

export const ChatItem = ({ message }: { message: Message }) => {
  return <div>{message.content}</div>;
};
