var Card = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"width": "300px",
			"top": "0px",
			"padding": "20px",

			"box-shadow": "0px 2px 10px #555555",
			//"border": "0.5px solid #AAAAAA",
			"background-color": "#FFFFFF",

			"border-radius": "7px",
			"margin-left": "auto",
			"margin-right": "auto",
			"margin-bottom": "20px",
			"position": "relative",

			"font-size": "20pt",
			//"transition": "all 0.1s"
		}),
		hold: b.cl({
			"box-shadow": "0px 5px 30px #555555!important",
		}),
	};

	return {
		controller: function(indicator){
			var hold = m.prop(false);
			var downpos = m.prop({x:0,y:0});
			var deltapos = m.prop({x:0,y:0});
			var currentpos = m.prop({x:0,y:0});

			function ondrag(e){
				deltapos({
					x: e.touches[0].clientX-downpos().x,
					y: e.touches[0].clientY-downpos().y
				});
				m.redraw();
			}

			return {
				hold: hold,
				deltapos: deltapos,
				currentpos: currentpos,

				down: function(e){
					e.preventDefault();
					downpos({
						x: e.touches[0].clientX,
						y: e.touches[0].clientY
					});
					hold(true);
					window.addEventListener("touchmove", ondrag, false);
				},
				up: function(){
					hold(false);
					currentpos({
						x: currentpos().x + deltapos().x,
						y: currentpos().y + deltapos().y
					});
					deltapos({
						x:0,
						y:0
					});
					window.removeEventListener('touchmove', ondrag ,false);
				}
			};
		},
		view: function(ctrl, content){
			return m("div", {
				class: s.parent+(ctrl.hold()?s.hold:""),
				style: "transform: translate("+(ctrl.currentpos().x+ctrl.deltapos().x)+"px,"+(ctrl.currentpos().y+ctrl.deltapos().y)+"px)",
				ontouchstart: ctrl.down,
				ontouchend: ctrl.up
			}, content);
		}
	};

})();
