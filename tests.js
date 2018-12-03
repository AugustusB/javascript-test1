var value;
QUnit.module( 'Module 1', {
    beforeEach: function( assert ) {
        value = "hello";;
        // $("body").append("<div id='div2'>some different text</div>");
},
    afterEach: function( assert ) {
        value = 'hello';
        // $("#div1").remove();
    }
});

QUnit.test('my first test using assert.ok', function( assert ){
    assert.ok( true, "Using the assert.ok");
});

QUnit.test('my second test using equal', function( assert ){
    assert.equal( value, "hello", "We expect value to be hello and testing assert.equal." );
});

// QUnit.test('DOM test 2', function(assert) {
// 	assert.strictEqual(SUT.ReadDiv(), 'some different text');
// });
QUnit.test('CreateTodoItem creates 2 element', function(assert) {
	SUT.CreateTodoItem();
	assert.strictEqual($(".js-todoContainer").length, 2,"We created the div in the DOM." );
});

QUnit.test('asynchronous timing test using assert.async().', function(assert) {
    assert.expect( 2 );
    var done = assert.async(2);
	setTimeout(function() {
        assert.ok(true, "setTimeout after 100 ms.");
        console.log('%csetTimeout after 100 ms.', 'color:red');
        done();
    }, 100);
    setTimeout(function() {
        assert.ok(true, "setTimeout after 2000 ms.");
        console.log('%csetTimeout after 2000 ms.', 'color:blue');
        done();
	}, 2000);
});

QUnit.test('asynchronous UI test', function(assert) {
    assert.expect( 2 );
    var done = assert.async(1);
	var div1 = $("#div1");
	assert.ok(div1.is(':visible'));
	
	SUT.fadeOutDiv(500, function() {
		assert.ok(!div1.is(':visible'));
		done();
	});
});

QUnit.test('Using Sinon spies in test', function(assert){
    // Arrange
    var spy = sinon.spy();

    // Act 
    SUT.callFnCallBack(spy);

    // Assert
    assert.ok(spy.called, "Spy was called. Success");

});


QUnit.test('Using Sinon spies for with functions with return values', function(assert){
    // Arrange
    assert.expect(2); 
    var spy = sinon.spy(realCallBack);
    // Act 
    var returnVal = SUT.callfnCallBackWithReturnValue(spy);

    // Assert
    assert.ok(spy.called, "Spy was called. With a returning value.");
    assert.strictEqual(returnVal, 4 ,"Expected value 4 and returned value is 4.");
});

QUnit.test("Using Sinon spies when there are dependencies", function(assert){
    // Arrange 
    var spy = sinon.spy(dependency, 'doSomething')
    // Act 
    var returnVal = SUT.callDependency(dependency);

    // Assert 
    assert.ok(returnVal, 'Spy was called and the method was invoked.');
    assert.strictEqual(returnVal, 10, 'Expected value 10 and returned value is 10.');
});