var MenuBar = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"height": "70px",
			"width": "100%",
			"bottom": "0px",
			"padding-top": "10px",
			"position": "fixed",
			"z-index": "9000",

			//styling
			"background-color": "#ffffff",

			"color": "#000000",
			"box-shadow": "0px -1px 5px #555555",
			"text-align": "justify"
		}),
		right: b.cl({
			"width": "100%"
		}),
		icon: b.cl({
			"float": "left",
		//	"vertical-align": "middle",
			"text-align": "center",
			"width": "33%",
			"cursor": "pointer",
		}),
		icontitle: b.cl({
			"font-size": "14px"
		}),
		selected: b.cl({
			//"border-bottom": "4px solid white!important"
			"color": "#ed1d24",
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
				m("span", {class: s.right}, [
					m("div",{
						class: (ctrl.status()===0?s.selected:"")+s.icon,
						onclick: ctrl.get_onclick(0)
					},[
						//m("i", {class: "material-icons"}, "list"),
						m("img",{src: "/icons/meetlatten.png"}),
						m("div",{class: s.icontitle},"mijn meetlatten")
					]),
					m("div",{
						class: (ctrl.status()===1?s.selected:"")+s.icon,
						onclick: ctrl.get_onclick(1)
					},[
						m("i", {class: "material-icons"}, "people"),
						m("div",{class: s.icontitle},"ontdekken")
					]),
					m("div",{
						class: (ctrl.status()===3?s.selected:"")+s.icon,
						onclick: ctrl.get_onclick(3)
					},[
						m("i", {class: "material-icons"}, "timeline"),
						m("div",{class: s.icontitle},"maatjes")
					]),

				])
			]);
		}
	};

})();
