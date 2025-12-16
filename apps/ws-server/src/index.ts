import { WebSocketServer } from "ws";
import {prismaclient} from "@repo/db/client"


const server = new WebSocketServer({
  port: 8080
});

server.on('connection', async(socket)=>{
 await prismaclient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })
  socket.send("Hii There you are connected to the Web socket server");
})
