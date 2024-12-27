import React, { useState } from 'react';

const Sidebar = ({ addNode, addEdge }) => {
  const [nodeLabel, setNodeLabel] = useState('');
  const [sourceNode, setSourceNode] = useState('');
  const [targetNode, setTargetNode] = useState('');

  const handleAddNode = () => {
    addNode({
      id: `${Math.random()}`,
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeLabel }
    });
    setNodeLabel('');
  };

  const handleAddEdge = () => {
    addEdge({
      id: `e${sourceNode}-${targetNode}`,
      source: sourceNode,
      target: targetNode,
      type: 'default'
    });
    setSourceNode('');
    setTargetNode('');
  };

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <div>
        <input
          type="text"
          placeholder="Node Label"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
        />
        <button onClick={handleAddNode}>Add Node</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Source Node ID"
          value={sourceNode}
          onChange={(e) => setSourceNode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Target Node ID"
          value={targetNode}
          onChange={(e) => setTargetNode(e.target.value)}
        />
        <button onClick={handleAddEdge}>Add Edge</button>
      </div>
    </div>
  );
};

export default Sidebar;
