import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./route/RouterLayout";
import OutsideRouterLayout from "./route/OutsideRouterLayout";
import Dashboard from "./pages/Dashboard";
import VendorSystemDetails from "./pages/VendorSystemDetails";
import SponsorDetails from "./pages/SponsorDetails";
import MappingDetails from "./pages/MappingDetails";
import SiteOrgDetails from "./pages/SiteOrgDetails";
import ClinicalLocation from "./pages/clinical-location/ClinicalLocation";
import Login from "./pages/outside/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <OutsideRouterLayout />,
    children:[
      {path: "/login", element:<Login />}
    ]
  },
  
  {
    path: "/",
    element: <RouterLayout />,
    children: [
     { path: "/dashboard", element: <Dashboard /> },
     { path: "/vendor-system-details", element: <VendorSystemDetails /> },
     { path: "/sponsor-details", element: <SponsorDetails /> },
     { path: "/site-org-details", element: <SiteOrgDetails /> },
     { path: "/mapping-details", element: <MappingDetails /> },
     { path: "/clinical-location", element: <ClinicalLocation /> },
    ],
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
