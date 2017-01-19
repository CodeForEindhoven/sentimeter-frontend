var AllCards = (function(){

	var style = {

	};

	return {
		controller: function(){
			return {
				indicators: model.indicators()
			};
		},
		view: function(ctrl){
			return m("div", {}, [
				ctrl.indicators.map(function(indicator){
					return m.component(Card, indicator);
				})
			]);
		}
	};

})();
