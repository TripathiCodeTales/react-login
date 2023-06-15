import React from 'react';
import App from './App';
import Dashboard from './Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loginContext } from './context/loginContext';

function Index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/Dashboard',
      element: <Dashboard />,
    },
  ]);
  return (
    <loginContext.Provider
      value={{ firstName, lastName, setFirstname, setLastname }}
    >
      <RouterProvider router={router} />
    </loginContext.Provider>
  );
}
export default Index;
