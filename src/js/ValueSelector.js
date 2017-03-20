var ValueSelector = (function(){

	var s ={
		parent: b.cl({
			"width": "100%",
			"height": "35px",
			"padding-top": "20px",
			"background-color": "inherit",
		}),
		rails: b.cl({
			//shape
			"width": "100%",
			"height": "0px",
			"background-color": "inherit",
			//"box-shadow": "inset 0px 1px 5px #AAAAAA",
			"border-top": "2px solid #FFFFFF",
			"border-radius": "10px",
			"margin-left": "auto",
			"margin-right": "auto",

			"position": "relative",
		}),
		slider: b.cl({
			"margin-top": "-18px",
			"width": "35px",
			"height": "35px",
			"border-radius": "18px",
			"border": "2px solid #FFFFFF",
			"background-color": "inherit",
			//"box-shadow": "0px 1px 5px #AAAAAA",
			"transition": "all 0.2s cubic-bezier(.2,.58,.23,2) ",
			"text-align": "center",
			"line-height": "35px",
			"cursor": "pointer",
			"touch-callout": "none",
			"user-select": "none",
		}),
		down: b.cl({
			//"box-shadow": "0px 3px 2px #AAAAAA!important",
			"font-size": "25px!important",
			"height": "70px!important",
			"margin-top": "-46px!important",
		}),
		label: b.cl({
			"vertical-align": "middle",
			"font-weight": "bold",
			"color": "#ffffff",
			"user-select": "none"
		},{
			":active" : {

			}
		})
	};

	return {
		controller: function(id, history){
			var value = 5;
			if(history) value = history[history.length-1].score;
			var position = m.prop(value/10);
			var element = m.prop();
			var width = m.prop();
			var left = m.prop();
			var down = m.prop(false);
			var rel = m.prop();
			var ondrag = function(e){
				var x = e.clientX;
				if(!x){
					if(e.changedTouches){
						x = e.changedTouches[0].clientX;
					} else {
						x = 0;
					}
				}

				rel(x - element().parentElement.offsetLeft);
				var p = (rel()/width());
				if(p<0){p=0;}
				if(p>1){p=1;}
				position(p);
				m.redraw();
			};

			var onend = function(){
				console.log("end");
				if(down()===true){
					window.removeEventListener('mousemove', ondrag ,false);
					window.removeEventListener('touchmove', ondrag ,false);
					down(false);
					var value = Math.round(position()*10);
					position(value/10);
					model.score(id, value);
					m.redraw();
				}
			};

			window.addEventListener("mouseup",  onend, false);
			window.addEventListener("touchend", onend, false);

			return {
				down: down,
				position: position,
				config: function(e){
					element(e);
					width(e.parentElement.offsetWidth - e.parentElement.offsetLeft);
					e.setAttribute("style", "margin-left:"+(width()*position())+"px");
				},
				onmousedown: function(e){
					e.preventDefault();
					down(true);
					window.addEventListener("mousemove", ondrag, false);
					window.addEventListener("touchmove", ondrag, false);
				},
			};
		},
		view: function(ctrl, indicator){
			return m("div",{
					class: s.parent
				},[
					m("div", {
						class: s.rails,
					}, [
						m("div", {
							class: s.slider+(ctrl.down()?s.down:""),
							config: ctrl.config,
							onmousedown: ctrl.onmousedown,
							ontouchstart: ctrl.onmousedown
						}, m("span", {class: s.label}, (ctrl.position()*10).toFixed(0)))
					])
			]);

		}
	};

})();
