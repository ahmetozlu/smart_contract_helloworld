# Smart Contract Hello World

This repository presents practices about:

- Setup a blockchain.
- Develop Ethereum smart contract.
- Deploy the contract and test it.

## Quick Demo

*The main instructions are given below and also the tutorial video of this project can be found on [my YouTube channel](https://www.youtube.com/watch?v=Oxdop144I7Q).*

First, clone the repository and build the project using truffle by this command:

    truffle build

<p align="center">
  <img src="https://user-images.githubusercontent.com/22610163/104853166-15802300-5910-11eb-84d9-4b3c66bbbe45.png">
</p>

After building the project and starting ganache which provides ethereum blockchain network on your local, our smart contract can be deployed using truffle by this command:

    truffle migrate

<p align="center">
  <img src="https://user-images.githubusercontent.com/22610163/104853342-43b23280-5911-11eb-9aec-f9e534af1bf3.png">
</p>

Now, our smart contract has been built and deployed so we can perform test on it by these commands respectively:

    var hw;
    Main.deployed().then(function(d){hw = d;});
    hw.setUserName("Ahmet")
    hw.printMessage.call() // prints Hello Ahmet!

<p align="center">
  <img src="https://user-images.githubusercontent.com/22610163/104853415-bae7c680-5911-11eb-9322-5b0f18360fdf.png">
</p>

Moreover, you can use [developed unit test class](https://github.com/ahmetozlu/smart_contract_helloworld/blob/main/test/Main.test.js) to perform unit testing:

    truffle test

<p align="center">
  <img src="https://user-images.githubusercontent.com/22610163/105637713-df96ed80-5e7f-11eb-8ea9-43f976c10a5c.png">
</p>

## Installation

### Setup

- **Truffle**

      sudo npm install -g truffle@5.1.39 --unsafe-perm=true

- **Ganache** installation guide can be found in [here](https://www.trufflesuite.com/ganache).

## Citation
If you use this code for your publications, please cite it as:

    @ONLINE{vdtct,
        author = "Ahmet Özlü",
        title  = "Smart Contract Hello World",
        year   = "2021",
        url    = "https://github.com/ahmetozlu/smart_contract_helloworld"
    }

## Author
Ahmet Özlü

## License
This system is available under the MIT license. See the LICENSE file for more info.
