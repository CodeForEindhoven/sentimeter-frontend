var Card = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"width": "100%",
			"top": "0px",
			"padding": "20px",

			"box-shadow": "0px 2px 10px #555555",
			//"border": "0.5px solid #AAAAAA",
			"background-color": "#FFFFFF",

			"border-radius": "7px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-bottom": "20px",
			"position": "relative",

			"font-size": "20pt",
		}),
		small: b.cl({
			//shape
			"box-sizing": "border-box",
			"width": "50%",
			"top": "0px",
			"padding": "10px",

			"box-shadow": "0px 2px 10px #555555",
			//"border": "0.5px solid #AAAAAA",
			"background-color": "#FFFFFF",

			"border-radius": "3px",
			"margin-left": "0px",
			"margin-right": "auto",
			"margin-bottom": "20px",
			"position": "relative",

			"font-size": "10pt",
		}),
	};

	return {
		controller: function(indicator){

		},
		view: function(ctrl, content){
			return m("div", {class: s.small}, content);
		}
	};

})();
