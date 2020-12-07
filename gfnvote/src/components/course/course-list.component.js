import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { BsThreeDots, BsPersonFill } from "react-icons/bs";
import { IoIosRocket, IoIosFlag } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Course = (props) => (
  <tr>
    <td>{props.course._id}</td>
    <td>{props.course.trainer.substring(
              "0",
              `${props.course.trainer.indexOf("@")}`
            )}</td>

    <td>{props.course.begin.substring(0, 10)}</td>
    <td>{props.course.end.substring(0, 10)}</td>
    <td>
      <NavLink
        className="col-6"
        to={{
          pathname: "/forms",
          state: {
            id: props.course._id,
            course: props.course.course,
            trainer: props.course.trainer,
            begin: props.course.begin,
            end: props.course.end,
            email: props.email,
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
const CourseList = (props) => {
  const [email, setEmail] = useState(props.location.state.email)
  const [courses, setCourses] = useState([])
  const [courseList, setCourseList] = useState([])
  const [filter, setFilter] = useState([]);
  const [forms, setForms] = useState([]);
  const [myForms, setMyForms] = useState([]);
  

  useEffect(()=>{
    axios
    .get("http://localhost:5000/forms")
    .then((result) => {setForms(result.data)}).catch((err) => {
      console.log(err);
    })
    axios
    .get("http://localhost:5000/courses")
    .then((result) => {setCourses(result.data)}).catch((err) => {
      console.log(err);
    })
    
  },[])
  useEffect(() => {   
         
    console.log(props.location.state)
    console.log("courses")
    console.log(courses)
    console.log("forms")
    console.log(forms)

    forms.map((f) => {
      if (f.email === email) {
        console.log(f)
        console.log(email)
        myForms.push(f);
      }
    });
    courses.map((c) => {
      if (new Date(c.end).getTime() < new Date().getTime()) {
        console.log(c)
        courseList.push(c);
      }
    });
    if (myForms.length === 0) {
      
      console.log("(myForms.length")
      setFilter(courses);
    }else{
    let ar = courseList;
    
      myForms.map((f) => {

        courseList.map((cl) => {
          cl.students.map((s) => {
            if (f.courseId === cl._id) {
              let index = ar.indexOf(cl);
              delete ar[index];
            }

          });
        });
        // ar.filter(function(elem, index, self) { 
        //   return index === self.indexOf(elem); 
      // })
      });
      // var unique = ar;
      let fil = ar.filter(function (el) {
        return el != null;
      });
      setFilter(fil);
    }

  
  });    

  const list = () => {
    return filter
      .map((currentCourse) => {
        return (
          <Course
            email={email}
            course={currentCourse}
            key={currentCourse._id}
          />
        );
      })
      .reverse();
  };

  return (
    <div className="bg-dark">
      <br />
      <div className="container bg-white text-center border rounded">
        <Button className="m-5" variant="info" disabled>
          <h4>
            <b>Kurse</b>
          </h4>
        </Button>
        <table className="table table-bordered table-striped table-hover text-body text-center">
          <thead className="thead-dark">
            <tr>
              <th>
                <GiOpenBook />
              </th>
              <th>
                <BsPersonFill />
              </th>
              <th>
                <IoIosRocket />
              </th>
              <th>
                <IoIosFlag />
              </th>
              <th>
                <BsThreeDots />
              </th>
            </tr>
          </thead>
          <tbody>{list()}</tbody>
        </table>
      </div>
    </div>
  );
};
export default CourseList;