var express = require('express');
var socket = require('socket.io');

var app = express()
var server = app.listen(3000, function(){
  console.log("Node.js server created");
})

app.use(express.static('front-end'))

var io = socket(server, {pingTimeout: 60000});

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var dbskema = new mongoose.Schema({
  object_counter:Number,
  time_modify:{ type: Date, default: Date.now },
});
var db = mongoose.model('db', dbskema)
app.get('/', function(req, res){
    // console.log(req);
    res.sendFile(__dirname + '/index.html'); 
 
});
    io.on("connection", function(socket) {
        console.log("socket.io connected " + socket.id)

        socket.on('img',function(data) {
            socket.broadcast.emit('get_img',data.toString('utf-8'));
        })
        socket.on('count',function(data) {
            console.log('object_counter; '+data)
            // var data = new db({object_counter:data})
            // data.save()
        })
})




