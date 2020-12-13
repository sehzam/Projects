import React, {useEffect, useState} from "react";
import axios from "axios";

import {Button} from "react-bootstrap";

import {BsThreeDots, BsPersonFill} from "react-icons/bs";
import {IoIosPeople, IoIosRocket, IoIosFlag} from "react-icons/io";
import {GiOpenBook} from "react-icons/gi";
import {NavLink} from "react-router-dom";


const CourseList = (props) => {

    const [courses, setCourses] = useState([]);
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(response => {
                setCourses(response.data)

            })
            .catch((error) => {

                console.log(error);
            });
        axios.get('http://localhost:5000/votes')
            .then(response => {
                setVotes(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    const Course = (props) => (
        <tr>
            <td>{props.course.course}</td>
            <td>{props.course.trainer.substring(
                "0",
                `${props.course.trainer.indexOf("@")}`
            )}</td>

            <td>{props.course.begin.substring(0, 10)}</td>
            <td>{props.course.end.substring(0, 10)}</td>
            <td>{props.course.students.length}</td>
            <td>
                <NavLink
                    className="col-6"
                    to={{
                        pathname: "/votes",
                        state: {
                            id: props.course._id,
                            course: props.course.course,
                            trainer: props.course.trainer,
                            begin: props.course.begin,
                            end: props.course.end,
                            email: localStorage.getItem("email"),
                        },
                    }}
                >
                    <Button variant="outline-success">
                        <b>bewerten</b>
                    </Button>
                </NavLink>
            </td>
        </tr>
    );

    const deleteCourse = (id) => {
        axios.delete('http://localhost:5000/courses/' + id)
            .then(res => console.log(res.data));

        setCourses(courses.filter(el => el._id !== id));
    }


    const filter = () => {
        courses.map(c => {
            if (new Date(c.end).getTime() > new Date().getTime()) {
                setCourses(courses.filter(el => el._id !== c._id));
            }
            let flag = false
            c.students.map((s) => {
                if (s.email === localStorage.getItem("email")) {
                    flag = true
                }

            })
            if (!flag) {
                setCourses(courses.filter(el => el._id !== c._id));
            }


        })
        courses.map(c => {
            votes.map(v => {

                if (v.courseId == c._id && v.email == localStorage.getItem("email")) {
                    setCourses(courses.filter(el => el._id !== v.courseId));
                }
            })
        })
    }
    const list = () => {
        filter();
        return courses
            .map((currentCourse) => {
                return (
                    <Course
                        course={currentCourse}
                        end={currentCourse.end.toString()}
                        key={currentCourse._id.toString()}
                    />
                );

            })
            .reverse();
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




