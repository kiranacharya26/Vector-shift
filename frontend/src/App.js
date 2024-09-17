// /frontend/src/App.js

import { PipelineToolbar } from './components/PipelineToolbar';
import { PipelineUI } from './components/PipelineUI';
import { SubmitButton } from './components/SubmitButton';



function App() {
  return (
    <div className="font-sans">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton/>
    </div>
  );
}

export default App;
