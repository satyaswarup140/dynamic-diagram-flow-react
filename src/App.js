import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Diagram from './containers/Diagram';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addNode = (node) => setNodes((nds) => [...nds, node]);
  const addEdge = (edge) => setEdges((eds) => [...eds, edge]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="app">
      <Sidebar addNode={addNode} addEdge={addEdge} />
      <Diagram nodes={nodes} edges={edges} />
      
      {/* Button to open modal */}
      <button onClick={openModal}>Open Modal</button>

      {/* Modal with createPortal */}
      {isModalOpen && createPortal(
        <div className="modal">
          <h2>Modal Title</h2>
          <p>This is a modal content!</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>,
        document.getElementById('portal-root') // This element must exist in your index.html
      )}
    </div>
  );
};

export default App;
