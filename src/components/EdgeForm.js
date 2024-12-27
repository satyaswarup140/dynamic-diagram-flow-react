import React, { useState } from 'react';

const EdgeForm = ({ nodes, onSubmit, onClose }) => {
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  const handleSubmit = () => {
    onSubmit({ source, target });
    onClose();
  };

  return (
    <div className="form">
      <h3>Add Edge</h3>
      <select onChange={(e) => setSource(e.target.value)} value={source}>
        <option value="">Select Source</option>
        {nodes.map((node) => (
          <option key={node.id} value={node.id}>{node.data.label}</option>
        ))}
      </select>
      <select onChange={(e) => setTarget(e.target.value)} value={target}>
        <option value="">Select Target</option>
        {nodes.map((node) => (
          <option key={node.id} value={node.id}>{node.data.label}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EdgeForm;
