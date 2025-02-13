import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside style={{ width: 200, padding: 10, background: "#f4f4f4", borderRight: "1px solid #ddd" }}>
      <h4>Arraste para adicionar</h4>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "default")}
        style={{ padding: 10, margin: "10px 0", background: "#ddd", cursor: "grab" }}
      >
        Nó Padrão
      </div>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "input")}
        style={{ padding: 10, margin: "10px 0", background: "#bbb", cursor: "grab" }}
      >
        Nó de Entrada
      </div>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, "output")}
        style={{ padding: 10, margin: "10px 0", background: "#aaa", cursor: "grab" }}
      >
        Nó de Saída
      </div>
    </aside>
  );
};

export default Sidebar;
