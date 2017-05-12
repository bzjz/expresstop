var express = require("express");
var app     = express();
app.get("/",(req,res)=>{
	res.write("hollow word")
	res.end()
})
app.get("/home",(req,res)=>{
	res.send("你好")
})
var server = app.listen(3000,()=>{
	console.log("running express")
})
