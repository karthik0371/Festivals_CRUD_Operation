import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Add from './components/adduser/Add';
import Festivals from './components/getuser/User';
import Edit from './components/updateuser/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const route = createBrowserRouter([
    {
    path: "/add",
    element:<Add />
    },
    {
      path: "/",
      element:<Festivals/>
    },
    {
      path: "/edit/:id",
      element:<Edit/>
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;