import React from 'react';
import HomePage from './page/HomePage';
import AppProvider from './context/AppContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContext } from './context/AppContext';

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
