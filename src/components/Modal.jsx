import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Background = (props) => {
  return (
    <div onClick={() => props.closeModal()} className="modal-background"></div>
  );
};

const InnerModal = (props) => {
  return (
    <div className="inner-modal">
      <button className="prev-btn" onClick={() => props.prev()}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <img src={props.image} alt="ras" />
      <button className="next-btn" onClick={() => props.next()}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Background closeModal={props.closeModal} />
      <InnerModal image={props.image} next={props.next} prev={props.prev} />
    </>
  );
};

export default Modal;
