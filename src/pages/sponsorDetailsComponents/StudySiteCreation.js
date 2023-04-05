import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function StudySiteCreation() {
  const [sponsorField, setSponsorField] = useState("");
  const [studyField, setStudyField] = useState("");
  const [countryField, setCountryField] = useState("");
  const [studySite, setStudySite] = useState([{ studysite: "" }]);

  const handleSponsorChange = (event) => {
    setSponsorField(event.target.value);
  };

  const handleStudyChange = (event) => {
    setStudyField(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountryField(event.target.value);
  };

  const handleStudySiteChange = (event, index) => {
    let data = [...studySite];
    data[index][event.target.name] = event.target.value;
    setStudySite(data);
    console.log(studySite);
  };

  const submit = () => {
    console.log(
      "sponsor:" + sponsorField,
      "study:" + studyField,
      "country:" + countryField,
      studySite
    );
  };

  const addStudySiteHandler = () => {
    let object = {
      studysite: "",
    };
    setStudySite([...studySite, object]);
  };

  const removeStudySiteHandler = (index) => {
    let data = [...studySite];
    data.splice(index, 1);
    setStudySite(data);
    console.log(index);
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col className="col-xs-12 col-sm-12 col-lg-12">
          <p>StudySiteCreation</p>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3 w-25 d-inline-block">
              <Form.Label>Sponsor</Form.Label>

              <Form.Control
                placeholder="Sponsor"
                as="select"
                onChange={(event) => handleSponsorChange(event)}
                value={sponsorField}
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

            <Form.Group className="mb-3 ms-4 w-25 d-inline-block">
              <Form.Label>Study</Form.Label>

              <Form.Control
                placeholder="Study"
                as="select"
                onChange={(event) => handleStudyChange(event)}
                value={studyField}
              >
                <option value="">--Select--</option>
                <option value="CV100">CV100</option>
                <option value="MSDNVB220">MSDNVB220</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 ms-4 w-25 d-inline-block">
              <Form.Label>Country</Form.Label>

              <Form.Control
                placeholder="Country"
                as="select"
                onChange={(event) => handleCountryChange(event)}
                value={countryField}
              >
                <option value="">--Select--</option>
                <option value="AU">Australia</option>
                <option value="CA">Canada</option>
                <option value="CN">China</option>
                <option value="IN">India</option>
                <option value="NZ">New Zealand</option>
                <option value="USA">United States of America</option>
                <option value="UY">Uruguay</option>
              </Form.Control>
            </Form.Group>
            {studySite.map((form, index) => {
              return (
                <div key={index} className="d-block">
                  <Form.Group className="mb-3 w-25 d-inline-block">
                    <Form.Label>Study Site</Form.Label>
                    <Form.Control
                      type="text"
                      name="studysite"
                      placeholder="Study Site"
                      onChange={(event) => handleStudySiteChange(event, index)}
                      value={form.studysite}
                    />
                  </Form.Group>
                  {index === 0 ? (
                    ""
                  ) : (
                    <Button
                      variant="secondary"
                      className="d-inline-block ms-2 mb-1"
                      onClick={() => removeStudySiteHandler(index)}
                    >
                      remove
                    </Button>
                  )}
                </div>
              );
            })}
            <Button
              variant="primary"
              className="d-inline-block mb-1"
              onClick={addStudySiteHandler}
            >
              +Add
            </Button>
          </Form>
          <Button variant="primary" className="float-end mb-1" onClick={submit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default StudySiteCreation;
