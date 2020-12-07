import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { BsPersonFill, BsThreeDots } from "react-icons/bs";
import { IoIosRocket, IoIosFlag } from "react-icons/io";

function Delete(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
      <b>löschen</b>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warnung Löschvorgang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sind Sie sich sicher das Sie dieses Formular löschen möchten ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { props.deleteForm(props.form._id)}}>
            Ja, <b>sicher</b>
          </Button>
          <Button variant="outline-info" onClick={handleClose}>Nein</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Change(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
      <b>ändern</b>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warnung Änderungsvorgang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sind Sie sich sicher das Sie dieses Formular ändern möchten ?
        </Modal.Body>
        <Modal.Footer>
          <Delete
      form={props.form}
      deleteForm={props.deleteForm} 
      key={props.key}
      />
     
          <Button variant="outline-info" 
          onClick={handleClose}>
            <b>Nein, abbrechen</b>
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Form = (props) => (
  <tr>
    {/* <td>{props.form.courseId}</td> */}
      <td>{props.form.trainer}</td>
    <td>
      {(+props.form.q1 +
        +props.form.q2 +
        +props.form.q3 +
        +props.form.q4 +
        +props.form.q5 +
        +props.form.q6 +
        +props.form.q7 +
        +props.form.q8 +
        +props.form.q9 +
        +props.form.q10) / 
        10}
    </td>

    <td>{props.form.q11}</td>
    
    <td>{props.form.email}</td>
    <td>
    <Change 
        form={props.form}
        deleteForm={props.deleteForm} 
        key={props.key}
      />
      </td>
  </tr>
);

const CourseList = (props) => {
  const [forms, setForms] = useState([])

  useEffect(()=>{
    axios
      .get("http://localhost:5000/forms")
      .then((result) => {setForms(result.data)})
      
  },[])
  const deleteForm = (id) => {
    axios
      .delete("http://localhost:5000/forms/", id)
      .then((result) => console.log( "x : " +result.data));

      setForms(forms.filter((el) => el._id !== id))
  }

  const formList = () => {
    return forms.map((currentForm) => {
        return (
          <Form
            form={currentForm}
            deleteForm={() => {deleteForm(currentForm._id)}}
            key={currentForm._id}
          />
        );
      })
      .reverse();
  }

   return (
      <div>
        <div className="bg-dark">
          <br />
          <div className="container text-center bg-white border rounded">
          <Button className="m-5" variant="info" disabled>
        <h4>
        <b>
            Formulare
            </b>
        </h4>
        </Button>
            <table className="table table-bordered table-striped table-hover text-body text-center">
              <thead className="thead-dark">
                <tr>
                  {/* <th>
                    <GiOpenBook /> id
                  </th> */}
                  <th>trainer</th>
                  <th>
                    <IoIosRocket />
                  </th>
                  <th>
                    <IoIosFlag />
                  </th>
                  <th>
                    <BsPersonFill />
                  </th>
                  <th>
                    <BsThreeDots />
                  </th>
                </tr>
              </thead>
              <tbody>{formList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

export default CourseList;