var Card = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"width": "100%",
			"top": "0px",
			"padding": "40px",

			//"box-shadow": "0px 2px 10px #555555",
			//"border": "0.5px solid #AAAAAA",
			"background-color": "#65b16f",
			"color": "#FFFFFF",

			//"border-radius": "7px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-bottom": "0px",
			"position": "relative",

			"font-size": "20pt",
			"transition": "all 0.1s"
		}),
	};

	return {
		controller: function(indicator){
			var colors = [
				"#65b16f",
				"#eebd44",
				"#76aaae"
			];

			return {
				color: colors[Math.floor(Math.random()*2)]
			};
		},
		view: function(ctrl, content){
			return m("div", {style: "background-color:"+ctrl.color+";", class: s.parent}, content);
		}
	};

})();
