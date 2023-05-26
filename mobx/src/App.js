import { observable } from 'mobx';
import './App.css';
import ModxExample from './components/ModxExample';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableTodoStore';

function App() {
  return (
    <div className="App">
      <ModxExample />
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
