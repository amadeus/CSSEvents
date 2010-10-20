(function(){

var prefix =
	(Browser.safari || Browser.chrome || Browser.Platform.ios) ? 'webkit' :
	(Browser.opera) ? 'o' :
	(Browser.ie) ? 'ms' : '';

var eventTypes = [
	'transitionStart',
	'transitionEnd',
	'animationStart',
	'animationIteration',
	'animationEnd'
];

var fn = function(eventType){

	Element.NativeEvents[eventType.toLowerCase()] = 2;

	var customType = eventType;
	
	if (prefix) customType = prefix + customType.capitalize();
	else customType = customType.toLowerCase();

	Element.NativeEvents[customType] = 2;

	Element.Events[eventType.toLowerCase()] = {
		base: customType
	};
};

eventTypes.each(fn, this);

})();