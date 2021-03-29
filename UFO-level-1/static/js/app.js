// From data.js
var tableData = data;

// Console.log table data
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(sightings => {
    console.log(sightings);

    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);

      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    // Clears the initial build table
    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputDate = d3.select("#datetime");

    // Get the value property of the input date, state, shape
    var inputValue = inputDate.property("value");

    // Console.log input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Console.log filter values
    console.log(filteredData);

    
    filteredData.forEach(selections => {
    
    // Console.log selections
    console.log(selections);

    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
