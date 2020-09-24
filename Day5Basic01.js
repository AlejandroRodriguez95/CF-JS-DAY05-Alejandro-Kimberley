var sandwichesObjects = JSON.parse(sandwiches);
var friesObjects = JSON.parse(fries);

var word = sandwichesObjects["sandwich"].charAt(0).toUpperCase() + sandwichesObjects["sandwich"].slice(1);
sandwichesObjects["sandwich"]= word;

document.getElementById("result").innerHTML = ` My favorite sandwich is a
${sandwichesObjects["sandwich"]} which has approximately ${sandwichesObjects["calories"]} calories, along with it I enjoy eating
${friesObjects["fries_size"]} which have about ${friesObjects["calories"]} calories.`