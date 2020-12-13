import React, {useEffect, useState} from "react";
import axios from "axios";

import {Button, Modal} from "react-bootstrap";

import {BsThreeDots, BsPersonFill} from "react-icons/bs";
import {IoIosPeople, IoIosRocket, IoIosFlag} from "react-icons/io";
import {GiOpenBook} from "react-icons/gi";
import {Link} from "react-router-dom";


const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(response => {
                setCourses(response.data)

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
                        Sind Sie sich sicher das Sie diesen Kurs löschen möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={() => {
                            props.deleteCourse(props.course._id)
                        }}>
                            Ja, <b>sicher</b>
                        </Button>
                        <Button variant="outline-info" onClick={handleClose}>Nein</Button>
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
                        Sind Sie sich sicher das Sie diesen Kurs ändern möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Delete
                            course={props.course}
                            deleteCourse={props.deleteCourse}
                        />
                        <Link to={"/c_edit/" + props.course._id}>
                            <Button variant="outline-success">
                                <b>ändern</b>
                            </Button>
                        </Link>
                        <Button variant="outline-info"
                                onClick={handleClose}>
                            <b>Nein, abbrechen</b>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    const Course = props => (<tr>
            <td>{props.course.course}</td>
            <td>{props.course.trainer}</td>

            <td>{props.course.begin.substring(0, 10)}</td>
            <td>{props.course.end.substring(0, 10)}</td>
            <td>{props.course.students.length}</td>
            <td>

                <Change
                    course={props.course}
                    deleteCourse={props.deleteCourse}
                />
            </td>
        </tr>)

    const deleteCourse = (id) => {
        axios.delete('http://localhost:5000/courses/' + id)
            .then(res => console.log(res.data));

        setCourses(courses.filter(el => el._id !== id));
    }

    const list = () => {
        return courses.map(currentCourse => {
            console.log("--------------------")
            console.log(currentCourse.begin)
            console.log("currentCourse.begin")
            console.log(currentCourse.course)
            console.log("currentCourse.end")
            console.log(currentCourse.end)
            console.log("--------------------")
            return <Course
                key={currentCourse._id.toString()}
                course={currentCourse}
                deleteCourse={deleteCourse}/>
        }).reverse()
    }

    return (
        <div className="bg-dark">
            <br/>
            <div className="container bg-white text-center border rounded">
                <Button className="m-5" variant="info" disabled>
                    <h4>
                        <b>
                            Kurse
                        </b>
                    </h4>
                </Button>
                <table className="w-100 table table-bordered table-striped table-hover text-body text-center">
                    <thead className="thead-dark col-2">
                    <tr className="col-2">
                        {/* <th>id</th> */}
                        <th>
                            <GiOpenBook/>
                        </th>
                        <th>
                            <BsPersonFill/>
                        </th>
                        <th>
                            <IoIosRocket/>
                        </th>
                        <th>
                            <IoIosFlag/>
                        </th>
                        <th>
                            <IoIosPeople/>
                        </th>
                        <th>
                            <BsThreeDots/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {list()}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default CourseList;


