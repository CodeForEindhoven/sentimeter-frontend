var App = {
	controller: function(){
		var status = m.prop(0);
		var addvalue = m.prop("");
		var feedbackvalue = m.prop("");

		return {
			status: status,
			addvalue: addvalue,
			feedbackvalue: feedbackvalue,

			onadd: function(){
				status(2);
			},
			oncreate: function(){
				POST("/indicator", {
					session_id: model.handshake().session_id,
					title: addvalue()
				}).then(function(answer){
					model.select_card(answer);

					addvalue("");
					status(0);
				});
			},
			onfeedback: function(){
				POST("/feedback", {
					session_id: model.handshake().session_id,
					title: feedbackvalue()
				}).then(function(answer){
					feedbackvalue("");
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
					if(ctrl.status()===2){return m.component(AddCards, {value: ctrl.addvalue});}
					if(ctrl.status()===3){return m.component(Feedback, {value: ctrl.feedbackvalue});}
				})()
			]),
			(function(){
				if(ctrl.status()<2){
					return m.component(HoverButton,{
						icon: "add",
						onclick: ctrl.onadd
					});
				} else if(ctrl.status()===2) {
					return m.component(HoverButton,{
						icon: "check",
						onclick: ctrl.oncreate
					});
				} else if(ctrl.status()===3) {
					return m.component(HoverButton,{
						icon: "check",
						onclick: ctrl.onfeedback
					});
				}
			})()

		]);
	}
};

m.mount(document.getElementById("app"), App);
