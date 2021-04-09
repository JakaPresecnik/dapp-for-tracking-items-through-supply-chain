# :coffee: Fair Trade Coffee :coffee:

## About
This is a part of **Udacity's Blockchain Developer Nanodegree** program. And is continuation of the following link : [starter code](https://github.com/udacity/nd1309-Project-6b-Example-Template)
The contracts are deployed on Ethereum Rinkeby Testnet.

## Getting started

### Prerequirements
Before starting, here are some things you need:
* `Node.js ^v12.16.1`, download and install it following [this link](https://nodejs.org/en/),
* `Truffle ^v5.2.4`, open terminal and run `npm install -g truffle`,
* One of this options: 
    * `Metamask extension for chrome` installed in your chrome browser. [Link here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or
    * `Metamask extension for firefox` installed in your firefoy browser. [Link here](https://addons.mozilla.org/sl/firefox/addon/ether-metamask/)
    * If you use Brave browser no extension is needed.
* Connect the wallet extension to Rinkeby Testnet

### Installing:
1. Open the terminal and run this commands:
```
git clone https://github.com/JakaPresecnik/dapp-for-tracking-items-through-supply-chain.git
cd dapp-for-tracking-items-through-supply-chain
npm install
truffle develop
```
2. You should see `truffle(develop)` running in the terminal. Run:
```
compile
migrate
```
3. Open another terminal and run this:
```
npm run dev
```
When it is done the site should open up automatically, and metamask should open.

#### To run through browser:
[This is a link](https://jakapresecnik.github.io/dapp-for-tracking-items-through-supply-chain/) to a page built with github pages.
You should switch the network in your metamask to *rinkeby testnet*.
However you won't be able to interact with anything else but one functionallity, unless I give you roles.
*note:* The code in gh-pages branch is different than on master branch: the line 116 in App.js - where we are importing the contracts had to have a gh-pages entry added (/dapp-for-tracking-items-through-supply-chain), othervise it falls back to start.

## Running Tests
For testing contract run:
```
truffle develop
test
```
![Test Screenshot](/images/tests.jpg)
This is how it should look like :relaxed:

## Built With
* **truffle-hdwallet-provider** used in *truffle-config.js* in order to allow the deployment of contracts with Infura to testnet,
* **web3** version 0.20.6 is imported in *index.html* as the website is a standalone
* **lite-server** is used for development

## UML diagrams
In general smart contracts are built this way:
* Activity Diagram:
![Activity Diagram](/images/activity-diagram.jpg)
* Sequence Diagram:
![Sequence Diagram](/images/sequence-diagram.jpg)
* State Diagram:
![State Diagram](/images/state-diagram.jpg)
* Class Diagram:
![Class Diagram](/images/class-diagram.jpg)

## Smart Contracts
The contracts are compiled with compiler version: 0.4.24, and are deployed on Ethereum Rinkeby Testnet:
* FarmerRole contract: [0xb158a969056350488E48af5451151Cb701b994Ad](https://rinkeby.etherscan.io/address/0xb158a969056350488E48af5451151Cb701b994Ad)
* DistributorRole contract: [0x45820a1D9B1e63Ad86FDDeb7519ea63309eA9433](https://rinkeby.etherscan.io/address/0x45820a1D9B1e63Ad86FDDeb7519ea63309eA9433)
* RetailerRole contract: [0x2451874BCa8320976c064aFdDDB50f03101Ad02f](https://rinkeby.etherscan.io/address/0x2451874bca8320976c064afdddb50f03101ad02f)
* ConsumerRole contract: [0xd594145B78A8C400a4B18822c0d5eA769955E76C](https://rinkeby.etherscan.io/address/0xd594145B78A8C400a4B18822c0d5eA769955E76C)
* SupplyChain contract: [0xD65d25cf04B6988118661F86512139E40035f7Fe](https://rinkeby.etherscan.io/address/0xD65d25cf04B6988118661F86512139E40035f7Fe)

More informatiton about contracts you can find in *contracts-info-txt*. It is a copy of compiling logs and migrating logs to testnet.

## Changes made
* Changed .watch() testing function as it has been changed in Web3 v1.
* Added role testing to test if roles are added, and also to add the roles to addresses before tests.
* Added web3.eth.defaultAccount in initSupplyChain inside app.js to connect the account.
* I didn't like the current layout, that made me confused on what I need to do, so I changed it by:
    * massive overhaul of index.html, and added readForm() function call in functions that needed to read inputs, as it broke when I rebuilt html to suit my needs.
    * adding fetchRole() inside app.js to check account for what role does it have,
    * calling fetchRole() inside initSupplyChain,
    * created manipulatingDOM.js, linked it and added required functionality in that was called in fetchRole(),
    * Added price variable in app.js, so the farmer can set his own price, also change the input for productPrice inside sellItem, to use one from input,
    * comented out ownerID and originFarmerID -the inputs aren't needed as information comes from metamask,
    * added fetchItemData() function calls to FetchItemBuffer functions in app.js to update the DOM
    * added nev variables so that new actors can be added 
    * created functions for adding actors and upgraded switch statement accordingly
