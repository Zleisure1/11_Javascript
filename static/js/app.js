// from data.js
//var table
//Data = data;
var ufodata = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(weatherReport) {
   console.log(weatherReport);
 });


data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

//////////////////
 // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufodata);

  var filteredData = ufodata.filter(person => person.datetime > inputValue);

  console.log(filteredData);
});

 