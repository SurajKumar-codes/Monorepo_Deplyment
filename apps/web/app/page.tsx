import {prismaclient} from "@repo/db/client"

export default async function Home() {
  let user 
  try{
  user = await prismaclient.user.findFirst();
  console.log(user)
  }
  catch(e){
    console.error(e)
  }

  return (
   <div>
    {user?.username}
    {user?.password}
   </div>
  );
}
