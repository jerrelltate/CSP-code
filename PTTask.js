var sales = (getColumn("Best Selling Video Games", "Sales"));
var mostsales = 0;
var x = 0;
var Title  = getColumn("Best Selling Video Games", "Title");
var gamenamenew = [];

//just add a varible to evrthing 
var lowSales = 	200000000;
onEvent("longbutton", "click", function( ) {
  setScreen("screen2");
});
onEvent("home", "click", function( ) {
  setScreen("screen1");
});
onEvent("next", "click", function( ) {
  setScreen("screen3");
});

myFunction();
mostNumber();
lowNumber();
filtersales();

function myFunction() {
 // for (var i = 0; i < Title.length ; i++) {
 //   x = x + 1;
  //}
 if (getText("puttexthere") == Title[i]) {
  setScreen("screen1");
  }

  setText("text_area2", getColumn("Best Selling Video Games", "Title"));
}


function mostNumber() {
  //it goes throw the whole list and keeps cheaking whick number is the biggest
  for (var i = 0; i < sales.length -1 ; i++) {
    if (sales[i] > mostsales) {
      mostsales = sales[i];
    }
  }
  console.log(mostsales);
  return mostsales;
}


function lowNumber() {
  //it lookes at the oen with the loest number 
  for (var i = 0; i < sales.length ; i++) {
    if (sales[i] < lowSales) {
      lowSales = sales[i];
    }
  }
  console.log(lowSales);
  return lowSales;
}

function filtersales() {
  for (var i = 0; i < sales.length -1 ; i++) {
    
  }
  console.log(sales);
  return mostsales;
}
