import React, {useEffect, useState} from "react";
import axios from "axios";

import {Button, Modal} from "react-bootstrap";

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



  }, []);
  useEffect(() => {
      axios.get('http://localhost:5000/votes')
          .then(response => {
              console.log(response.data)

              setVotes(response.data)

          })
          .catch((error) => {

              console.log(error);
          });


  }, []);

  const Course = (props) => (

      <tr>
        <td>{props.course.course}</td>
        <td>{props.course.trainer}</td>


        <td>{props.course.begin.substring(5, 10)}</td>
        <td>{props.course.end.substring(5, 10)}</td>
        <td>{props.course.students.length}</td>
        <td>

          <NavLink
              to={{
                pathname: "/chart",
                state: {
                  id: props.course._id,
                  course: props.course,
                  votes: props.votes
                },
              }}
          >
            <Button variant="outline-success" >
              <b>Diagramm</b>
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


  const list = () => {
    return courses
        .map((currentCourse) => {
          if (new Date(currentCourse.end).getTime() < new Date().getTime()) {
            if(localStorage.getItem("email") == currentCourse.trainer){

              return (
              <Course
                  course={currentCourse}
                  key={currentCourse._id.toString()}
                  votes={votes}
              />
              );
            }
          }

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




