import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './Components/login'; 
import Sidebar from './Components/Sidebar';
import SignUp from './Components/SignUp' ;
import IstSemester from './Components/SoftwareEngineering/IstSemester'
import ResourcesShare from './Components/ShareResources/ResourcesShare';
import SecSemeter from './Components/SoftwareEngineering/secSemeter';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/sidebar",
      element: <Sidebar />
    },
    {
      path: "/IstSemester",
      element: <IstSemester />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/ResourcesShare",
      element: <ResourcesShare />
    },
    {
      path: "/secSemester",
      element: < SecSemeter />
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
