var Discovery = (function(){

	var s = {
		title: b.cl({
			"color": "#ffffff",
			"margin-left": "40px",
			"margin-bottom": "30px"
		}),
		searchbutton: b.cl({
			"position": "absolute",
			"top": "35px",
			"right": "30px",
		})
	};

	return {
		controller: function(){},
		view: function(ctrl){
			return m("div", {}, [
				m("h1", {class: s.title}, "Ontdekken"),
				//m("div", {class: s.searchbutton, onclick: ctrl.switchmode}, m.component(Circle_Icon)),
				m.component(Measures_Discovery)
			]);
		}
	};

})();
