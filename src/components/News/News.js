import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./news.scss";
import { storyData } from "../../TestData/storyData";

import Slider from "react-slick";
import ContentTab from "./ContentTab/ContentTab";
import { Carousel } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function NewsItem({ show, onHide, item }) {
  if (!item) return null; // Ensure item exists before rendering
  // Now it's safe to use item
  const dynamicTabData = item.tabLabels.map((label, index) => {
    const galleryItems = item.tabGalleries?.[index] || [];

    let content = (
      <Carousel
        prevIcon={
          <span style={{ fontSize: "2rem", color: "#54020a" }}>
            <FaArrowCircleLeft />
          </span>
        }
        nextIcon={
          <span style={{ fontSize: "2rem", color: "#54020a" }}>
            <FaArrowCircleRight />
          </span>
        }
        interval={null}
      >
        {galleryItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "400px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "700px",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  textAlign: "center",
                  fontWeight: "600",
                  // marginTop: "50px",
                }}
              >
                <h3> {item.title}</h3>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );

    return {
      label,
      content,
    };
  });

  return (
    <div className="story-modal">
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={onHide}
      >
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>{/* <h5>{item.title}</h5> */}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <h3>{item.title2}</h3>
            <br />
            <ContentTab tabs={dynamicTabData} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
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
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
                  <img
                    src={item.photo}
                    width="100%"
                    alt="News Thumbnail"
                    className="news-img-holder"
                  />
                </div>
                <h3>{item.title}</h3>
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
