var ValueSelector = (function(){

	var s ={
		parent: b.cl({
			"width": "100%",
			"height": "35px",
			"background-color": "#FFFFFF",
			"padding-top": "20px",
		}),
		rails: b.cl({
			//shape
			"width": "100%",
			"height": "10px",

			"box-shadow": "inset 0px 1px 5px #AAAAAA",
			"border": "0.5px solid #AAAAAA",
			"border-radius": "10px",
			"margin-left": "auto",
			"margin-right": "auto",

			"position": "relative",
		}),
		slider: b.cl({
			"margin-top": "-12px",
			"width": "35px",
			"height": "35px",
			"border-radius": "17px",
			"background-color": "#FF0000",
			"box-shadow": "0px 1px 5px #AAAAAA",
			"transition": "all 0.2s cubic-bezier(.2,.58,.23,2) ",
			"text-align": "center",
			"line-height": "35px",
			"cursor": "pointer",
			"touch-callout": "none",                /* prevent callout to copy image, etc when tap to hold */
			"user-select": "none",
		},{
			":active" : {
				"box-shadow": "0px 3px 2px #AAAAAA",
				"font-size": "25px",
				"height": "70px",
				"margin-top": "-46px",
			}
		}),
		label: b.cl({
			"vertical-align": "middle",
			"font-weight": "bold",
			"color": "#FFFFFF",
			"user-select": "none"
		},{
			":active" : {

			}
		})
	};

	return {
		controller: function(indicator){
			var position = m.prop(0.5);
			var element = m.prop();
			var width = m.prop();
			var left = m.prop();

			var ondrag = function(e){
				var rel = e.clientX - element().parentElement.offsetLeft;
				position((rel/width()));
				m.redraw();
			};

			var ontouch = function(e){
				e.preventDefault();
				var rel = e.changedTouches[0].clientX - element().parentElement.offsetLeft;
				position((rel/width()));
				m.redraw();
			};

			window.addEventListener("mouseup", function(){
				window.removeEventListener('mousemove', ondrag ,false);
			}, false);

			window.addEventListener("touchend", function(){
				window.removeEventListener('touchmove', ontouch ,false);
			}, false);

			return {
				position: position,
				config: function(e){

					element(e);
					width(e.parentElement.offsetWidth);
					e.setAttribute("style", "margin-left:"+(width()*position()-35)+"px");
				},
				onmousedown: function(e){
					e.preventDefault();
					window.addEventListener("mousemove", ondrag, false);
					window.addEventListener("touchmove", ontouch, false);
				},
			};
		},
		view: function(ctrl, indicator){
			return m("div",{
					class: s.parent,
					onmousemove: ctrl.onmousemove,
				},[
					m("div", {
						class: s.rails,
					}, [
						m("div", {
							class: s.slider,
							config: ctrl.config,
							onmousedown: ctrl.onmousedown,
							ontouchstart: ctrl.onmousedown
						}, m("span", {class: s.label}, (ctrl.position()*10).toFixed(0)))
					])
			]);

		}
	};

})();
