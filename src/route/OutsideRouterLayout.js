import { Outlet,useSearchParams } from "react-router-dom";
import OutsideHeader from "../components/outside/OutsideHeader";
import OutsideFooter from "../components/outside/OutsideFooter";

function OutsideRouterLayout() {
  const [queryParameters] = useSearchParams();

  const domain_name = (window.location.hostname).split(".");
  console.log("domainName"+domain_name[1]);

  if(domain_name[1] === "d2upf40kbkwtih"){
    import("../assets/css/franklin/global.css");
  }else if(domain_name[1] === "d5yzr7gpb7ut9"){
    import("../assets/css/currie/global.css");
  }else{
    // import("../../assets/css/"++"/global.css");
  }
  
  // const sponsorName =   queryParameters.get("sponsorName");
  // if(queryParameters.get("sponsorName") !== ""){
  //   import("../assets/css/"+sponsorName+"/global.css");
  //   console.log("sponsorName"+sponsorName);
  // }else{
  //  // import("../../assets/css/"++"/global.css");
  // }
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
