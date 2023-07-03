import './App.css';
import Example from './components/ReactQueryExample/Example';
import { QueryClientProvider, QueryClient } from 'react-query'
import QuickStart from './components/ReactQueryExample/QuickStart';
import { ReactQueryDevtools } from 'react-query/devtools'
import Pagination from './components/ReactQueryExample/Pagination';
import InfiniteScroll from './components/ReactQueryExample/InfiniteScroll';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        <ReactQueryDevtools initialIsOpen={false} />
        <Pagination />
        {/* <InfiniteScroll /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
