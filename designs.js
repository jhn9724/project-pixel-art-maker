let gridColor = document.getElementById("colorPicker");
let tableData = document.getElementsByTagName("td");
let gridHeight = document.querySelector("#inputHeight");
let gridWidth = document.querySelector("#inputWidth");

// makeGrid() function to create grids
function makeGrid() {
  let pixel = document.getElementById("pixelCanvas");

  //sets the value of the grid height and grid width
  let height = gridHeight.value;
  let width = gridWidth.value;

  //removes the grid if there's already a grid
  while (pixel.firstChild) {
    pixel.removeChild(pixel.firstChild);
  }

  //creates the grid by looping through the height and width values
  //adds a table row through each loop and then appends it to the pixel element
  for (y = 0; y < height; y++) {
    let pixel = document.getElementById("pixelCanvas");
    const tr = document.createElement("tr");
    pixel.append(tr);
    //adds a table data through each loop and then appends it to the tr element
    for (x = 0; x < width; x++) {
      tr.append(document.createElement("td"));
    }
  }
  //adds an event listener to change the color of a cell when clicked on
  for (const td of tableData) {
    td.addEventListener("click", function () {
      td.style.background = gridColor.value;
    });
  }
}

//when submit is clicked on the makeGrid function is called
let submit = document.getElementById("submit");
submit = submit.addEventListener("click", makeGrid);
