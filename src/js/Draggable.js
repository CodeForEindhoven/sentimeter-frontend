var Draggable = (function(){

	var s = {};

	return {
		controller: function(content, callback){
			var wait = false;
			var hold = m.prop(false);
			callback(hold());

			var downpos = m.prop({x:0,y:0});
			var deltapos = m.prop({x:0,y:0});
			var currentpos = m.prop({x:0,y:0});

			var scrollpos = m.prop(0);

			function ondrag(e){
				//e.preventDefault();
				window.scrollTo(0, scrollpos());
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

					wait = true;
					window.setTimeout(function(){
						if(wait){
							scrollpos(window.pageYOffset || document.documentElement.scrollTop);
							downpos({
								x: e.touches[0].clientX,
								y: e.touches[0].clientY
							});
							hold(true);
							callback(hold());
							document.addEventListener("touchmove", ondrag, false);
							m.redraw();
						}
					},700);
				},
				up: function(){
					hold(false);
					wait = false;
					callback(hold());
					currentpos({
						x: currentpos().x + deltapos().x,
						y: currentpos().y + deltapos().y
					});
					deltapos({
						x:0,
						y:0
					});
					document.removeEventListener('touchmove', ondrag ,false);
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
