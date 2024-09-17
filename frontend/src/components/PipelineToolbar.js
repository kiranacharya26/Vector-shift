import { DraggableNode } from './DraggableNode';

export const PipelineToolbar = () => (
  <div className="p-4">
    <div className="flex gap-4 flex-wrap">
      <DraggableNode type='customInput' label='Input' />
      <DraggableNode type='llm' label='LLM' />
      <DraggableNode type='customOutput' label='Output' />
      <DraggableNode type='text' label='Text' />
    </div>
  </div>
);
