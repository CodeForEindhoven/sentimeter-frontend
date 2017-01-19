var Card = (function(){

	var style = {
		parent: s.cl({
			//shape
			"box-sizing": "border-box",
			"width": "100%",
			"top": "0px",
			"padding": "30px",

			"box-shadow": "0px 1px 5px #AAAAAA",
			"border": "0.5px solid #AAAAAA",
			"border-radius": "7px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-bottom": "20px",
			"position": "relative",
		}),
		demate: s.cl({
			"font-size": "24pt",
			"font-weight": "700",
		}),
		waarin: s.cl({
			"font-size": "24pt",
			"font-weight": "200",
		}),
		bookmark: s.cl({
			"position": "absolute",
			"right": "10px",
			"top": "10px"
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
					model.select_card(indicator);
					selected(true);
				}
			};
		},
		view: function(ctrl, indicator){
			return m("div", {class: style.parent}, [
				m("div",[
					m("i", {
						class: style.bookmark+" material-icons",
						onclick: ctrl.onclick
					}, (ctrl.selected())?"bookmark":"bookmark_border"),
					m("span",{class: style.demate},"De mate waarin "),
					m("span",{class: style.waarin}, indicator.title),
				])
			]);
		}
	};

})();
