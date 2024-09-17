import React from 'react';
import { Handle } from 'reactflow';

const NodeBase = ({ id, title, children, handles }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md w-52">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="mb-2">{children}</div>
      {handles.map(handle => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          className="handle"
        />
      ))}
    </div>
  );
};

export default NodeBase;
