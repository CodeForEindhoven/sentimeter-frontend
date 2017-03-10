var Draggable = (function(){

	var s = {};

	return {
		controller: function(content, callback){
			var hold = m.prop(false);
			callback(hold());

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
					callback(hold());
					window.addEventListener("touchmove", ondrag, false);
				},
				up: function(){
					hold(false);
					callback(hold());
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
		view: function(ctrl, content, callback){
			return m("div", {
				style: "transform: translate("+(ctrl.currentpos().x+ctrl.deltapos().x)+"px,"+(ctrl.currentpos().y+ctrl.deltapos().y)+"px)",
				ontouchstart: ctrl.down,
				ontouchend: ctrl.up
			}, content);
		}
	};

})();
