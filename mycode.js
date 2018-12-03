
var SUT = {}

SUT.ReadDiv = function() {
	return $("#div2").text();
}
SUT.CreateTodoItem = function() {
	$("#div1").append("<div class='js-todoContainer'>other html content</div><div class='js-todoContainer'>more content</div>");
}

SUT.fadeOutDiv = function(duration, callback) {
	$("#div1").fadeOut(duration, callback);
}

SUT.callFnCallBack = function callFnCallBack(cb) {
	cb();
} 
SUT.callfnCallBackWithReturnValue = function callfnCallBackWithReturnValue(cb) {
	return cb();
}

SUT.callDependency = function callDependency(dep) {
	return dep.doSomething();
}

function realCallBack() {
	return 4;
}

var dependency = {
	doSomething : function () {
		return 10;
	}
};