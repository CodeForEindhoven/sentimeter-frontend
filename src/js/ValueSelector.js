var ValueSelector = (function(){

	var s ={
		parent: b.cl({
			//shape
			"width": "100%",
			"height": "10px",

			"box-shadow": "inset 0px 1px 5px #AAAAAA",
			"border": "0.5px solid #AAAAAA",
			"border-radius": "10px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-top": "20px",
			"position": "relative",
		}),
		slider: b.cl({
			"margin-top": "-12px",
			"left": "-35px",
			"width": "35px",
			"height": "35px",
			"border-radius": "30px",
			"background-color": "#FF0000",
			"box-shadow": "0px 1px 5px #AAAAAA",
			"transition": "all 0.2s cubic-bezier(.2,.58,.23,2) ",
			"text-align": "center",
			"line-height": "35px",
		},{
			":active" : {
				"box-shadow": "0px 3px 2px #AAAAAA",
				"margin-top": "-14px",
				"background-color": "#e56061"
			}
		}),
		label: b.cl({
			"vertical-align": "middle",
			"font-weight": "bold",
			"color": "#FFFFFF"
		})
	};

	return {
		controller: function(indicator){
			var width= m.prop(50);
			return {
				width: width,
				config: function(e){

					console.log(e.parentElement.offsetWidth);
					width(e.parentElement.offsetWidth);
					e.setAttribute("style", "margin-left:"+(width()/2-12)+"px");
				},
				onmouseup: function(){},
				onmousedown: function(){}
			};
		},
		view: function(ctrl, indicator){
			console.log(ctrl.width());
			return m("div", {class: s.parent}, [
				m("div", {
					class: s.slider,
					config: ctrl.config,
					onmousedown: ctrl.onmousedown,
					onmouseup: ctrl.onmouseup
				}, m("span", {class: s.label}, 5))
			]);
		}
	};

})();
