/* main component */
import React from 'react';

import Header from './components/Header'
import Routes from './routes'

// renders the component
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
