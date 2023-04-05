import "../../assets/css/outside/OutsideHeader.css";
import Card from "react-bootstrap/Card";

function OutsideHeader() {
  return (
    <Card className="rounded-0 border-top-0 border-bottom-0">
      <Card.Header className="bg-white border-0 p-3">
        <div>
          <div className="d-inline-block header-logo">
            <span className="d-block mb-0 headerFont">cognizant</span>
            <span className="headerFontLogo">clinical systems connector</span>
          </div>

          <div className="float-end d-inline-flex">
           
          </div>
        </div>
      </Card.Header>
    </Card>
  );
}

export default OutsideHeader;
