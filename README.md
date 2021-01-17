# smart_contract_helloworld
Write and deploy your first smart contract.


var hw;
Main.deployed().then(function(d){hw = d;});
hw.setUserName("Ahmet")
hw.printMessage.call()
