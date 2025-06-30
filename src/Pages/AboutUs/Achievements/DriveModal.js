import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DriveFolderSlider from "./DriveFolderSlider";
function DriveModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        More Pictures
      </button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <DriveFolderSlider
            folderUrl={props.folderUrl}
            apiKey="AIzaSyBtbX7uKEjf_l-U8TTCzC8lPSdcdnPgyc8"
          />
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DriveModal;
