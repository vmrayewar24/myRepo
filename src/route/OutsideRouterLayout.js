import { Outlet,useSearchParams } from "react-router-dom";
import OutsideHeader from "../components/outside/OutsideHeader";
import OutsideFooter from "../components/outside/OutsideFooter";

function OutsideRouterLayout() {
  const [queryParameters] = useSearchParams();

  
  const sponsorName =   queryParameters.get("sponsorName");
  if(queryParameters.get("sponsorName") !== ""){
    import("../assets/css/"+sponsorName+"/global.css");
    console.log("sponsorName"+sponsorName);
  }else{
   // import("../../assets/css/"++"/global.css");
  }
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <OutsideHeader />
        <Outlet />
        <OutsideFooter />
      </div>
    </>
  );
}
export default OutsideRouterLayout;
