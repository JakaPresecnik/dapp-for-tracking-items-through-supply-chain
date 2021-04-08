Changed .watch() testing function as it has been changed in Web3 v1
Added role testing to test if roles are added, and also to add the roles to addresses.

imported truffle-hdwallet-provider to deploy with Infura and make a connection to metamask.

FarmerRole contract: 0xb158a969056350488E48af5451151Cb701b994Ad
DistributorRole contract: 0x45820a1D9B1e63Ad86FDDeb7519ea63309eA9433 
RetailerRole contract: 0x2451874BCa8320976c064aFdDDB50f03101Ad02f
ConsumerRole contract: 0xd594145B78A8C400a4B18822c0d5eA769955E76C
SupplyChain contract: 0xD65d25cf04B6988118661F86512139E40035f7Fe

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