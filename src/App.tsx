import HomePage from './page/HomePage';
import AppProvider from './context/AppContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import "./sass/index.scss"

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <HomePage/>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
