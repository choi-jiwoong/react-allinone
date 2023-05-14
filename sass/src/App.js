import './App.css';
import FlowControlExample from './compoents/SassExample/FlowControlExample';
import InterpolationExample from './compoents/SassExample/InterpolationExample';
import FunctionExample from './compoents/SassExample/RuleExample';
import SassExample from './compoents/SassExample/SassExample';
import SassExtendExample from './compoents/SassExample/SassExtendExample';

function App() {
  return (
    <div className="App">
      <SassExample />
      <SassExtendExample />
      <FlowControlExample />
      <FunctionExample />
      <InterpolationExample />
    </div>
  );
}

export default App;
