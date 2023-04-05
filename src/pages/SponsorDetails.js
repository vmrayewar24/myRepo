import Breadcrum from "../components/Breadcrum";
import { React, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import SystemSelection from "./sponsorDetailsComponents/SystemSelection";
import StudyCreation from "./sponsorDetailsComponents/StudyCreation";
import StudySiteCreation from "./sponsorDetailsComponents/StudySiteCreation";
import TabContext from "./sponsorDetailsComponents/TabContext";

const SponsorDetails = () => {
  const [active, setActive] = useState("SystemSelection");

  const breadcrumMenu = {
    name: "Sponsor Details",
    link: "#",
  };

  const handleStudy = () => {
    setActive("StudyCreation");
  };

  const handleStudySite = () => {
    setActive("StudySiteCreation");
  };


  return (
    <TabContext.Provider
      value={{
        eventKeyTab: handleStudy,
        eventKeyStudyTab: handleStudySite,
      }}
    >
      <>
        <Breadcrum breadcrumMenu={breadcrumMenu} />
        <Container fluid className="mt-3">
          <Row>
            <Col className="col-xs-12 col-sm-12 col-lg-12">
              <p>Sponsor Details</p>
              <Tabs
                defaultActiveKey="SystemSelection"
                id="uncontrolled-tab-example"
                className="mb-3"
                activeKey={active}
                onSelect={(key) => setActive(key)}
              >
                <Tab eventKey="SystemSelection" title="System Selection">
                  <SystemSelection />
                </Tab>
                <Tab eventKey="StudyCreation" title="Study Creation" disabled>
                  <StudyCreation />
                </Tab>
                <Tab
                  eventKey="StudySiteCreation"
                  title="Study Site Creation"
                  disabled
                >
                  <StudySiteCreation/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </>
    </TabContext.Provider>
  );
};

export default SponsorDetails;
