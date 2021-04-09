#Fair Trade Coffee

## About
This is a part of **Udacity's Blockchain Developer Nanodegree** program. And is continuation of the following link : [starter code](https://github.com/udacity/nd1309-Project-6b-Example-Template)
The contracts are deployed on Ethereum Rinkeby Testnet.

## Get started

#### In order for this to run properly you need to have:
* Metamask extension or other eth wallet installed in your web browser,
* Nodejs at least v12.16.1 installed on your computer,
* Truffle at least v5.2.4 installed on your computer

#### Follow this steps to run the app on your local machine:
1. Open the terminal and run this commands:
```git clone https://github.com/JakaPresecnik/dapp-for-tracking-items-through-supply-chain.git
cd dapp-for-tracking-items-through-supply-chain
npm install
truffle develop
```
2. You should see `truffle(develop)` running in the terminal. Run:
```compile
migrate
```
3. Open another terminal and run this:
`npm run dev`
When it is done the site should open up automatically, and metamask should open.

#### To run through browser:
[This is a link](https://jakapresecnik.github.io/dapp-for-tracking-items-through-supply-chain/) to a page built with github pages.
You should switch the network in your metamask to *rinkeby testnet*.
However you won't be able to interact with anything else but one functionallity, unless I give you roles.

## Smart Contracts
The contracts are deployed on Ethereum Rinkeby Testnet:
* FarmerRole contract: [0xb158a969056350488E48af5451151Cb701b994Ad](https://rinkeby.etherscan.io/address/0xb158a969056350488E48af5451151Cb701b994Ad)
* DistributorRole contract: [0x45820a1D9B1e63Ad86FDDeb7519ea63309eA9433](https://rinkeby.etherscan.io/address/0x45820a1D9B1e63Ad86FDDeb7519ea63309eA9433)
* RetailerRole contract: [0x2451874BCa8320976c064aFdDDB50f03101Ad02f](https://rinkeby.etherscan.io/address/0x2451874bca8320976c064afdddb50f03101ad02f)
* ConsumerRole contract: [0xd594145B78A8C400a4B18822c0d5eA769955E76C](https://rinkeby.etherscan.io/address/0xd594145B78A8C400a4B18822c0d5eA769955E76C)
* SupplyChain contract: [0xD65d25cf04B6988118661F86512139E40035f7Fe](https://rinkeby.etherscan.io/address/0xD65d25cf04B6988118661F86512139E40035f7Fe)

More informatiton about contracts you can find in *contracts-info-txt*. It is a copy of compiling logs and migrating logs to testnet.



Changed .watch() testing function as it has been changed in Web3 v1
Added role testing to test if roles are added, and also to add the roles to addresses.

imported truffle-hdwallet-provider to deploy with Infura and make a connection to metamask.

 




added a web.min.js script in html file to get access to web3.
added web3.eth.default account in initSupplyChain to connect the account.

I didn't like the current layout, that made me confused on what I need to do, so I changed it by:
- adding fetchRole() inside app.js to check account for what role does it have,
- calling fetchRole() inside initSupplyChain,
- created manipulatingDOM.js, linked it and added required functionality in that was called in fetchRole(),
- massive overhaul of index.html, and added readForm() function call in functions that needed to read inputs, as it broke when I rebuilt html to suit my needs.
- Added price variable in app.js, so the farmer can set his own price, also change the input for productPrice inside sellItem, to use one from input,
- comented out ownerID and originFarmerID -the inputs aren't needed as information comes from metamask,
- added fetchItemData() function calls to FetchItemBuffer functions in app.js to update the DOM
- added nev variables so that new actors can be added 
-created functions for adding actors and upgraded switch statement accordingly
