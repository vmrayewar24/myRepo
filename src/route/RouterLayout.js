import { Outlet,useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


function RouterLayout() {
  const [queryParameters] = useSearchParams();
  const sponsorName =   queryParameters.get("sponsorName");
  if(sponsorName !== "" && sponsorName !==null){
    import("../assets/css/"+sponsorName+"/global.css");
    console.log("sponsorName"+sponsorName);
  }else{
   // import("../../assets/css/"++"/global.css");
  }
  
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default RouterLayout;
