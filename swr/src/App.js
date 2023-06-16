import './App.css';
import Page from './components/SWRExample/Profile';
import Cache from './components/SWRExample/Cache';
//import Fatcher from './components/SWRExample/Fatcher';
import Mutate from './components/SWRExample/Mutate';
import Pagination from './components/SWRExample/Pagination';

function App() {
  return (
    <div className="App">
      <Page />
      <Cache />
      {/* <Fatcher /> */}
      <Mutate />
      <Pagination />
    </div>
  );
}

export default App;
