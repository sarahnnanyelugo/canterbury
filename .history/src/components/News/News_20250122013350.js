import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "./news.scss";
import { data } from "@remix-run/router";
function NewsItem(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content ">
          <div className="d-md-flex">
            {" "}
            <div className="col-md7">
              <img width="100%" src={data.photo} />
            </div>
            <div className="col-md5">
              {" "}
              <h3>{data.heading}</h3>
              <small>{data.date}</small>
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
              <p>{data.paragraph3}</p>
            </div>
          </div>
          <p>{data.others}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function News() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="col">
        {" "}
        <div className="story-time" onClick={() => setModalShow(true)}>
          <div>
            <img src={data.photo} width="100%" />
          </div>
          <h3>{data.title}</h3>
          <p>{data.date}</p>
        </div>
        <NewsItem show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default News;
