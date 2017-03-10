var Circle_Icon = (function(){

	var s = {
		circle:  b.cl({
			"height": "50px",
			"width": "50px",


			"border-radius": "25px",

			"text-align": "center",
			"vertical-align": "middle",

			"background-color": "#ffffff",

			"display": "inline-block",
			"margin-right": "10px",
			"box-shadow": "0px 2px 10px #555555",
		}),
		icon: b.cl({
			"line-height": "50px",
		})
	};

	return {
		controller: function(){},
		view: function(ctrl, content){
			return m("div",{class: s.circle},
				m("i", {class: s.icon+"material-icons"}, "remove_red_eye")
			);
		}
	};
})();
