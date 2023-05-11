import './App.css';
import EmotionCompositionExample from './components/EmotionCompositionExample';
import EmotionExample from './components/EmotionExample';
import EmotionMediaExample from './components/EmotionMediaExample';
import EmotionInstallExample from './components/EmotionPropExample';

function App() {
  return (
    <div className="App">
      <EmotionExample />
      <EmotionInstallExample />
      <EmotionCompositionExample />
      <EmotionMediaExample />
    </div>
  );
}

export default App;
