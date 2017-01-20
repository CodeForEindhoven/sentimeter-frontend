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
				(function(){
					if(ctrl.indicators().length > 0){
						return ctrl.indicators().map(function(indicator){
							return m.component(DetailedCard, indicator);
						});
					} else {
						return m("div",{},"Welkom bij waag! Voeg een nieuwe meetlat toe door op het rode plusje te kliken. Of bekijk de meetlatten bibliotheek.");
					}
				})()
			]);
		}
	};

})();
