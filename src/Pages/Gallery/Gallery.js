import React, { useState, useRef, useEffect } from "react";
import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import AddAlbum from "./AddPhoto";
import MainVid from "../../assets/images/G_Loader.mp4";

// Import images
import Kid2 from "../../assets/images/kid2.jpeg";
import Kid3 from "../../assets/images/kid3.jpeg";
import Kid4 from "../../assets/images/kid4.jpg";
import Kid5 from "../../assets/images/kid5.jpg";
import Kid6 from "../../assets/images/girl1.png";
import Kid7 from "../../assets/images/cul4.png";
import Kid8 from "../../assets/images/cultural2.png";
import Kid9 from "../../assets/images/cul3.jpg";
import Kid10 from "../../assets/images/cul3.png";
import Kid11 from "../../assets/images/cul1.png";
import Kid12 from "../../assets/images/cultural3.png";
import Kid13 from "../../assets/images/gradu.png";
import Kid14 from "../../assets/images/gradu2.png";
import Kid15 from "../../assets/images/Kid15.jpg";
import Kid16 from "../../assets/images/Kid16.png";
import Kid18 from "../../assets/images/grad.png";
import Kid19 from "../../assets/images/grad2.png";
import Kid20 from "../../assets/images/baloon.png";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";

// Sample data
const photoAlbums = [
  {
    title: "2023 Graduation Pictures",
    photos: [Kid19, Kid6, Kid13, Kid14, Kid18],
  },
  { title: "Sports Day", photos: [Kid16, Kid15, Kid16] },
  { title: "School Party", photos: [Kid20, Kid20, Kid20] },
  { title: "Excursion Day", photos: [Kid2, Kid3, Kid4, Kid5] },
  { title: "Cultural Day", photos: [Kid9, Kid7, Kid8, Kid12, Kid10, Kid11] },
];

const PhotoGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        setVideoFinished(true);
      };
    }
  }, []);

  const openAlbum = (album) => setSelectedAlbum(album);
  const openPhoto = (photo) => {
    setCurrentPhoto(photo);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const navigatePhoto = (direction) => {
    const photos = selectedAlbum.photos;
    const index = photos.indexOf(currentPhoto);
    const newIndex = (index + direction + photos.length) % photos.length;
    setCurrentPhoto(photos[newIndex]);
  };

  return (
    <>
      <video
        ref={videoRef}
        className={`vidd ${videoFinished ? "fade-out" : ""}`}
        width="100%"
        autoPlay
        muted
        playsInline
        controls={false}
        src={MainVid}
      ></video>

      <div
        className={`gallery-page col-md-10 offset-md-1 ${
          videoFinished ? "slide-up" : "hidden"
        }`}
      >
        <div className="d-md-flex">
          <SectionHeading
            text1="OUR PHOTO"
            color1="#54020a"
            text2="gallery"
            color2="#929292"
          />
        </div>

        {!selectedAlbum && (
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
            {photoAlbums.map((album) => (
              <div key={album.title} onClick={() => openAlbum(album)}>
                <img
                  src={album.photos[0]}
                  alt={album.title}
                  className="album-cover"
                />
                <h6 style={{ fontFamily: "figtreeB" }}>{album.title}</h6>
                <p>{album.photos.length} photos</p>
              </div>
            ))}
          </div>
        )}

        {selectedAlbum && (
          <div>
            <div className="d-md-flex gallery-heading">
              <button onClick={() => setSelectedAlbum(null)}>
                <GoArrowLeft /> Back
              </button>
              <h5 className="album-title">{selectedAlbum.title}</h5>
            </div>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              {selectedAlbum.photos.map((photo) => (
                <img
                  key={photo}
                  src={photo}
                  alt={photo}
                  onClick={() => openPhoto(photo)}
                  className="photo-thumbnail"
                />
              ))}
            </div>
          </div>
        )}

        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Body className="text-center">
            {currentPhoto && (
              <div className="modal-content">
                <BsArrowLeftCircle
                  onClick={() => navigatePhoto(-1)}
                  className="nav-button left"
                />
                <center>
                  <img
                    src={currentPhoto}
                    alt="Zoomed"
                    className="modal-photo"
                    width="100%"
                  />
                </center>
                <BsArrowRightCircle
                  onClick={() => navigatePhoto(1)}
                  className="nav-button right"
                />
              </div>
            )}
          </Modal.Body>
        </Modal>

        <TabletAndBelow>
          <AddAlbum />
        </TabletAndBelow>
      </div>
    </>
  );
};

export default PhotoGallery;
