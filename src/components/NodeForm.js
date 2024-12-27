import React, { useState } from 'react';

const NodeForm = ({ onSubmit, onClose }) => {
  const [label, setLabel] = useState('');

  const handleSubmit = () => {
    onSubmit({ label });
    onClose();
  };

  return (
    <div className="form">
      <h3>Add Node</h3>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Node Label"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default NodeForm;
