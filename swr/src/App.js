import './App.css';
import Page from './components/SWRExample/Profile';
import Cache from './components/SWRExample/Cache';
import Fatcher from './components/SWRExample/Fatcher';

function App() {
  return (
    <div className="App">
      <Page />
      <Cache />
      <Fatcher />
    </div>
  );
}

export default App;
