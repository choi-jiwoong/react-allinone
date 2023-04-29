import './App.css';
import List from './components/2-9.List/List';
import ControlledConpomponent from './components/2.10.Form/ControlledConpomponent';
import UncontrolledConpomponent from './components/2.10.Form/UncontrolledConpomponent';
// import Extraction from './components/2-4.Props/Extraction/Extraction';
// import Composition from './components/2-4.Props/Composition';
// import FunctionalComponent from './components/2-5.State/FunctionalComponent';
// import ClassComponet from './components/2-6.LifeCycle/ClassComponet';
// import Event from './components/2-7.Event/Event';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <List /><br /> 
      <ControlledConpomponent /><br />
      <UncontrolledConpomponent /><br />
      {/* Composition: <Composition /><br/>
      Extraction : <Extraction /><br/>
      ClassComponet : <ClassComponet /><br/>
      FunctionalComponent : <FunctionalComponent /> */}
    </div>
  );
}

export default App;
