const express=require('express');
const app=express();
const http=require('http');

const server=http.createServer(app);
const {Server}=require('socket.io');

const io=new Server(server);

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

io.on('connection',(socket)=>{
    // get message from client
    socket.on(' message',(msg)=>{
        // send message to all clients
        io.emit(' message',msg);
    });

});


app.use(express.static('/public'));

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{root:__dirname});
});