var Group = (function(){

	var s ={
		h: b.cl({
			"color": "#ffffff"
		}),
		maatje:  b.cl({
			"height": "50px",
			"width": "50px",
			"background-color": "#ffffff",
			"border-radius": "25px",
			"display": "inline-block",
			"margin-right": "10px"
		})
	};

	return {
		controller: function(){
			return {
				handshake: model.handshake
			};
		},
		view: function(ctrl){
			return m("div", {}, [
				m("h1",{class: s.h},"Mijn Maatjes"),
				(function(){
					var icons = [];
					var count = model.handshake().group.members;
					for(var i=0; i<count; i++){
						icons.push(m("div",{class: s.maatje}));
					}
					return icons;
				}()),
				m("div",{},"hello")
			]);
		}
	};
})();
