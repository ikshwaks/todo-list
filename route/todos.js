let route=require('express').Router()

let todoList=[]

route.get("/",(req,res) => {
    res.send(todoList)
})

route.post("/",(req,res)=>{
    todoList.push({task: req.body.task})
    res.send(todoList)
})

module.exports=route