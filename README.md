# Dynamic Diagram Flow

This project is a React application for creating and managing interactive diagram flows dynamically using the **React Flow** library. Users can add, edit, and delete nodes and edges through an intuitive user interface.

## Features

- **Dynamic Diagrams**: Render nodes and edges dynamically based on metadata.
- **Interactive UI**: Add, edit, and remove nodes and edges.
- **Responsive Design**: Works seamlessly across various screen sizes.
- **State Management**: Uses Redux for managing the diagram's state.
- **Sample Metadata**: A preconfigured JSON file (`sampleMetadata.json`) to demonstrate the diagram's structure.

---

## Project Repository

**GitHub Repo**: [dynamic-diagram-flow-react](https://github.com/satyaswarup140/dynamic-diagram-flow-react.git)

---

## Demo

A live demo of the application (if deployed) can be found here: **[Live Demo Link](#)**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satyaswarup140/dynamic-diagram-flow-react.git
   cd dynamic-diagram-flow-react
2. Install dependencies:
   npm install
3. Start the development server:
   npm start
4. Open the application in your browser at:
   http://localhost:3000

# File Structure
dynamic-diagram-flow/
├── public/
│   ├── index.html       # Main HTML file
│   ├── favicon.ico      # App Icon
├── src/
│   ├── components/
│   │   ├── Sidebar.js   # UI for adding nodes and edges
│   │   ├── NodeForm.js  # Form for creating a new node
│   │   ├── EdgeForm.js  # Form for creating a new edge
│   ├── containers/
│   │   ├── Diagram.js   # Main component for rendering the diagram
│   ├── data/
│   │   ├── sampleMetadata.json # Example nodes and edges data
│   ├── redux/
│   │   ├── store.js     # Redux store configuration
│   │   ├── diagramSlice.js # Reducers for managing diagram state
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   ├── App.css          # App-wide styling
│   ├── styles.css       # Additional component-specific styling
├── README.md            # Documentation
├── package.json         # Project metadata and dependencies

# Usage
Adding Nodes
1. Open the Sidebar and enter a label for the new node.
2. Click Add Node to create the node, which will appear in the diagram.
Adding Edges
1. Select the source and target node IDs from the dropdown menus in the Sidebar.
2. Click Add Edge to connect the nodes.

# Editing or Deleting Nodes/Edges
These features can be added based on user requirements in the future.

# Built With
. React - Frontend library
. React Flow - Interactive diagram library
. Redux - State management
. CSS - Styling

# Future Enhancements
. Implement editing and deleting functionality for nodes and edges.
. Add more customization options for node and edge properties.
. Support saving and loading diagram data from a database.

License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments

### Customization:
- Replace `Live Demo Link` and `LinkedIn` placeholder links with actual links if available.
- Add or remove features depending on the scope of your project.

Let me know if you need further refinements!
