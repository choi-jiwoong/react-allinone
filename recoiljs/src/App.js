import './App.css';
import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/Text';
import CharacterCounter from './components/RecoilExample/CharacterCounter';
import TodoList from './components/RecoilExample/Todo/TodoList';
import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>RecoilJS</h1>
        {/* <FontButton />
        <Text />
        <CharacterCounter />
        <TodoList /> */}
        <CurrentUserInfo />
      </RecoilRoot>
    </div>
  );
}

export default App;
