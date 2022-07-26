import React from 'react';
import Search from './components/Search';
import initialDetails from './data/details';

function App() {
  return (
    <div className="min-vh-100">
    <Search details={initialDetails}/>
  </div>
  );
}

export default App;
