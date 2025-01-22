import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./news.scss";
import { storyData } from "../../TestData/storyData";

function NewsItem({ show, onHide, item }) {
  if (!item) return null; // Ensure item exists before rendering

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <div className="d-md-flex">
            <div className="col-md-7">
              <img width="100%" src={item.photo} alt="News" />
            </div>
            <div className="col-md-5">
              <h3>{item.title}</h3>
              <small>{item.date}</small>
              <p>{item.Paragraph1}</p>
              <p>{item.Paragraph2}</p>
              <p>{item.Paragraph3}</p>
            </div>
          </div>
          <p>{item.others}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function News() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <>
      <div className=" ">
        {storyData.map((item) => (
          <div key={item.id} onClick={() => handleShowModal(item)} className="">
            <div>
              <img src={item.photo} width="100%" alt="News Thumbnail" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}

        <NewsItem
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={selectedItem}
        />
      </div>
    </>
  );
}

export default News;
