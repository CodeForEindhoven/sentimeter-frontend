var App = {
	controller: function(){
		var status = m.prop(0);
		var addvalue = m.prop("");
		return {
			status: status,
			addvalue: addvalue,

			onadd: function(){
				status(2);
			},
			oncreate: function(){
				POST("/indicator", {
					session_id: model.handshake().session_id,
					title: addvalue
				}).then(function(answer){
					model.select_card(answer);
					
					addvalue("");
					status(0);
				});

			}
		};
	},
	view: function(ctrl){
		return m("div",[
			m.component(MenuBar, ctrl.status),
			m("div",{class: "page"},[
				(function(){
					if(ctrl.status()===0){return m.component(MyCards);}
					if(ctrl.status()===1){return m.component(AllCards);}
					if(ctrl.status()===2){return m.component(AddCards, {value: ctrl.addvalue, callback: ctrl.oncreate});}
				})()
			]),
			(function(){
				if(ctrl.status()<2){
					return m.component(HoverButton,{
						icon: "add",
						onclick: ctrl.onadd
					});
				} else {
					return m.component(HoverButton,{
						icon: "check",
						onclick: ctrl.oncreate
					});
				}
			})()

		]);
	}
};

m.mount(document.getElementById("app"), App);
