let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log("Start page is running...");
	response.send("<h1>Welcome to Node Package Manager Server!</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	request.query.Surname += " is validated by GET";
	request.query.Name += " is validated by GET";
	request.query.Age += " is validated by GET";
	request.query.Address += " is validated by GET"; 
	response.send("Ajax GET method is completed successfully: "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	request.body.userSurname += " is validated by POST";
	request.body.userName += " is validated by POST";
	request.body.userAge += " is validated by POST";
	request.body.userAddress += " is validated by POST"; 
	response.send("Ajax POST method is completed successfully: "+ JSON.stringify(request.body));
});

server.listen(3000);