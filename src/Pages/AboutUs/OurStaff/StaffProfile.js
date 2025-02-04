import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { staffData } from "../../../TestData/staffData";

function Profile({ show, onHide, item }) {
  if (!item) return null; // Ensure item exists before rendering

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <div className="">
            <div className="col-md-12">
              <img width="100%" src={item.photo} alt="News" />
            </div>
            <div className="col-md-12" style={{ paddingLeft: "20px" }}>
              <h5>{item.name}</h5>
              <p>
                <em>{item.portfolio}</em>
              </p>
              <p>{item.qualification}</p>
              <p>{item.profile}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function StaffProfile() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <>
      {" "}
      <div className=" col-md-10 offset-md-1 row row-cols-2 row-cols-lg-4 g-2 g-lg-3  staff-profile">
        {" "}
        {staffData.map((item) => (
          <div key={item.id} onClick={() => handleShowModal(item)} className="">
            <div className="each-profile ">
              {" "}
              <div>
                <img src={item.photo} width="100%" alt="News Thumbnail" />
              </div>
              <h6>{item.name}</h6>
              <p>
                <em>{item.portfolio}</em>
              </p>
            </div>
          </div>
        ))}
        <Profile
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={selectedItem}
        />
      </div>
    </>
  );
}

export default StaffProfile;
