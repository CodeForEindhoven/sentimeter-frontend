var Card_Measure = (function(){

	var s ={
		parent: b.cl({
			"background-color": "inherit"
		}),
		demate: b.cl({
			"font-weight": "700",
		}),
		waarin: b.cl({
			"font-weight": "200",
		}),
		illustration: b.cl({
			"margin-top": "40px",
			"margin-bottom": "40px",
			"text-align": "center"
		}),
		img: b.cl({
			"width": "150px"
		}),
		remove: b.cl({
			"position": "absolute",
			"top": "30px",
			"right": "20px"
		})
	};

	return {
		controller: function(indicator){
			//var selected = m.prop(
			//	model.my_cards().find(
			//		function(c){
			//			return indicator.id === c;
			//		}) !== undefined);
			return {
				
			//	selected: selected,
			//	onclick: function(){
			//		selected(true);
			//		model.select_card(indicator);
			//	}
			};
		},
		view: function(ctrl, props){
			return m.component(Card, [
				m("div",{class: s.parent},[
					m("div",{class: s.demate},"De mate waarin "),
					m("div",{class: s.waarin}, props.indicator.title),
					(function(){
						if(props.image){
							return m("div", {class: s.illustration},[
								m("img", {class: s.img, src: props.image})
							]);
						}
					}()),
					m("img", {src:"/icons/"+props.icon+".png", class: s.remove, onclick: props.click} ),
					props.interaction
				])
			]);
		}
	};

})();
