import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import {
  BsThreeDots,
  BsPersonFill,
} from "react-icons/bs";
import { IoIosPeople, IoIosRocket, IoIosFlag } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Course = (props) => (
  <tr>
    <td>{props.course._id}</td>
    <td>{props.course.course}</td>

    
    <td>{props.course.begin.substring(5, 10)}</td>
    <td>{props.course.end.substring(5, 10)}</td>
    <td>
      <NavLink
        to={{
          pathname: "/chart",
          state: {
            id: props.course._id,
            course: props.course.course,
            trainer: props.course.trainer,
            begin: props.course.begin,
            end: props.course.end,
            email: props.email,
            forms: props.forms,
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

export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      courses: [],
      courseList: [],
      filteredList: [],
      filtered: [],
      filter: [],
      forms: [],
    };
  }

  async componentDidMount() {
    
    await axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.log(error);
    });
    await axios
      .get("http://localhost:5000/forms")
      .then((response) => {
        this.setState({ forms: response.data });
      })
      .catch((error) => {
        console.log(error);
    });
    
    await this.setState({email: this.props.location.state.email, trainer: this.props.location.state.trainer});
    
    // eslint-disable-next-line
    await this.state.courses.map((c) => {
      if (new Date(c.end).getTime() < new Date().getTime()) {
        if(this.state.email === c.trainer){
          
          this.state.courseList.push(c);
        }
      }
    });
    
    this.setState({email: this.state.email});
 
  }

  courseList() {
    return this.state.courseList
      .map((currentCourse) => {
        return (
          <Course
            trainer={this.state.trainer}
            email={this.state.email}
            course={currentCourse}
            key={currentCourse._id}
            forms={this.state.forms}
          />
        );
      })
      .reverse();
  }

  render() {
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
        <table className="table table-bordered table-striped table-hover text-body text-center">
          <thead className="thead-dark">
            <tr>
              <th>
                id
              </th>
              <th>
                <GiOpenBook />
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
          <tbody>{this.courseList()}</tbody>
        </table>
      </div>
      </div>
    );
  }
}
