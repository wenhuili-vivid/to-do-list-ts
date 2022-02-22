import React from 'react';
import AddButton from './components/AddButton';

function App() {
  function getAddHandler() {

  }

  return (
      <AddButton onClick={getAddHandler} primary={true} disabled={false}>+ Create</AddButton>
  );
}

export default App;
