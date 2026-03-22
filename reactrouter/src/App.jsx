import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {Home} from './pages/Home'
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Movie } from './pages/Movie';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import {getAPIData} from './Api/GetApiData'
const App = () => {
  //Step1 - Create Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      //errorElement is used to show a fallback UI when something goes wrong in a route
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getAPIData
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ]);
  return <RouterProvider router={router}/>
}

//Old Method
// const App = () => {
//   //Step1 - Create Router
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//         <Route path='/' element={<Home />}/>
//         <Route path='/About' element={<About />} />
//       </Route>
//     )
//   )
//   return <RouterProvider router={router}/>
// }
export default App;