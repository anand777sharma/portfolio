import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Quots from '../../assets/images/icon-quote.svg'

const Slider = ({ data }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    imgSrc: '',
    imgAlt: '',
    title: '',
    description: ''
  });

 const openModal = (slide) => {
    setModalData({
      isOpen: true,
      imgSrc: slide.image, 
      imgAlt: slide.title,   
      title: slide.title,
      text: slide.description
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">{data?.title}</h3>
        <ul className="testimonials-list has-scrollbar">
          {data?.slides?.map((slide, index) => (
            <li className="testimonials-item" key={index}>
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => openModal(slide)}
              >
                <figure className="testimonials-avatar-box">
                  <img
                    src={slide.image} 
                    alt={slide.title}  
                    width="60"
                  />
                </figure>
                <h4 className="h4 testimonials-item-title" >
                  {slide.title}
                </h4>
                <div className="testimonials-text">
                  <p>{slide.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {modalData.isOpen && (
        <div className="modal-container active" >
          <div className="overlay active"  onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn"  onClick={closeModal}>
             <IoClose/>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={modalData.imgSrc}
                  alt={modalData.imgAlt}
                  width="80"
                />
              </figure>
              <img src={Quots} alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" >{modalData.title}</h4>
              <div>
                <p>{modalData.text}</p>
              </div>
              
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Slider;
