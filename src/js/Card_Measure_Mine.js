var Card_Measure_Mine = (function(){

	var s = {};

	return {
		controller: function(indicator){},
		view: function(ctrl, indicator){
			return m.component(Card_Measure, {
				indicator: indicator,
				image: "https://d30y9cdsu7xlg0.cloudfront.net/png/102230-200.png",
				interaction: m.component(ValueSelector, indicator.id, indicator.history.scores),
				icon: "remove",
				click: function(){
					model.unselect_card(indicator);
				}
			});
		}
	};
})();
