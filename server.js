const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
if (process.env.NODE_ENV === "production") {
}

// Add routes, both API and view
app.use(routes);



if (process.env.NODE_ENV === "production") {
  // Serve up static assets
  app.use(express.static("client/build"));

  // If no API routes are hit, send the React app
  router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));
}


io.on('connection', function (socket) {
  console.log('a user connected');


  // Matches with "/api/room"
  app.use("/test", (req, res) => {
    socket.emit('apiCall', 'msg');
    res.send('done')
  })


  socket.on('disconnect', function () {
    console.log('User Disconnected');
  });
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
});









// io.on('connection', function (socket) {
//   console.log('a user connected');
//   socket.on('disconnect', function () {
//       console.log('user disconnected');
//   });
//   socket.on('chat message', function (msg) {
//     console.log('chat message ' + msg);

//       socket.broadcast.emit('chat message', msg);
//   });
// });

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/buzzerio", {
  useCreateIndex: true,
  useNewUrlParser: true
}
);

// Start the API server
http.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);