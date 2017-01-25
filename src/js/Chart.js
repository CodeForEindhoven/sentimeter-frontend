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

			return {

			};
		},
		view: function(ctrl, history){
			var start =  new Date(history[0].timestamp).getTime();
			var length = new Date(history[history.length-1].timestamp).getTime()-start;

			if(history){
				return m("div", {class: s.parent}, history.map(function(s){
					var time = new Date(s.timestamp).getTime();
					var x = ((time-start)/length)*80+10;
					var y = s.score*8+1;

					return m("span", {style: "position: absolute; left:"+x+"%; bottom:"+y+"%"},s.score);
				}));
			}
			return m("div");
		}
	};

})();
