import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Multiselect } from "multiselect-react-dropdown";

import { BsPersonFill } from "react-icons/bs";
import { IoIosPeople, IoIosRocket, IoIosFlag } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";

export default class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainerList: [],
      studentList: [],
      users: [],
      students: [],
      course: "",
      trainer: "",
      begin: new Date(),
      end: new Date(),
      selectedStudents: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {

        let trainerList = [];
        let studentList = [];

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].role === "trainer") {
            let result = response.data[i].email;
            trainerList.push(result);
          }
          if (response.data[i].role === "student") {
            studentList.push(response.data[i]);
          }
        }
        this.setState({
          trainerList: trainerList,
          studentList: studentList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  
  }
  onChangeTrainer(e) {
    this.setState({
      trainer: e.target.value,
    });
  }
  onChangeBegin(date) {
    this.setState({
      begin: date,
    });
  }
  onChangeEnd(date) {
    this.setState({
      end: date,
    });
  }
  onSelect(selectedList, selectedItem) {
    this.state.students.push(selectedItem);
  }
  onRemove(selectedList, selectedItem) {
    let arr = this.state.students;
    let index = arr.indexOf(selectedItem);
    delete arr[index];
    let filtered = arr.filter(function (el) {
      return el != null;
    });

    this.setState({ students: filtered });
  }

  onSubmit(e) {
    e.preventDefault();
    
const course = {
  course: this.state.course,
  trainer: this.state.trainer,
  begin: this.state.begin,
  end: this.state.end,
  students: this.state.students,
};
    
    axios
      .post("http://localhost:5000/courses/add", course)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      course: "",
      trainer: "",
      begin: new Date(),
      end: new Date(),
    });
    // window.location = "/c_create";
  }

  render() {
    return (
      
        <div className="bg-dark">
          <br/>
        <div className="container w-100 bg-white text-center border rounded">
        <Button className="mt-5 mb-2"variant="info" disabled>
        <h4>
        <b>
            Kurs erstellen
            </b>
        </h4>
        </Button>
            <div className="row justify-content-md-center">
              <div className="col-12 my-3">
                <div className="input-group mt-3">
                  <div className="input-group-append">

                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect02"
                    >
                      <IoIosPeople/>
                    </label>

                    <Multiselect
                    
                      options={this.state.studentList} // Options to display in the dropdown
                      onSelect={this.onSelect.bind(this)} // Function will trigger on select event
                      onRemove={this.onRemove.bind(this)} // Function will trigger on remove event
                      displayValue="email" // Property name to display in the dropdown options
                    />

                  </div>
                </div>
              </div>
              
              <div className="col-12 col-sm-12 col-md-6">
                <div className="input-group  my-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text "
                      htmlFor="inputGroupSelect00"
                    >
                      <GiOpenBook/>
                    </label>
                  </div>
                  <select
                  required
                  autoFocus
                  className="custom-select"
                  value={this.state.course}
                  onChange={this.onChangeCourse.bind(this)}
                  id="inputGroupSelect00"
                  >
                    <option placeholder>wählen...</option>
                    <option value="BWL">BWL</option>
                    <option value="GA 1">GA 1</option>
                    <option value="GA 2">GA 2</option>
                    <option value="Programmierung">Programmierung</option>
                    <option value="Netzwerk">Netzwerk</option>
                    <option value="WISO">WISO</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
              <div className="input-group  my-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text "
                    htmlFor="inputGroupSelect00"
                    >
                    <GiOpenBook/>
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse.bind(this)}
                />
              </div>
            </div>
            <hr/>

              <div className="col-12 col-sm-12 col-md-4">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      <BsPersonFill/> 
                    </label>
                  </div>
                  <select
                  required
                    className="custom-select"
                    value={this.state.trainer}
                    onChange={this.onChangeTrainer.bind(this)}
                    id="inputGroupSelect01"
                  >
                    <option placeholder>wählen...</option>
                    {this.state.trainerList.map((list) => (
                      <option key={list._id} value={list.email}>
                        {list}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-sm-12 col-12 col-md-4 col-lg-4">
                <div className="input-group m-2">
                  <div className="input-group-append">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect03"
                    >
                      <IoIosRocket/>
                    </label>
                  </div>
                  <DatePicker
                    selected={this.state.begin}
                    onChange={this.onChangeBegin.bind(this)}
                    />
                </div>
              </div>
              <div className="col-sm-12 col-12 col-md-4 col-lg-4">
                <div className="input-group m-2">
                  <div className="input-group-append">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect03"
                      >
                  <IoIosFlag/>
                    </label>
                  </div>
                  <DatePicker
                    selected={this.state.end}
                    onChange={this.onChangeEnd.bind(this)}
                  />
                </div>
              </div>

              <div className="form-group col-12 m-4">
              <Button variant="outline-success" onClick={this.onSubmit.bind(this)}>
              <b>
                  
                erstellen
                  </b>
              </Button>
            </div>
              
            </div>
          
        </div>
      </div>
    );
  }
}
