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
			"transition": "all 0.1s"
		}),
		hold: b.cl({
			"box-shadow": "0px 5px 30px #555555!important",
			"transform": "translate(0px,-5px) rotate(-1deg)"
		}),
	};

	return {
		controller: function(indicator){
			var hold = m.prop();
			return {
				hold: hold
			};
		},
		view: function(ctrl, content){
			return m.component(Draggable,
				m("div", {class: s.parent+(ctrl.hold()?s.hold:"")}, content),
				function(hold){
					ctrl.hold(hold);
				}
			);
		}
	};

})();
