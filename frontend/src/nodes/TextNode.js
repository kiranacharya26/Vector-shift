import { useState, useEffect } from 'react';
import NodeBase from './NodeBase';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);

  useEffect(() => {
    const matches = currText.match(/\{\{(.*?)\}\}/g) || [];
    setHandles(
      matches.map((match, index) => ({
        type: 'source',
        position: Position.Right,
        id: `${id}-handle-${index}`,
        style: { top: `${index * 50}px` }
      }))
    );
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  return (
    <NodeBase
      id={id}
      title="Text"
      handles={handles}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-purple-600 mb-4">Text Node</h3>
        <label className="block mb-3">
          <span className="block text-sm font-medium text-gray-700 mb-1">Text:</span>
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
    </NodeBase>
  );
};
