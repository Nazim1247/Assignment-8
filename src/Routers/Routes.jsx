import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('../data.json'),
        },
        {
            path:"/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
      ],
    },
  ]);

  export default router