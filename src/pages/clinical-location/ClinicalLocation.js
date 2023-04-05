import {
  Row,
  Container,
  Col,
  Table,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import Breadcrum from "../../components/Breadcrum";
import CommonModal from "../../components/CommonModal";
import { useState } from "react";

const ClinicalLocation = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [deletePopupShow, setDeletePopupShow] = useState(false);
  const breadcrumMenu = {
    name: "Clinical Location",
    link: "#",
  };

  const [locationForm, setLocationForm] = useState([
    {
      sponsorName: "Currie",
      locationName: "",
      locationCode: "",
    },
  ]);

  const removeHandler = (index) => {
    let formData = [...locationForm];
    formData.splice(index, 1);
    setLocationForm(formData);
  };

  const openClinicalLocationHandler = () => {
    setPopupShow(true);
  };

  const closeClinicalLocationHandler = () => {
    setLocationForm([
      {
        sponsorName: "Currie",
        locationName: "",
        locationCode: "",
      },
    ]);
    setPopupShow(false);
  };

  const recordDeletePopupHandler = () => {
    setDeletePopupShow(true);
  };

  const recordDeleteClosePopupHandler = () => {
    setDeletePopupShow(false);
  };

  const submitFormDataHandler = () => {
    console.log(JSON.stringify(locationForm));
  };

  const addMoreClinicalLocation = () => {
    let obj = {
      sponsorName: "Currie",
      locationName: "",
      locationCode: "",
    };

    setLocationForm([...locationForm, obj]);
    console.log(JSON.stringify(locationForm));
  };

  const formChangeHandler = (event, index) => {
    let formData = [...locationForm];
    formData[index][event.target.name] = event.target.value;
    setLocationForm(formData);
  };

  const deleteModalBody = (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Ary you sure you want to delete this record ?</Form.Label>
      </Form.Group>
    </Form>
  );

  let addModalBody = (
    <>
      {locationForm.map((form, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#f2f8ff",
              padding: "1%",
              marginTop: "10px",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Clinical Location Name </Form.Label>
              <Form.Control
                type="text"
                name="locationName"
                value={form.locationName}
                placeholder="Clinical Location Name"
                onChange={(event) => formChangeHandler(event, index)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Clinical Location Code </Form.Label>
              <Form.Control
                type="text"
                name="locationCode"
                value={form.locationCode}
                placeholder="Clinical Location Code"
                onChange={(event) => formChangeHandler(event, index)}
              />
            </Form.Group>
            {index != 0 && (
              <a
                href="javascript:void(0)"
                onClick={() => removeHandler(index)}
                style={{ textAlign: "right" }}
              >
                Remove
              </a>
            )}
          </div>
        );
      })}
      <p onClick={addMoreClinicalLocation} style={{ cursor: "pointer" }}>
        +Add More
      </p>
    </>
  );

  return (
    <>
      <Breadcrum breadcrumMenu={breadcrumMenu} />

      <CommonModal
        isPopupShow={popupShow}
        onClosePopupHandler={closeClinicalLocationHandler}
        modalTitle={"Add Clinical Location"}
        onSubmitFormData={submitFormDataHandler}
      >
        {" "}
        {addModalBody}{" "}
      </CommonModal>

      <CommonModal
        isPopupShow={deletePopupShow}
        onClosePopupHandler={recordDeleteClosePopupHandler}
        modalTitle={""}
      >
        {" "}
        {deleteModalBody}{" "}
      </CommonModal>

      <Container fluid className="mt-3">
        <Row>
          <Col className="col-xs-12 col-sm-12 col-lg-12">
            <h3>Clinical Location</h3>
          </Col>
        </Row>
        <Row>
          <Col className="col-xs-12 col-sm-12 col-lg-12">
            <Button
              variant="primary"
              className="float-end d-inline-flex mr-3"
              onClick={openClinicalLocationHandler}
            >
              +Add
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="col-xs-12 col-sm-12 col-lg-12">
            <Table
              striped
              bordered
              hover
              className="connectionRequestTable mt-3"
            >
              <thead>
                <tr>
                  <th>ID#</th>
                  <th>Clinical Location Name </th>
                  <th>Clinical Location Code</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RFC76767</td>
                  <td>John Hopkins</td>
                  <td>JH-001</td>
                  <td>Active</td>
                  <td>
                    <Badge pill bg="primary" style={{ cursor: "pointer" }}>
                      {" "}
                      View
                    </Badge>{" "}
                    <Badge
                      pill
                      bg="danger"
                      style={{ cursor: "pointer" }}
                      onClick={recordDeletePopupHandler}
                    >
                      {" "}
                      Delete
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>UYC76767</td>
                  <td>Tx Cancer Research - Oncology </td>
                  <td>TX-001</td>
                  <td>Inactive</td>
                  <td>
                    <Badge pill bg="primary" style={{ cursor: "pointer" }}>
                      {" "}
                      View
                    </Badge>{" "}
                    <Badge
                      pill
                      bg="danger"
                      style={{ cursor: "pointer" }}
                      onClick={recordDeletePopupHandler}
                    >
                      {" "}
                      Delete
                    </Badge>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClinicalLocation;
