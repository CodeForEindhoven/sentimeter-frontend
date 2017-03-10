var Measures = (function(){

	var s = {
		title: b.cl({
			"color": "#ffffff"
		}),
		searchbutton: b.cl({
			"position": "absolute",
			"top": "35px",
			"right": "30px",
		})
	};

	return {
		controller: function(){
			var mode = m.prop(0);
			return {
				mode: mode,
				switchmode: function(){
					if(mode()===0){
						mode(1);
					} else {
						mode(0);
					}
				}
			};
		},
		view: function(ctrl){
			return m("div", {}, [
				m("h1", {class: s.title}, (ctrl.mode()===0)?"Mijn Meetlatten":"Ontdek"),
				//m("div", {class: s.searchbutton, onclick: ctrl.switchmode}, m.component(Circle_Icon)),
				m.component(Measures_Mine)
			]);
		}
	};

})();
