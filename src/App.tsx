import './App.scss';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // HashRouter has been used because of GitHub Pages

import ProgressTracker from './pages/ProgressTracker';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<ProgressTracker />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
