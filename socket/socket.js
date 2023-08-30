const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const { Server } = require("socket.io");
const Messages=require('../api/models/message');



const httpserver=require('http').createServer(app);
const io = new Server(httpserver,{ 
    cors:{
        origin:"*"
    }
 });


 io.on("connection",(socket)=>{
    // console.log(socket);
    console.log("user connected to socket");

    socket.on("getMessages",async(payload)=>{
        console.log(payload)
        const messages=await Messages.find( {
            conversationId: payload._id
        });
    
        io.emit("getMessages",{messages})
    })

    
 })

 


httpserver.listen(9000,()=>{
    console.log("connectecd to port");
})

