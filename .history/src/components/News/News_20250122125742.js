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
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-content">
          <div className="d-md-flex">
            <div className="col-md-6">
              <img width="100%" src={item.photo} alt="News" />
            </div>
            <div className="col-md-6" style={{ paddingLeft: "20px" }}>
              <h5>{item.title}</h5>
              <small>{item.date}</small>
              <p>{item.paragraph1}</p>
              <p>{item.paragraph2}</p>
              <p>{item.paragraph3}</p>
            </div>
          </div>
          <p className="mt-3">{item.others}</p>
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
      {" "}
      <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 col-md-12 story-time">
        {storyData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleShowModal(item)}
            className="col "
          >
            <div className="card">
              {" "}
              <div>
                <img src={item.photo} width="100%" alt="News Thumbnail" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.date}</p>
            </div>
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
