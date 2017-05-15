var ChartCmp = (function(){

	function drawDateStamp(context, timestamp, x, y){
		var months = ["JAN", "FEB", "MRT", "APR", "MEI", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		var d = new Date(timestamp);
		context.fillText(d.getDate(),x,y);
		context.fillText(months[d.getMonth()],x,y+10);
	}


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
			var timestamp = 0;
			return {
				history: history,
				config: function(e){

					//only redaw if changed
					if(history()[history().length-1].timestamp !== timestamp){

						timestamp = history()[history().length-1].timestamp;

						var context = e.getContext('2d');
						e.width = e.offsetWidth;
						e.height = e.offsetHeight;
						context.font = "10px Arial";
						context.textAlign = "center";

						var radius = 3;


						//draw lines

						//context.lineWidth = 1;
						//context.strokeStyle = '#cccccc';

						//for(var i=0; i<0.9; i+=0.1){
						//	context.beginPath();
						//	context.moveTo(0, e.height*(i*0.9+0.1));
						//	context.lineTo(e.width, e.height*(i*0.9+0.1));
						//	context.stroke();
						//}


						if(history()){
							var start =  new Date(history()[0].timestamp).getTime();
							var length = new Date(history()[history().length-1].timestamp).getTime()-start;

							if(history().length>1){
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
								drawDateStamp(context, history()[0].timestamp, 10, e.height-20);
								drawDateStamp(context, history()[history().length-1].timestamp, e.width-10, e.height-20);

								context.lineWidth = 1;
								context.strokeStyle = '#dddddd';

								context.beginPath();
								context.moveTo(25, e.height-17);
								context.lineTo(e.width-25, e.height-17);
								context.stroke();

								context.beginPath();
								context.moveTo(25, e.height-11);
								context.lineTo(25, e.height-24);
								context.stroke();

								context.beginPath();
								context.moveTo(e.width-25, e.height-11);
								context.lineTo(e.width-25, e.height-24);
								context.stroke();
							}

							history().map(function(s){
								var time = new Date(s.timestamp).getTime();
								var x = (((time-start)/length)*0.8+0.1)*e.width;
								var y = e.height-(s.score*0.09+0.01)*e.height;

								context.beginPath();
								context.arc(x, y, radius, 0, 2 * Math.PI, false);
								context.fillStyle = '#f4ee42';
								context.fill();
								context.lineWidth = 2;
								context.strokeStyle = '#f4cb42';
								context.stroke();
							});


						}
					}
				}
			};
		},
		view: function(ctrl, history){

			ctrl.history(history);
			if(history){
				if(history.length>1){
					var start =  new Date(history[0].timestamp).getTime();
					var length = new Date(history[history.length-1].timestamp).getTime()-start;

					return m("canvas",{class: s.parent, config: ctrl.config});
				}
			}
			return m("div");
		}
	};

})();
