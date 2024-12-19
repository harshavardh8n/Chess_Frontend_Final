import { useEffect, useState } from "react"


const WS_URL = "wss://new-chess-backend.onrender.com"

 export const useSocket = ()=>{
    const [socket,setScket] = useState<WebSocket | null>(null)

    useEffect(()=>{
        const ws = new WebSocket(WS_URL)

        ws.onopen = ()=>{
            console.log("connected")
            setScket(ws);
        }

        ws.onclose=()=>{
            console.log("disconnected");
            setScket(null);
            
        }

        return()=>{
            ws.close();
        }
    },[])       

    return socket;
 }