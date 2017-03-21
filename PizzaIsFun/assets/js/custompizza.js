function startReceipt() {
	var text1 = "<h1>Your Order:</h1>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	 	var sauceArray = document.getElementsByClassName("sauce");
	for (var k = 0; k < sauceArray.length; k++) {
		if (sauceArray[k].checked) {
			var selectedSauce = sauceArray[k].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}

	runningTotal = runningTotal + sauceTotal;
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal, text1) {
	var cheeseTotal = 0
	var selectedCheese = 0
	var cheeseArray = document.getElementsByClassName("cheese")
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			var selectedCheese = cheeseArray[c].value;
			text1 = text1 + cheeseArray[c].value+"<br>";
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else if (selectedCheese === "Sans Cheese") {
		cheeseTotal = 0;
	}

	runningTotal = runningTotal + cheeseTotal;
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1);
}

function getCrust(runningTotal, text1) {
	var crustTotal = 0
	var selectedCrust = 0
	var crustArray = document.getElementsByClassName("crust")
	for (var b = 0; b < crustArray.length; b++) {
		if (crustArray[b].checked) {
			var selectedCrust = crustArray[b].value;
			text1 = text1 + crustArray[b].value+"<br>";
		}
	}
	if (selectedCrust === "Plain") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy") {
	crustTotal = 0;
	} else if (selectedCrust === "House Special") {
	crustTotal = 0;
	}

	runningTotal = runningTotal + crustTotal;
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1);
}

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getVeggies(runningTotal,text1);
};		

function getVeggies(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);
			console.log("selected veggies: ("+veggieArray[v].value+")");
			text1 = text1+veggieArray[v].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("YourOrder").innerHTML=text1;
	document.getElementById("OrderTotal").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	

