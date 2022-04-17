import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { RouterApp } from './router/RouterApp';

function App () {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterApp />
      <Outlet />
    </div>
  );
}

export default App;
