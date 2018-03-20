var products = ["Cursor", "Grandma", "Farm", "Mine", "Factory", "Bank", "Temple", "Shipment", "Alchemy Lab", "Portal", "Time Machine", "Antimater Condenser", "Prism", "Chancemaker"];
var ratios = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];


/**
*   Get the current game's products cost of Cookies Per Second
*/
function get_price_ratios(){

    update_products();  

    console.clear();
	
    for (var i=0; i<14; i++){
      console.log( products[i] + ": %s", ratios[i] );
    }
}


/**
*   Find the lowest/ best CPS product
*/
function lowest_cps_product(){

    update_products();

    console.clear();

    get_price_ratios();

    var lowest = Math.min.apply( Math, ratios );

    var lowest_id = ratios.indexOf(lowest);
    
    return products[lowest_id];
}



/**
*   Get most up to date game ratio data
*/
function update_products(){

	for (var i=0; i<14; i++){
	
		var price = Game.ObjectsById[i].price;
		var rate = Game.ObjectsById[i].storedCps;
		
		ratios[i] = price / rate;
	}
}

