import React from 'react';
import './index.css';
import { AppUI } from './AppUi';
import { TodoProvider } from '../TodoContext';

function App() {

  return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
      
  );
}

export default App;
