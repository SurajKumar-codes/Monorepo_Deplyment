import express, { Request, Response } from "express"
import {prismaclient} from "@repo/db/client"

const app = express();

app.use(express.json());

app.post("/", (req : Request, res : Response)=> {
  res.send("Hii There");
})

app.post("/signup", async(req : Request, res : Response) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password){
    res.json({
      message: "Enter Username or Password"
    })
    return;
  }

  let user;
  try{
    user = await prismaclient.user.create({
      data:{
        username : username, 
        password : password
      }
    })
  }
  catch(e){
    res.json({
      message: "User not Stored in Database"
    })
    return;
  }


  res.json({
    message: "Signed Up Sucessfully",
    id: user.id
  })
})

app.listen(3001);