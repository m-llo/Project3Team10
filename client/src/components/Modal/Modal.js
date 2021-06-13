import React from 'react'
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {Button, Row} from 'react-bootstrap';
import Logo from '../../assets/images/cÜk_long.png';
import './style.css';


const IngredientsModal = (props) => {

  let history = useHistory();

    return (


      <Modal className="Modal" id="contained-modal-title-vcenter" show={props.status}>
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter text-center">
        <img src={Logo} className="modalPic col col-center" alt="logo"/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <img className="modalPic col col-center" src={props.image} alt="Recipe Pic"/>
      </Modal.Body>
      <Modal.Body className="d-flex justify-content-center text-center">
        <Row className="recipeTitle">{props.label}</Row>
      </Modal.Body>
      <Modal.Body className="d-flex justify-content-center text-center">
        <Row className="ingredients">{props.ingredients}</Row>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100 d-flex justify-content-between">
        <Button className="addModalClose btn-warning" onClick={()=>history.push("/plan")} href="/plan" >Go Back To Your Plan</Button>
        <Button className="addModalClose mt-4 btn-warning" onClick={()=>history.push("/list")} href="/list" >Add Ingredients to Shopping List</Button>
        {/* <Button className="addModalClose" status={props.status} onClick={props.hideModal}>Close</Button> */}
        </Row>
      </Modal.Footer>
    </Modal>
  );  
}

export default IngredientsModal;
