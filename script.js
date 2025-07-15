const malla = {
  "Ciencias Naturales": {
    "Biología": ["Célula", "Genética", "Ecosistemas"],
    "Química": ["Átomos", "Reacciones", "pH"],
    "Física": ["Movimiento", "Energía", "Leyes de Newton"]
  }
};

function renderTree(data, container) {
  for (const key in data) {
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = key;
    container.appendChild(node);

    if (typeof data[key] === "object") {
      const subContainer = document.createElement("div");
      subContainer.style.display = "none";
      node.addEventListener("click", () => {
        subContainer.style.display = subContainer.style.display === "none" ? "block" : "none";
      });
      container.appendChild(subContainer);
      renderTree(data[key], subContainer);
    }
  }
}

renderTree(malla, document.getElementById("tree-container"));
