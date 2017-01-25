var DetailedCard = (function(){

	var s ={
		parent: b.cl({
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
		demate: b.cl({
			"font-size": "24pt",
			"font-weight": "700",
		}),
		waarin: b.cl({
			"font-size": "24pt",
			"font-weight": "200",
		}),
		bookmark: b.cl({
			"position": "absolute",
			"right": "10px",
			"top": "10px",
			"cursor": "pointer"
		})
	};

	return {
		controller: function(indicator){
			return {
				onclick: function(){
					model.unselect_card(indicator);
				}
			};
		},
		view: function(ctrl, indicator){
			return m("div", {class: s.parent}, [
				m("div",[
					m("i", {
						class: s.bookmark+"material-icons",
						onclick: ctrl.onclick
					}, "delete"),
					m("span",{class: s.demate},"De mate waarin "),
					m("span",{class: s.waarin}, indicator.title),
					m.component(ValueSelector)
				])
			]);
		}
	};

})();
