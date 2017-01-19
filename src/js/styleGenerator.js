var s = (function(){

	var uuidCounter = 0;

	var style = document.createElement('style');
	style.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(style);

	var set = function(name, rulesobject){
		var rules = "";
		for(var i in rulesobject){
			rules+= i+":" + rulesobject[i]+";";
		}

		if(!(style.sheet||{}).insertRule)
			(style.styleSheet || style.sheet).addRule(name, rules);
		else
			style.sheet.insertRule(name+"{"+rules+"}",0);
	};

	var cl = function(rulesobject){
		uuidCounter++;
		var uuid = "stylizeclass"+uuidCounter;
		set("."+uuid, rulesobject);
		return " "+uuid+" ";
	};

	return {
		set: set,
		cl: cl
	};
})();
