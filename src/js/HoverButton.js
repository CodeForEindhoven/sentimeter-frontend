var HoverButton = (function(){

	var style = {
		main: s.cl({
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
		}),
		icon: s.cl({
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
				class: style.main,
				onclick: options.onclick
			},[
				m("i", {class: "material-icons "+style.icon}, options.icon)
			]);
		}
	};
})();
