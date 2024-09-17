import NodeBase from './NodeBase';
import {  Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  return (
    <NodeBase
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-600 mb-4">LLM Node</h3>
        <div>This is a LLM.</div>
      </div>
    </NodeBase>
  );
};
