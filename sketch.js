function makeGrids(size) {
    let screen = document.createElement("div");
    screen.className = "sketch-screen";
    container.appendChild(screen);
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "2px solid black";
        column.appendChild(row);
      }
      screen.appendChild(column);
    }
    const squares =  document.querySelectorAll(".row");
    squares.forEach(element => {
      element.addEventListener('mouseover', () => {
      element.style.backgroundColor = "red";
      });
    });

    squares.forEach(element => {
      element.addEventListener('mouseout', () => {
      element.style.backgroundColor = 'white';
      });
    });
}

const container = document.querySelector(".container");
makeGrids(4);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', () => {
    const removed = document.querySelector(".sketch-screen");
    container.removeChild(removed);
    makeGrids(prompt("Grid Size"));
});