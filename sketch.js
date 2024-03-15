let gridSize = 16;
const container = document.querySelector(".container");

for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const newSquare = document.createElement("div");
        newSquare.className = "grid-box";
        container.appendChild(newSquare);
    }
}