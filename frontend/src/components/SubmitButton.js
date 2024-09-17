import React from 'react';
import { useStore } from '../hooks/useStore';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(state => ({
    nodes: state.nodes,
    edges: state.edges
  }));
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes, 
          edges  
        }),
      });
      const result = await response.json();
      alert(`Nodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
    }
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Submit
      </button>

    </div>
  );
};
