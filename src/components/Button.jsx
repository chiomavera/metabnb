import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import MetaMask from "../assets/Frame 37.png"
import WalletConnect from "../assets/Frame 38.png"


const Button = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <button onClick={handleShow} className="connect">
          <Link to="#connect-wallet">Connect Wallet</Link>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} className="modal-box">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose your preferred wallet:</p>
          <div className="mb-3 modal-button">
          <a href="#metamask"><img src={MetaMask} alt="meta mask" className="modal-image"/></a>
          </div>
          <div className="modal-button">
          <a href="#wallet connect"><img src={WalletConnect} alt="wallet connect" className="modal-image"/></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Button;
