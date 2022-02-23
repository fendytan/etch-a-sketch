const container_div = document.querySelector(".container");
const reset_button = document.getElementById("reset_button");

function createGrid(grid_size) {
  for (let c = 0; c < grid_size; c++) {
    const row_div = document.createElement("div");
    row_div.className = "row";

    for (let r = 0; r < grid_size; r++) {
      const cell_div = document.createElement("div");
      cell_div.className = "cell";
      cell_div.style.width = `${container_div.clientWidth / grid_size}px`;
      cell_div.style.height = `${container_div.clientWidth / grid_size}px`;

      console.log(cell_div.style.width);
      console.log(cell_div.style.height);
      cell_div.addEventListener("mouseenter", colorCell);

      row_div.appendChild(cell_div);
    }

    container_div.appendChild(row_div);
  }
}

function colorCell(event) {
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
  event.target.style.backgroundColor = `${randColor()}`;
}

function clearGrid() {
  let grid_size;

  while (true) {
    grid_size = parseInt(prompt("Please enter a grid size (0 - 100)", 16));

    if (grid_size == "" || grid_size < 0 || grid_size > 100 || !Number.isInteger(grid_size)) {
      alert("Enter a number between 0 and 100");
    } else break;
  }

  while (container_div.firstChild) {
    container_div.removeChild(container_div.firstChild);
  }

  createGrid(grid_size);
}

function main() {
  createGrid(16);

  reset_button.addEventListener("click", clearGrid);
}

main();
