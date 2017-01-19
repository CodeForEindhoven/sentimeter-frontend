var MyCards = (function(){

	var style = {

	};

	return {
		controller: function(){
			return {
				indicators: model.my_indicators
			};
		},
		view: function(ctrl){
			console.log("redraw");
			return m("div", {}, [
				ctrl.indicators().map(function(indicator){
					return m.component(DetailedCard, indicator);
				})
			]);
		}
	};

})();
