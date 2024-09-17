import { useState } from 'react';
import NodeBase from './NodeBase';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <NodeBase
      id={id}
      title="Input"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` }
      ]}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Input Node</h3>
        <label className="block mb-3">
          <span className="block text-sm font-medium text-gray-700 mb-1">Name:</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-gray-700 mb-1">Type:</span>
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </NodeBase>
  );
};
