import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Country } from './pages/Country';
import { AppLayout } from './components/Layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { CountryDetails } from './components/Layout/CountryDetails';
//router is an object that controls how your app navigates between different pages (routes).router is an object that controls how your app navigates between different pages (routes). createBrowserRouter() creates a router instance
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/country',
        element: <Country />
      },
      {
        path: '/country/:id',
        element: <CountryDetails />
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;