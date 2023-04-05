import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import TabContext from "./TabContext";

function StudyCreation() {
  const [sponsorField, setSponsorField] = useState("");
  const [formFields, setFormFields] = useState([{ study: "" }]);
  const ctx = useContext(TabContext);

  const handleSponsorChange = (event) => {
    setSponsorField(event.target.value);
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    console.log(formFields);
  };

  const submit = () => {
    console.log("sponsor:" + sponsorField, formFields);
  };

  const addStudyHandler = () => {
    let object = {
      study: "",
    };
    setFormFields([...formFields, object]);
  };

  const removeStudyHandler = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
    console.log(index);
    console.log(data);
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col className="col-xs-12 col-sm-12 col-lg-12">
          <p>SystemCreation</p>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3 w-25">
              <Form.Label>Sponsor</Form.Label>

              <Form.Control
                placeholder="Sponsor"
                name="sponsor"
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
            {formFields.map((form, index) => {
              return (
                <div key={index} className="d-block">
                  <Form.Group className="mb-3 w-25 d-inline-block">
                    <Form.Label>Study</Form.Label>
                    <Form.Control
                      type="text"
                      name="study"
                      placeholder="Study"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.study}
                    />
                  </Form.Group>
                  {index === 0 ? (
                    ""
                  ) : (
                    <Button
                      variant="secondary"
                      className="d-inline-block ms-2 mb-1"
                      onClick={() => removeStudyHandler(index)}
                    >
                      remove
                    </Button>
                  )}
                </div>
              );
            })}

            <Button
              variant="primary"
              className="d-block mb-1"
              onClick={addStudyHandler}
            >
              +Add
            </Button>
          </Form>

          <Button
            variant="primary"
            className="float-end mb-1"
            onClick={() => {
              submit();
              ctx.eventKeyStudyTab();
            }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default StudyCreation;
