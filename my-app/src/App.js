import './App.css';
import Reducer from './components/3-3.Hook/Reducer';
import State from './components/3-3.Hook/State';
import ThankyouDialog from './components/3.6.Composition2/ThankyouDialog'

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <State /><br /> 
      <Reducer /><br /> 
      <ThankyouDialog /><br />
    </div>
  );
}

export default App;
