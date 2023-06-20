import './App.css';
import Example from './components/ReactQueryExample/Example';
import { QueryClientProvider, QueryClient } from 'react-query'
import QuickStart from './components/ReactQueryExample/QuickStart';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
