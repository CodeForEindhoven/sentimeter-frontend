var endpoint = "http://sentimeter.ideeenvijver.nl/api";

function xhrConfig(xhr) {
	xhr.setRequestHeader("Content-Type", "application/json");
}

function GET(url){
	return m.request({method: "GET", url: endpoint+url});
}

function POST(url, data){
	return m.request({method: "POST", url: endpoint+url, data: data});
}

var model = {};

model.handshake = m.prop({
	identity_id: localStorage.getItem("identity_id"),
	session_id: ""
});

model.indicators = m.prop([]);
model.history = m.prop({});

POST("/handshake", model.handshake)
	.then(model.handshake)
	.then(function(handshake){
		localStorage.setItem("identity_id", handshake.identity_id);
	});

GET("/indicators").then(model.indicators);
GET("/history/"+model.handshake().identity_id).then(model.history);
