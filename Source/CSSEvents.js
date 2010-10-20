(function(){

var prefix =
	(Browser.safari || Browser.Platform.ios) ? 'webkit' :
	(Browser.firefox) ? '' :
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
	customType = prefix + customType.capitalize();
	Element.NativeEvents[customType] = 2;

	Element.Events[eventType.toLowerCase()] = {
		base: customType
	};
};

eventTypes.each(fn, this);

})();