var AddCards = (function(){

	var style = {
		demate: s.cl({
			"font-size": "24pt",
			"font-weight": "700",
		}),
		textarea: s.cl({
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
				submit: function (e) {

				}
			};
		},
		view: function(ctrl){
			return m("div", {},[
				m("div",{},"Formuleer in één zin een element dat uitdrukking geeft aan jouw gelukkig zijn tijdens je werk:"),
				m("div", {}, [
					m("span",{class: style.demate},"De mate waarin:"),
					m("textarea",{autofocus: "true", class: style.textarea, onchange: ctrl.onchange}, ctrl.getvalue())
				]),
				//m("button",{onclick: ctrl.submit},"toevoegen")
			]);
		}
	};

})();
