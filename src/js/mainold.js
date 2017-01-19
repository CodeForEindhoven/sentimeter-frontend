var Menu = {
	controller: function(){
		return {
			identity: model.handshake().identity_id
		};
	},
	view: function(ctrl){
		return m("nav",[
			m("span",{class: "identity"}, ctrl.identity),
			//m("span", {class: "menu"},[
			//	m("a", "MIJN COLLECTIE"),
			//	m("a", "ZOEK MEETLATTEN"),
			//	m("i",{class: "material-icons"},"search")
			//])

		]);
	}
};

var Scorebar = {
	controller: function(id){
		return {
			onclick: function(count){
				return function(){
					console.log("score: "+count);
					POST("/score", {
						"indicator_id": id,
						"session_id": model.handshake().session_id,
						"score": count
					}).then(function(){
						GET("/history/"+model.handshake().identity_id).then(model.history);
					});
				};
			}
		};
	},
	view: function(ctrl){
		var ten = [1,2,3,4,5,6,7,8,9,10];
		return m("svg",{class: "score", width: "300px", height: "50px"},[
			ten.map(function(elem, count) {
				return m("circle", {
					cx: count*30+15,
					cy: 25,
					r: 10,
					fill: "#ffffff",
					stroke: "#ff5050",
					"stroke-width": "1",
					onclick: ctrl.onclick(elem)
				});
			}),
			ten.map(function(elem, count) {
				return m("text", {
					x: count*30+15,
					y: 29,
					r: 10,
					fill: "#ff5050",
					"font-size": "8pt",
					"text-anchor": "middle",
					"stroke-width": "1",
					onclick: ctrl.onclick(elem)
				}, elem);
			})
		]);
	}
};

var Graph = {
	controller: function(id){
		return {
			getHistory: function(){
				console.log(model.history());
				if(model.history().scores){
					return model.history().scores.filter(function(s){
						return s.indicator_id === id;
					});
				}
				return [];
			}
		};
	},
	view: function(ctrl){
		var scores = ctrl.getHistory();
		if(scores.length > 0){
			return m("svg",{class: "graph", width: "300px", height: "200px"},[
				scores.map(function(elem, count) {
					return m("rect", {
						x: count*20+30-1,
						y: 200-elem.score*20,
						width: 2,
						height: elem.score*20,
						fill: "#ff5050"
					});
				}),
				scores.map(function(elem, count) {
					return m("circle", {
						cx: count*20+30,
						cy: 200-elem.score*20,
						r: 5,
						fill: "#ff5050",
						stroke: "#ffffff",
						"stroke-width": "2"});
				})
			]);
		} else {
			return m("div",{},"");
		}

	}
};

var Cards = {
	controller: function(){
		return {
			indicators: model.indicators()
		};
	},
	view: function(ctrl){
		return m("div",{class: "card_list"},[
			ctrl.indicators.map(function(indicator){
				return m("div",{class: "card"},[
					m("div", {class:"numbers"}, [
						m("span",{},"gemiddelde: "),
						m("span",{class: "number"},indicator.average)
					]),
					m("div", {}, [
						m("span",{class: "matewaarin"},"De mate waarin "),
						m("span",{class: "title"}, indicator.title)
					]),
					m.component(Graph, indicator.id),
					m.component(Scorebar, indicator.id),

				]);
			})
		]);
	}
};

var NewCard = {
	controller: function(){
		var value = "";
		return {
			getvalue: function () {
				return value;
			},
			onchange: function (e){
				value = e.target.value;
			},
			submit: function (e) {
				POST("/indicator", {
					session_id: model.handshake().session_id,
					title: value
				}).then(function(){
					value = "";
				});
			}
		};
	},
	view: function(ctrl){
		return m("div", {class: "card"},[
			m("div",{},"Formuleer in één zin een element wat uitdrukking geeft aan jouw gelukkig zijn tijdens je werk:"),
			m("div", {}, [
				m("span",{class: "matewaarin"},"De mate waarin:"),
				m("textarea",{autofocus: "true", class: "title", onchange: ctrl.onchange}, ctrl.getvalue())
			]),
			m("button",{onclick: ctrl.submit},"toevoegen")
		]);
	}
};

var App = {
	controller: function(){
		return {
		};
	},
	view: function(ctrl){
		return m("div",[
			m.component(Menu),
			m("div",{class: "page"},[
				m.component(NewCard),
				m.component(Cards)
			])
		]);
	}
};

m.mount(document.getElementById("app"), App);
