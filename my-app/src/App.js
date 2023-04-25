import './App.css';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import Composition from './components/2-4.Props/Composition';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponet from './components/2-6.LifeCycle/ClassComponet';

function App() {
  return (
    <div className="App">
      Composition: <Composition /><br/>
      Extraction : <Extraction /><br/>
      ClassComponet : <ClassComponet /><br/>
      FunctionalComponent : <FunctionalComponent />
    </div>
  );
}

export default App;
