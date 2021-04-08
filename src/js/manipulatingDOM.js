const productState = ['Harvested', 'Processed', 'Packed', 'ForSale', 'Sold', 'Shipped', 'Received', 'Purchased'];

const farmerDOM = () => {
    $('#farmer').html(`
    <h2>Farmer</h2>
    <div class="top-nav">
        <span id="harvestTab" class="active">Harvest</span>
        <span id="processTab">Process</span>
        <span id="packTab">Pack</span>
        <span id="sellTab">Sell</span>
        <span id="settingsTab" class="material-icons">settings</span></div>
    <div id="farmerInput" class="form-group">
        SKU
        <br>
        <input class="input-field" type="number" id="sku" name="sku"><br>
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        Farm Name
        <br>
        <input type="text" id="originFarmName" name="originFarmName"><br>
        Farm Information
        <br>
        <input type="text" id="originFarmInformation" name="originFarmInformation" value="Yarra Valley"><br>
        Farm Latitude
        <br>
        <input type="text" id="originFarmLatitude" name="originFarmLatitude" value="-38.239770"><br>
        Farm Longitude
        <br>
        <input type="text" id="originFarmLongitude" name="originFarmLongitude" value="144.341490"><br>
        Product Notes
            <br>
            <input type="text" id="productNotes" name="productNotes" value="Best beans for Espresso" size="60"><br>
        <br>
        <button class="btn-harvest" id="button" type="button" data-id="1">Harvest</button>
    </div>
    `);

    $('#harvestTab').click(() => {
        $("#farmerInput").html(`
            SKU
            <br>
            <input class="input-field" type="number" id="sku" name="sku"><br>
            UPC
            <br>
            <input type="number" id="upc" name="upc"><br>
            Farm Name
            <br>
            <input type="text" id="originFarmName" name="originFarmName"><br>
            Farm Information
            <br>
            <input type="text" id="originFarmInformation" name="originFarmInformation" value="Yarra Valley"><br>
            Farm Latitude
            <br>
            <input type="text" id="originFarmLatitude" name="originFarmLatitude" value="-38.239770"><br>
            Farm Longitude
            <br>
            <input type="text" id="originFarmLongitude" name="originFarmLongitude" value="144.341490"><br>
            Product Notes
            <br>
            <input type="text" id="productNotes" name="productNotes" value="Best beans for Espresso" size="60"><br>
            <br>
            <button class="btn-harvest" id="button" type="button" data-id="1">Harvest</button>
        `)
        $('#harvestTab').addClass('active')
        $('#harvestTab').siblings('span').removeClass('active');
    });

    $('#processTab').click(() => {
        $("#farmerInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-process" id="button" type="button" data-id="2">Process</button>
        `)
        $('#processTab').addClass('active')
        $('#processTab').siblings('span').removeClass('active');
    });

    $('#packTab').click(() => {
        $("#farmerInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-pack" id="button" type="button" data-id="3">Pack</button>
        `)
        $('#packTab').addClass('active')
        $('#packTab').siblings('span').removeClass('active');
    });

    $('#sellTab').click(() => {
        $("#farmerInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        Price
        <br>
        <input type="number" id="farmersPrice" name="farmersPrice"><br>
        <button class="btn-forsale" id="button" type="button" data-id="4">Sell</button>
        `)
        $('#sellTab').addClass('active')
        $('#sellTab').siblings('span').removeClass('active');
    });

    $('#settingsTab').click(() => {
        $("#farmerInput").html(`
        New Farmer's address
        <br>
        <input type="text" id="newFarmerId" name="newFarmerId"><br>
        <button class="btn-add" id="button" type="button" data-id="11">Add Farmer</button>
        `)
        $('#settingsTab').addClass('active')
        $('#settingsTab').siblings('span').removeClass('active');
    });
}

const distributorDOM = () => {
    $('#distributor').html(`
        <h2>Distributor</h2>
        <div class="top-nav">
            <span id="buyTab" class="active">Buy</span>
            <span id="shipTab">Ship</span>
            <span id="settingsTab" class="material-icons">settings</span>
        </div>
        <div id="distributorInput" class="form-group">
            <span>Fetch data before buying so it updates the price</span><br><br>
            UPC
            <br>
            <input type="number" id="upc" name="upc"><br>
            <button class="btn-buy" id="button" type="button" data-id="5">Buy</button>
            <button class="btn-fetchTwo" id="button" type="button" data-id="10">Fetch Data 2</button>
        </div>
    `)

    $('#shipTab').click(() => {
        $("#distributorInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-ship" id="button" type="button" data-id="6">Ship</button>
        `)
        $('#shipTab').addClass('active')
        $('#shipTab').siblings('span').removeClass('active');
    });
    $('#buyTab').click(() => {
        $("#distributorInput").html(`
        <span>Fetch data before buying so it updates the price</span><br><br>
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-buy" id="button" type="button" data-id="5">Buy</button>
        <button class="btn-fetchTwo" id="button" type="button" data-id="10">Fetch Data 2</button>
        `)
        $('#buyTab').addClass('active')
        $('#buyTab').siblings('span').removeClass('active');
    });
    $('#settingsTab').click(() => {
        $("#distributorInput").html(`
        New distributor's address
        <br>
        <input type="text" id="newDistributorId" name="newDistributorId"><br>
        <button class="btn-add" id="button" type="button" data-id="12">Add Distributor</button>
        `)
        $('#settingsTab').addClass('active')
        $('#settingsTab').siblings('span').removeClass('active');
    });
}

const retailerDOM = () => {
    $('#retailer').html(`
        <h2>Retailer</h2>
        <div class="top-nav">
            <span id="receiveTab" class="active">Receive</span>
            <span id="settingsTab" class="material-icons">settings</span>
        </div>
        <div id="retailerInput" class="form-group">
            UPC
            <br>
            <input type="number" id="upc" name="upc"><br>
            <button class="btn-receive" id="button" type="button" data-id="7">Receive</button>
        </div>
    `)

    $('#receiveTab').click(() => {
        $("#retailerInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-receive" id="button" type="button" data-id="7">Receive</button>
        `)
        $('#receiveTab').addClass('active')
        $('#receiveTab').siblings('span').removeClass('active');
    });
    $('#settingsTab').click(() => {
        $("#retailerInput").html(`
        New receiver's address
        <br>
        <input type="text" id="newRetailerId" name="newRetailerId"><br>
        <button class="btn-add" id="button" type="button" data-id="13">Add Retailer</button>
        `)
        $('#settingsTab').addClass('active')
        $('#settingsTab').siblings('span').removeClass('active');
    });
}

const consumerDOM = () => {
    $('#consumer').html(`
        <h2>Consumer</h2>
        <div class="top-nav">
            <span id="consumerTab" class="active">Purchase</span>
            <span id="settingsTab" class="material-icons">settings</span>
        </div>
        <div id="consumerInput" class="form-group">
            UPC
            <br>
            <input type="number" id="upc" name="upc"><br>
            <button class="btn-purchase" id="button" type="button" data-id="8">Purchase</button>
        </div>
    `)

    $('#consumerTab').click(() => {
        $("#consumerInput").html(`
        UPC
        <br>
        <input type="number" id="upc" name="upc"><br>
        <button class="btn-purchase" id="button" type="button" data-id="8">Purchase</button>
        `)
        $('#consumerTab').addClass('active')
        $('#consumerTab').siblings('span').removeClass('active');
    });
    $('#settingsTab').click(() => {
        $("#consumerInput").html(`
        New consumer's address
        <br>
        <input type="text" id="newConsumerId" name="newConsumerId"><br>
        <button class="btn-add" id="button" type="button" data-id="14">Add Consumer</button>
        `)
        $('#settingsTab').addClass('active')
        $('#settingsTab').siblings('span').removeClass('active');
    });
}

$("#overview-main-tab").click((e) => {
    // e.preventDefault();
    $("#overview").html(`
    <h2>Product Overview</h2>
    <div class="form-group">
        UPC
        <br>
        <input type="number" id="upc" name="upc" value=1><br>
        <div class=button-div>
            <button class="btn-fetchOne" id="button" type="button" data-id="9">Fetch Data 1</button>
            <button class="btn-fetchTwo" id="button" type="button" data-id="10">Fetch Data 2</button>
        </div>
    </div>
    `)
    $('#overview-main-tab').addClass('active')
    $('#overview-main-tab').siblings('span').removeClass('active');
    farmerDOM();
});
$("#farmer-main-tab").click(e => {
    if($("#farmer-main-tab").hasClass('disabled')) {
        alert('You are not a Farmer');
    }else {
        $("#overview").html(`
        <div id="farmer"></div> 
        `)
        $('#farmer-main-tab').addClass('active')
        $('#farmer-main-tab').siblings('span').removeClass('active');
        farmerDOM();
    }
});
$("#distributor-main-tab").click(e => {
    if($("#distributor-main-tab").hasClass('disabled')) {
        alert('You are not a Distributor');
    }else{
        $("#overview").html(`
        <div id="distributor"></div> 
        `)
        $('#distributor-main-tab').addClass('active')
        $('#distributor-main-tab').siblings('span').removeClass('active');
        distributorDOM();
    }
})
$("#retailer-main-tab").click(e => {
    if($("#retailer-main-tab").hasClass('disabled')) {
        alert('You are not a Retailer');
    }else{
        $("#overview").html(`
        <div id="retailer"></div> 
        `)
        $('#retailer-main-tab').addClass('active')
        $('#retailer-main-tab').siblings('span').removeClass('active');
        retailerDOM();
    }
})

$("#consumer-main-tab").click(e => {
    if($("#consumer-main-tab").hasClass('disabled')) {
        alert('You are not a Consumer');
    }else{
        $("#overview").html(`
        <div id="consumer"></div> 
        `)
        $('#consumer-main-tab').addClass('active')
        $('#consumer-main-tab').siblings('span').removeClass('active');
        consumerDOM();
    }
})

const fetchDataOne = (data) => {
    let sku = data[0].toString(); 
    let upc = data[1].toString();
    let ownerID = data[2];
    let originFarmerID = data[3];
    let originFarmName = data[4];
    let originFarmInformation = data[5];
    let originFarmLatitude = data[6];
    let originFarmLongitude = data[7];

    $('#data-html').html(`<div>
        <h5>Fetched Data 1:</h5>
        <ul>
            <li>SKU: ${sku}</li>
            <li>UPC: ${upc}</li>
            <li>Current Owner: ${ownerID}</li>
            <li>Farmer: ${originFarmerID}</li>
            <li>Farm Name: ${originFarmName}</li>
            <li>Info: ${originFarmInformation}</li>
            <li>Farm Latitude: ${originFarmLatitude}</li>
            <li>Farm Longitude: ${originFarmLongitude}</li>
        </ul>
    </div>`);
}

const fetchDataTwo = (data) => {
    let sku = data[0].toString(); 
    let upc = data[1].toString();
    let productID = data[2].toString();
    let productNotes = data[3];
    let productPrice = web3.fromWei(data[4].toString(), 'ether');
    let itemState = productState[data[5].toNumber()];
    let distributorID = data[6]
    let retailerID = data[7];
    let consumerID = data[8];

    $('#data-html').html(`<div>
        <h5>Fetched Data 2:</h5>
        <ul>
            <li>SKU: ${sku}</li>
            <li>UPC: ${upc}</li>
            <li>Product ID: ${productID}</li>
            <li>Notes: ${productNotes}</li>
            <li>Price: ${productPrice} ETH</li>
            <li>State: ${itemState}</li>
            <li>Distributor: ${distributorID}</li>
            <li>Retailer: ${retailerID}</li>
            <li>Consumer: ${consumerID}</li>
        </ul>
    </div>`);
 }