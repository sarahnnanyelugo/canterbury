import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./news.scss";
import { storyData } from "../../TestData/storyData";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function NewsItem({ show, onHide, item }) {
  if (!item) return null; // Ensure item exists before rendering

  return (
  <div className="story-modal"> 
 <Modal
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  show={show}
  onHide={onHide}
> <Modal.Header closeButton>
  <Modal.Title><h5>{item.title}</h5></Modal.Title>
</Modal.Header>
  <Modal.Body>
    <div className="modal-content">
      <div className="d-md-flex">
        <div className="col-md-6">
          <img width="100%" src={item.photo} alt="News" className="modal-news-img"/>
        </div>
        <div className="col-md-6" style={{ paddingLeft: "20px" }}>
          
          <small>{item.date}</small>
          <p>{item.paragraph1}</p>
          <p>{item.paragraph2}</p>
          <p>{item.paragraph3}</p>
        </div>
      </div>
      <p className="mt-3">{item.others}</p>
    </div>
  </Modal.Body>
</Modal></div>
  );
}

function News() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <div className="slider-container col-md-12 story-time">
        <Slider {...settings}>
          {" "}
          {storyData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleShowModal(item)}
              className=""
            >
              <div className="card  each-news">
                {" "}
                <div className="">
                  <img src={item.photo} width="100%" alt="News Thumbnail" className="news-img-holder"/>
                </div>
                <h5>{item.title}</h5>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
          <NewsItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            item={selectedItem}
          />
        </Slider>
      </div>
    </>
  );
}

export default News;
