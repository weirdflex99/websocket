var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket) {
   console.log('A user connected');

   //Send a message when 
   
      //Sending an object when emmiting an event
      socket.emit('message', 'welcome to board'
         );




   socket.on('createMessage', (newMessage)=>{
      console.log('newMessage', newMessage);
    });



   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});