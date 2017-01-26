var ChartCmp = (function(){

	var s ={
		parent: b.cl({
			//shape
			"box-sizing": "border-box",
			"height": "170px",
			"width": "100%",
			"position": "relative",

		}),
	};

	return {
		controller: function(h){
			var history = m.prop(h);
			return {
				history: history,
				config: function(e){
					var context = e.getContext('2d');
					e.width = e.offsetWidth;
					e.height = e.offsetHeight;
					console.log(e);
					var radius = 5;

					context.lineWidth = 1;
					context.strokeStyle = '#cccccc';

					for(var i=0; i<1; i+=0.1){
						context.beginPath();
						context.moveTo(0, e.height*(i*0.8+0.1));
						context.lineTo(e.width, e.height*(i*0.8+0.1));
						context.stroke();
					}


					if(history()){
						var start =  new Date(history()[0].timestamp).getTime();
						var length = new Date(history()[history().length-1].timestamp).getTime()-start;
						history().reduce(function(p,s){
							var time = new Date(s.timestamp).getTime();

							var x = (((time-start)/length)*0.8+0.1)*e.width;
							var y = e.height-(s.score*0.09+0.01)*e.height;

							if(p){
								context.beginPath();
								context.moveTo(p.x, p.y);
								context.lineTo(x, y);
								context.lineWidth = 2;
								context.strokeStyle = '#f4cb42';
								context.stroke();
							}
							return {x:x, y:y};
						}, {});
						history().map(function(s){
							var time = new Date(s.timestamp).getTime();
							var x = (((time-start)/length)*0.8+0.1)*e.width;
							var y = e.height-(s.score*0.09+0.01)*e.height;
							console.log(x+", "+y);
							context.beginPath();
							context.arc(x, y, radius, 0, 2 * Math.PI, false);
							context.fillStyle = '#f4ee42';
							context.fill();
							context.lineWidth = 3;
							context.strokeStyle = '#f4cb42';
							context.stroke();
						});
					}
				}
			};
		},
		view: function(ctrl, history){

			ctrl.history(history);
			if(history){
				var start =  new Date(history[0].timestamp).getTime();
				var length = new Date(history[history.length-1].timestamp).getTime()-start;

				return m("canvas",{class: s.parent, config: ctrl.config});
			}
			return m("div");
		}
	};

})();
