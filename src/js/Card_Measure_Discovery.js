var Card_Measure_Discovery = (function(){

	var s = {};

	return {
		controller: function(indicator){},
		view: function(ctrl, indicator){
			return m.component(Card_Measure, {
				indicator: indicator,
				icon: model.selected(indicator)?"added":"add",
				click: function(){
					model.select_card(indicator);
				}
			});
		}
	};
})();
