import { h, IS_BROWSER, useState, useEffect,useCallback } from "../deps.ts";

interface Message {
  user: string,
  message: string
}


export default function Home() {
  const [messages,setMessages] = useState<Message[]>([])

  const getMessages = useCallback(async () => {
      const res = await fetch('https://arthur-new-deno-project-4b9c27f5.deno.dev/messages')
      const data = await res.json();
      setMessages(data);
    },
    [],
  )
  
  useEffect(() => {
    getMessages();
  }, [])

  return (
    <div>
      {JSON.stringify(messages)}
    </div>
  );
}

