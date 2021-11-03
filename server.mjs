import express from 'express

const app = express()

app.get('/',(req,res)=>{
  res.send('WELCOME To Deploy!');
})

app.listen(3000,()=>{
  console.log("APP is Running");
})
