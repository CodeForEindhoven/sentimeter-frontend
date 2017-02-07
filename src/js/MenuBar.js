var MenuBar = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"height": "70px",
			"width": "100%",
			"top": "0px",
			"line-height": "70px",
			"padding-left": "20px",
			"padding-right": "0px",
			"position": "fixed",
			"z-index": "9000",

			//styling
			"background-color": "#E32527",

			"color": "#fff",
			"box-shadow": "0px 1px 5px #AAAAAA",
		}),
		right: b.cl({
			"float": "right"
		}),
		icon: b.cl({
			"vertical-align": "middle",
			"text-align": "center",
			"line-height": "64px",
			"width": "70px",
			"border-bottom": "4px solid #E32527",
			"cursor": "pointer"
		}),
		selected: b.cl({
			"border-bottom": "4px solid white!important"
		})
	};

	return {
		controller: function(status){
			return {
				status: status,
				get_onclick: function(s){
					return function(){
						status(s);
					};
				}
			};
		},
		view: function(ctrl){

			return m("nav", {class: s.parent}, [
				m("span","Waag"),
				m("span", {class: s.right}, [
					m("i", {
						class: (ctrl.status()===0?s.selected:"")+s.icon+"material-icons",
						onclick: ctrl.get_onclick(0)
					}, "person"),
					m("i", {
						class: (ctrl.status()===1?s.selected:"")+s.icon+"material-icons",
						onclick: ctrl.get_onclick(1)
					}, "people"),
					m("i", {
						class: (ctrl.status()===3?s.selected:"")+s.icon+"material-icons",
						onclick: ctrl.get_onclick(3)
					}, "comment"),
				])
			]);
		}
	};

})();
