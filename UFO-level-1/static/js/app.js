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

    // Select the input date 
    var inputDate = d3.select("#datetime");
    // Get the value property
    var inputValue = inputDate.property("value");

    // Filtering Data 
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    // Clears the initial build table
    tbody.html("");

    // Rewrites the table with the filtered results
    filteredData.forEach(selected => {

    // Append one table row for each sighting object
    var row = tbody.append("tr");
    Object.entries(selected).forEach(function([key, value]) {

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
document.getElementById("reset").onclick = function() {
  document.getElementById("#filter-btn").innerHTML = "";
};
});

