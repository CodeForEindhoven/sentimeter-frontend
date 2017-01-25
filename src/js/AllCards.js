var AllCards = (function(){

	var s ={

	};

	return {
		controller: function(){
			return {
				indicators: model.indicators
			};
		},
		view: function(ctrl){
			return m("div", {}, [
				ctrl.indicators().map(function(indicator){
					return m.component(Card, indicator);
				})
			]);
		}
	};

})();
