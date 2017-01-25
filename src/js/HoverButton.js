var HoverButton = (function(){

	var s ={
		main: b.cl({
			"width": "50px",
			"height": "50px",
			"border-radius": "25px",

			"position": "fixed",
			"bottom": "20px",
			"right": "20px",

			"background-color": "#E32527",
			"color": "#fff",
			"box-shadow": "0px 1px 5px #AAAAAA",

			"text-align": "center",
			"line-height": "48px",

			"cursor": "pointer",

			"transition": "all 0.2s ease"
		},{
			":active" : {
				"box-shadow": "0px 0px 2px #AAAAAA",
				"bottom": "18px",
				"background-color": "#e56061"
			}
		}),
		icon: b.cl({
			"vertical-align": "middle"
		})
	};


	return {
		controller: function(){
			return {

			};
		},
		view: function(ctrl, options){
			return m("div",{
				class: s.main,
				onclick: options.onclick
			},[
				m("i", {class: "material-icons "+s.icon}, options.icon)
			]);
		}
	};
})();
