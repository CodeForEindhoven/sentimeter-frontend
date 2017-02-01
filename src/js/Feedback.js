var Feedback = (function(){

	var s ={
		demate: b.cl({
			"font-size": "24pt",
			"font-weight": "700",
		}),
		textarea: b.cl({
			"font-family": "'Nunito Sans', sans-serif",
			"border-style": "none",
			"border-color": "Transparent",
			"width": "100%",
			"height": "200px",

			"font-size": "24pt",
			"font-weight": "200",
		})
	};

	return {
		controller: function(options){
			return {
				getvalue: function () {
					return options.value();
				},
				onchange: function (e){
					options.value(e.target.value);
				},
				config: function(e){
					e.focus();
					window.scrollTo(0, 0);
				}
			};
		},
		view: function(ctrl){
			return m("div", {},[
				m("div",{},"Vragen of opmerkingen? We horen het graag!"),
				m("div", {}, [
					m("textarea",{autofocus: "true", config: ctrl.config, class: s.textarea, onchange: ctrl.onchange}, ctrl.getvalue())
				]),
			]);
		}
	};

})();
