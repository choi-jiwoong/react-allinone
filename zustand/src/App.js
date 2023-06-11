import './App.css';
import CharacterCounter from './components/EzustandExample/CharacterCounter';
import Text from './components/EzustandExample/Text';
import OverwritingText from './components/EzustandExample/OverwritingText';
import TodoList from './components/EzustandExample/Todo/TodoList';
import CurrentUserInfo from './components/EzustandExample/CurrentUserInfo';
import Scratches from './components/EzustandExample/Scratches';

function App() {
  return (
    <div className="App">
      <Text />
      <CharacterCounter />
      <OverwritingText />
      <br />
      <br />
      <br />

      <TodoList />
      <br />
      <br />
      <CurrentUserInfo />
      <br />
      <br />
      <Scratches />
      
    </div>
  );
}

export default App;
