import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
  res.send('WELCOME To Deploy!');
})

app.get('/about',(req,res)=>{
  res.send('This is about Page...');
})

app.get('/profile',(req,res)=>{
  res.send('This is profile page...');
})

app.listen(PORT,()=>{
  console.log(`APP is Running on ${PORT}`);
})
