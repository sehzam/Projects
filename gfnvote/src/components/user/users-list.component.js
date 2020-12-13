import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from 'axios';
import {BsFillEnvelopeFill, BsThreeDots, BsPersonFill, BsEye} from "react-icons/bs";
import {Link} from "react-router-dom";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data)

            })
            .catch((error) => {

                console.log(error);
            });
    }, []);

    const Delete = (props) => {
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
                        Sind Sie sich sicher das Sie diesen Benutzer löschen möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger"
                                onClick={() => {
                                    props.deleteUser(props.user._id)
                                }}>
                            Ja, <b>sicher</b>
                        </Button>
                        <Button variant="outline-info"
                                onClick={handleClose}>Nein</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    const Change = (props) => {
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
                        Sind Sie sich sicher das Sie diesen Benutzer ändern möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Delete
                            user={props.user}
                            deleteUser={props.deleteUser}
                        />

                        <Link to={"/u_edit/" + props.user._id}>
                            <Button variant="outline-success">
                                <b>ändern</b>
                            </Button>
                        </Link>
                        <Button variant="outline-info" onClick={handleClose}><b>Nein, abbrechen</b></Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    const User = (props) => (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.email}</td>
            <td>{props.user.role}</td>
            <td>{props.user.isReg ? "true" : "false"}</td>
            <td>
                <Change
                    user={props.user}
                    deleteUser={props.deleteUser}
                />
            </td>
        </tr>
    )
    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => console.log(res.data));

        setUsers(users.filter(el => el._id !== id));
    }

    const list = () => {
        return users.map(currentUser => {
            return <User
                key={currentUser._id.toString()}
                user={currentUser}
                deleteUser={deleteUser}/>
        })
    }

    return (
        <div className="bg-dark">
            <br/>
            <div className="container bg-white text-center border rounded">
                <Button className="m-5" variant="info" disabled>
                    <h4>
                        <b>
                            Benutzer
                        </b>
                    </h4>
                </Button>
                <table className="table table-bordered table-striped table-hover text-body text-center">
                    <thead className="thead-dark">
                    <tr className="">
                        <th><BsPersonFill/></th>
                        <th><BsFillEnvelopeFill/></th>
                        <th><BsEye/></th>
                        <th>isReg</th>
                        <th><BsThreeDots/></th>
                    </tr>
                    </thead>
                    <tbody>
                    {list()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;