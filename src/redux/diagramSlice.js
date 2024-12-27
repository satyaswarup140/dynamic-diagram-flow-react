import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: [],
  edges: [],
};

const diagramSlice = createSlice({
  name: 'diagram',
  initialState,
  reducers: {
    setNodes(state, action) {
      state.nodes = action.payload;
    },
    setEdges(state, action) {
      state.edges = action.payload;
    },
  },
});

export const { setNodes, setEdges } = diagramSlice.actions;
export default diagramSlice.reducer;
