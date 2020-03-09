// HTTP Portion
var http = require('http');
// Path module
var path = require('path');

// Using the filesystem module
var fs = require('fs');

//////////////////////
//Control Vars
let connectCounter = 0;
let statusMachine = 0; //0 waiting, 1 ready to play, 2 playing, 3 finish

//First Server
var server = http.createServer(handleRequest);
server.listen(3000, function(){
  console.log('Server started on port 3000');
});

//Then after server call Sockets
let io = require('socket.io').listen(server);
// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', function (socket) {

  connectCounter++;

  console.log("We have a new client: " + socket.id);
  console.log("connectCounter ="+connectCounter);

  //prepare data to send to my recent connected client
  var dataConnection = {
    id: connectCounter,
    message: 'Wait until your tourn'
  };

  socket.emit('idConnectCounter', dataConnection);


  socket.on('disconnect', function() {
    console.log("Client has disconnected");
    connectCounter--;
    console.log("connectCounter ="+connectCounter);
  });

  socket.on('statusMachine', function(data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: 'statusMachine' " + data.sm + " " + data.id);      
      // Send it to all other clients
      //socket.broadcast.emit('mouse', data);
  });

  socket.on('posJoystick', function(data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: 'posJoystick' " + data.x + " " + data.y);      
      // Send it to all other clients
      //socket.broadcast.emit('mouse', data);
  });

});

function handleRequest(req, res) {
  // What did we request?
  let pathname = req.url;
  
  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }
  
  // Ok what's our file extension
  let ext = path.extname(pathname);

  // Map extension to file type
  const typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  // What is it?  Default to plain text
  let contentType = typeExt[ext] || 'text/plain';

  // Now read and write back the file with the appropriate content type
  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Dynamically setting content type
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}