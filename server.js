var express = require("express");
var app = express();
var http = require("http");
var path = require('path');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json'}))

// parse application/json
app.use(bodyParser.json())
// Add headers

var server = http.createServer(app);
//var io = require('socket.io').listen(server);  //pass a http.Server instance

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/img')));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

server.listen(8080);  //liste

// routing
app.get('/api/client', function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    //res.sendfile(__dirname + '/public/html/clientchat.html');
    console.log(" called from ang");

});

app.post('/api/Ticket/:asset', function (req, res) {
    //res.sendfile(__dirname + '/public/html/clientchat.html');
    console.log(" called from Ticket ang AssetID ==" + req.params.asset);
    //var jsonObject = JSON.parse(req);
    //req.body    

    
     console.log(" called from Json String>>" +req.body);
     //console.log("req  >>>"+ req);
     // console.log("req  >>>"+ req.body.asset);
     // res.json({"RequestNo": "DI78456987"}); 
     res.sendStatus(200);

});

app.get('/executive', function (req, res) {
    res.sendfile(__dirname + '/public/html/executivechat.html');
});

/*module.exports.sockets = sockets = io.sockets.on('connection', require('./routes/socket'));

module.exports.io = io;
module.exports = app;*/