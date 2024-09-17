import React from 'react';
import { Handle } from 'reactflow';

const NodeBase = ({ id, title, children, handles }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md w-52 relative">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="mb-2">{children}</div>
      {handles.map(handle => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            ...handle.style,
            position: 'absolute',   // Ensure the handle is absolutely positioned within the node
            right: 0,               // Attach to the right side of the node
            background: '#555',     // Visible color for the handle
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: '2px solid #fff' // For better visibility
          }}
          className="handle"
        />
      ))}
    </div>
  );
};

export default NodeBase;
