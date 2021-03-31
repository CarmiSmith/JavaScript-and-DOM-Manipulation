// From data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Sighting values for each column
tableData.forEach(sightings => {

    // Append one table row for each sighting 
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {

      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    // Select the input  
    var inputElement = d3.select("#input");
    // Get the value property 
    var inputValue = inputElement.property("value");
 
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);

    // Start with clean table
    tbody.html("");

    // Filter values
    filteredData.forEach(selected => {

    // Append one table row for each sighting 
    var row = tbody.append("tr");
    Object.entries(selected).forEach(function([key, value]) {

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
document.getElementById("reset").onclick = function() {
  document.getElementById("#input").innerHTML = "";
};
});

