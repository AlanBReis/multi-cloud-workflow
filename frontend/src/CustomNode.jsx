import React, { useState } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data, id }) => {
  const [label, setLabel] = useState(data.label);

  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  return (
    <div style={{ padding: 10, border: "1px solid black", borderRadius: 5, background: "#fff" }}>
      <input
        type="text"
        value={label}
        onChange={handleChange}
        style={{ border: "none", fontSize: 14, textAlign: "center", width: "100%" }}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
