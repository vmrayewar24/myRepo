import { Modal, Button,Form } from "react-bootstrap";

const CommonModal = ({ children, isPopupShow, onClosePopupHandler,modalTitle,onSubmitFormData }) => {
  return (
    <>
      <Modal
        show={isPopupShow}
        onHide={onClosePopupHandler}
        backdrop="static"
        keyboard={false}
      >
        <Form method="post">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClosePopupHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmitFormData}>Submit</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CommonModal;
