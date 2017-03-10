var Card = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"width": "100%",
			"top": "0px",
			"padding": "20px",

			"box-shadow": "0px 2px 10px #555555",
			//"border": "0.5px solid #AAAAAA",
			"background-color": "#FFFFFF",

			"border-radius": "7px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-bottom": "20px",
			"position": "relative",
		}),
		demate: b.cl({
			"font-size": "20pt",
			"font-weight": "700",
		}),
		waarin: b.cl({
			"font-size": "20pt",
			"font-weight": "200",
		}),
		bookmark: b.cl({
			"position": "absolute",
			"right": "10px",
			"top": "10px",
			"cursor": "pointer"
		}),
		illustration: b.cl({
			"margin-top": "10px",
			"text-align": "center"
		})
	};

	return {
		controller: function(indicator){
			var selected = m.prop(
				model.my_cards().find(
					function(c){
						return indicator.id === c;
					}) !== undefined);
			return {
				selected: selected,
				onclick: function(){
					selected(true);
					model.select_card(indicator);
				}
			};
		},
		view: function(ctrl, indicator){
			return m("div", {class: s.parent}, [
				m("div",[
					m("i", {
						class: s.bookmark+" material-icons",
						onclick: ctrl.onclick
					}, (ctrl.selected())?"bookmark":"bookmark_border"),
					m("div",{class: s.demate},"De mate waarin "),
					m("div",{class: s.waarin}, indicator.title),
					m("div", {class: s.illustration},[
						m("img",{src: "https://d30y9cdsu7xlg0.cloudfront.net/png/102230-200.png"})
					])
				])
			]);
		}
	};

})();
