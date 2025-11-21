const express=require('express')
const app=express()

app.get("/home",(req,res)=>
{
    res.send(`This is phone website`)
})

app.get("/main/:phonename",(req,res)=>
{
    const phonename=req.params.phonename
    res.send(`Phone name is ${phonename}`)
})

app.get('/welcome/:name',(req,res)=>
{
    const name=req.params.name
    const age=req.query.age
    res.send(`my name is ${name} and age is ${22}`)
})

app.get("/main",(req,res)=>
{
    const name=req.query.name
    const brand=req.query.brand
    const model=req.query.model
    res.send(`Phone name is ${name},${brand},${model}`)
})

app.listen(4000,()=>
{
    console.log("server is running")
})