let express=require('express')
let srv=express()

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

let todoRoute=require("./route/todos")

srv.use("/public",express.static(__dirname + "/public"))
srv.use("/todos",todoRoute)

srv.listen(3077)//starting server at port no.3077
