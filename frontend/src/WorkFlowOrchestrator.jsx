import { useCallback, useState } from "react";
import CustomNode from "./CustomNode";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "./Sidebar";

const nodeTypes = {
  custom: CustomNode,
};


const initialNodes = [
  { id: "1", type: "input", data: { label: "Início" }, position: { x: 250, y: 5 } },
  { id: "2", data: { label: "Tarefa" }, position: { x: 100, y: 100 } },
  { id: "3", type: "output", data: { label: "Fim" }, position: { x: 250, y: 200 } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function WorkflowOrchestrator() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = { x: event.clientX, y: event.clientY };
      const newNode = {
        id: `${nodes.length + 1}`,
        type: "custom",
        position,
        data: { label: "Novo Nó" },
      };      

      setNodes((nds) => [...nds, newNode]);
    },
    [nodes, setNodes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const saveWorkflow = async () => {
    const workflowData = { nodes, edges };
  
    try {
      const response = await fetch("http://localhost:5000/save-workflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workflowData),
      });
  
      if (response.ok) {
        alert("Workflow salvo com sucesso!");
      } else {
        alert("Erro ao salvar workflow.");
      }
    } catch (error) {
      console.error("Erro ao salvar workflow:", error);
    }
  };
  

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }} onDrop={onDrop} onDragOver={onDragOver}>
      <button onClick={saveWorkflow} style={{ padding: 10, margin: 10, background: "green", color: "white", border: "none", cursor: "pointer" }}>
        Salvar Workflow
      </button>  
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
