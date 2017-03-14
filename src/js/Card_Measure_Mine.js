var Card_Measure_Mine = (function(){

	var s = {};

	return {
		controller: function(indicator){},
		view: function(ctrl, indicator){
			return m.component(Card_Measure,
				indicator,
				m.component(ValueSelector, indicator.id, indicator.history.scores)
			);
		}
	};
})();
