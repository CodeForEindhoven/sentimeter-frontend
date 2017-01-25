var ChartCmp = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"height": "170px",
			"width": "100%",
			"background-color": "#777777",
			"position": "relative",
			"padding": "20px",
			"color": "#FFFFFF"

		}),
	};

	return {
		controller: function(history){

		},
		view: function(ctrl, history){
			if(history){
				return m("div", {class: s.parent}, history.map(function(s){
					return m("span", s.score + " - ");
				}));
			}
			return m("div");
		}
	};

})();
