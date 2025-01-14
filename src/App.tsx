import { useRoutes } from 'react-router-dom';
import React from 'react';
import './App.css';
import routes from './routers/index.tsx';

function App() {
  const RouterPage = useRoutes(routes)
  return (
    <>
    {RouterPage}
  </>
  );
}

export default App;
