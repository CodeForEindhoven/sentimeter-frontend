var App = {
	controller: function(){
		var status = m.prop(0);
		return {
			status: status
		};
	},
	view: function(ctrl){
		console.log(ctrl.status);
		return m("div",[
			m.component(MenuBar, ctrl.status),
			m("div",{class: "page"},[
				(ctrl.status()===0?m.component(MyCards):m.component(AllCards))
			])
		]);
	}
};

m.mount(document.getElementById("app"), App);
