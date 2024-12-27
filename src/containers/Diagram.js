import React, { useState } from 'react';
import ReactFlow, { addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from '../components/Sidebar';
import NodeForm from '../components/NodeForm';
import EdgeForm from '../components/EdgeForm';

const Diagram = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [showNodeForm, setShowNodeForm] = useState(false);
  const [showEdgeForm, setShowEdgeForm] = useState(false);

  const handleAddNode = (nodeData) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: nodeData.label },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const handleAddEdge = (edgeData) => {
    const newEdge = { id: `${edges.length + 1}`, source: edgeData.source, target: edgeData.target };
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  return (
    <div className="diagram-container">
      <Sidebar addNode={(node) => handleAddNode(node)} addEdge={(edge) => handleAddEdge(edge)} />
      <ReactFlow nodes={nodes} edges={edges} onEdgesChange={setEdges} onNodesChange={setNodes} />
      {showNodeForm && (
        <NodeForm onSubmit={handleAddNode} onClose={() => setShowNodeForm(false)} />
      )}
      {showEdgeForm && (
        <EdgeForm nodes={nodes} onSubmit={handleAddEdge} onClose={() => setShowEdgeForm(false)} />
      )}
    </div>
  );
};

export default Diagram;
