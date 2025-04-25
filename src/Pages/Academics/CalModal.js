import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Event from "../../components/Calendar/Calendar";
import CalenderImg from "../../assets/images/calender.png";

function CalModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={handleShow}
        className=" mt-5 cal-holder"
        style={{
          border: "solid 1px #e7e7e7",
          height: "380px",
          position: "relative",
        }}
      >
        <img src={CalenderImg} width="100%" />
        <div className="cal-overlay text-light">
          <center>
            <h4>Expand Calender</h4>
          </center>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="">
            <Event />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CalModal;
