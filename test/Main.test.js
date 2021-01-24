const Main = artifacts.require('Main');

contract('Main', function() {

	it("should print out hello", function(){
		return Main.deployed().then(function(instance) {
			instance.setUserName("Ahmet")
			return instance.printMessage.call();
		}).then(function(msg) {
			assert.equal(msg, "Hello Ahmet!", "should print out hello to entered name");
		});
	});
});


