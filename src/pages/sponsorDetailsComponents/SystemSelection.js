import { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TabContext from "./TabContext";

function SystemSelection() {
  const [sponsorValue, setSponsorValue] = useState("");
  const [systemValue, setSystemValue] = useState("");
  const ctx = useContext(TabContext);

  const handleSponsorChange = (e) => {
    setSponsorValue(e.target.value);
    console.log(sponsorValue);
  };

  const handleSystemChange = (e) => {
    setSystemValue(e.target.value);
    console.log(systemValue);
  };

  const submit = () => {
    console.log("sponsor:" + sponsorValue, "system Name:" + systemValue);
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col className="col-xs-12 col-sm-12 col-lg-12">
          <p> SystemSelection</p>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3 w-25 d-inline-block">
              <Form.Label>Sponsor</Form.Label>

              <Form.Control
                placeholder="Sponsor"
                as="select"
                onChange={handleSponsorChange}
                value={sponsorValue}
              >
                <option value="">--Select--</option>
                <option value="BMS">BMS</option>
                <option value="Curie">Curie</option>
                <option value="Franklin">Franklin</option>
                <option value="Higgs">Higgs</option>
                <option value="Lilly">Lilly</option>
                <option value="Pfizer">Pfizer</option>
                <option value="Roche">Roche</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 w-25 ms-5 d-inline-block">
              <Form.Label>System Name</Form.Label>

              <Form.Control
                placeholder="System Name"
                as="select"
                onChange={handleSystemChange}
                value={systemValue}
              >
                <option value="">--Select--</option>
                <option value="SIP">SIP</option>
                <option value="Veeva eTMF">Veeve eTMF</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="primary"
            className="float-end mb-1"
            onClick={() => {
              submit();
              ctx.eventKeyTab();
            }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SystemSelection;
