import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import Rightbar from "./components/rightbar/Rightbar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
function App() {
  const Layout =()=>{
    return (
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
