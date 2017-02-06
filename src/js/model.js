var endpoint = config.api_endpoint;

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

model.my_cards = m.prop(JSON.parse(localStorage.getItem("my_cards")));
if(model.my_cards() === null){
	model.my_cards([]);
}

model.select_card = function(indicator){
	model.my_cards(model.my_cards().concat([indicator.id]));
	localStorage.setItem("my_cards", JSON.stringify(model.my_cards()));
	GET("/indicators").then(model.indicators);
	model.get_myindicators();
};

model.unselect_card = function(indicator){
	var index = model.my_cards().findIndex(function(i){return i === indicator.id;});
	var c = model.my_cards();
	c.splice(index,1);
	model.my_cards(c);
	localStorage.setItem("my_cards", JSON.stringify(model.my_cards()));
	model.get_myindicators();
};

model.my_indicators = m.prop([]);
model.get_myindicators = function(){
	//m.startComputation();
	var cardlist = [];
	var state = 0;
	model.my_cards().map(function(id, count){
		state++;
		GET("/indicator/"+id).then(function(card){
			GET("/history/"+id+"/"+model.handshake().identity_id).then(function(history){
				card.history = history;
				cardlist[count] = card;
				state--;
				if(state === 0) {
					model.my_indicators(cardlist);
					//m.endComputation();
				}
			});
		});
	});
};


model.score = function(id, score){
	POST("/score", {
		"indicator_id": id,
		"session_id": model.handshake().session_id,
		"score": score
	}).then(function(){
		model.get_myindicators();
	});
};

POST("/handshake", model.handshake)
	.then(model.handshake)
	.then(function(handshake){
		localStorage.setItem("identity_id", handshake.identity_id);
		model.get_myindicators();
	});

GET("/indicators").then(model.indicators);
//GET("/history/"+model.handshake().identity_id).then(model.history);
