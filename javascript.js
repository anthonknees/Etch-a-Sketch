const gridButton = document.querySelector(".btn")

gridButton.addEventListener("click", () => {
  let gridSizeArray = askGridSize();
  let numOfRows = gridSizeArray[0];
  let numOfColumns = gridSizeArray[1];
  createGrid(numOfRows, numOfColumns)
});

function createGrid(numOfRows, numOfColumns){
  let numOfElementsPerRow = numOfColumns;
  const container = document.querySelector("#container")
  alert(`Your grid will have ${numOfRows} row(s) and ${numOfColumns} column(s)!`)

  for (let i = 1; i <= numOfRows; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row)


    for (let j = 1; j <= numOfElementsPerRow; j++){
      const box = document.createElement("div");
      box.classList.add("box")
      // box.addEventListener("mouseover", () => {
      //   box.style.backgroundColor = "#FFD1DC";
      // })
      row.appendChild(box)
    }

  }
}

function askGridSize(){
  let gridRow = prompt("How many rows? (Integers only)")
  let gridColumn = prompt("How many columns? (Integers only)")
  return [gridRow, gridColumn];
}

