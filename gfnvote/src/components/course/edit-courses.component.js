import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Multiselect } from "multiselect-react-dropdown";

export default class EditCourse extends React.Component {
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

    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onChangeTrainer = this.onChangeTrainer.bind(this);
    this.onChangeBegin = this.onChangeBegin.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/courses/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          course: response.data.course,
          trainer: response.data.trainer,
          begin: new Date(response.data.begin),
          end: new Date(response.data.end),
          students: response.data.students,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/users")
      .then((response) => {

        let trainerList = [];
        let studentList = [];

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].role === "trainer") {
            let result = response.data[i].email;
            console.log("Trainer :" + result);
            trainerList.push(result);
          }
          if (response.data[i].role === "student") {
            let result = response.data[i].email;
            console.log("Student :" + result);
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

    console.log(filtered);
    this.setState({ students: filtered });
    console.log(this.state.users);
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
      .post("http://localhost:5000/courses/update/" + this.props.match.params.id, course)
      .then((res) => console.log(res.data)).then(console.log('Course added')).catch(err => {
        console.log(err);
      });

    this.setState({
      course: "",
      trainer: "",
      begin: new Date(),
      end: new Date(),
    });
    window.location = "/";
  }

  render() {
    return (

      <div className="bg-dark">
        <br/>
      <div className="container w-50 bg-white text-center border border-dark rounded">
      <Button className="mt-5 mb-2"variant="outline-info">
        <h2>
        <b>
            Kurs ändern
            </b>
        </h2>
        </Button>
          <div className="row justify-content-md-center">
            <div className="col-12 my-3">
              <div className="input-group mt-3">
                <div className="input-group-append">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect02"
                  >
                    Teilnehmer
                  </label>

                  <Multiselect
                    options={this.state.studentList} // Options to display in the dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="email" // Property name to display in the dropdown options
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="input-group  my-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text "
                    htmlFor="inputGroupSelect00"
                  >
                    Kurs
                  </label>
                </div>
                <select
                  autoFocus
                  className="custom-select"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
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

            <div className="col-lg-6 col-sm-12">
              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Trainer
                  </label>
                </div>
                <select
                  className="custom-select"
                  value={this.state.trainer}
                  onChange={this.onChangeTrainer}
                  id="inputGroupSelect01"
                >
                  <option selected>wählen...</option>
                  {this.state.trainerList.map((list) => (
                    <option key={list._id} value={list.email}>
                      {list}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 my-3">
              <div className="input-group m-2">
                <div className="input-group-append">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect03"
                  >
                    Beginn
                  </label>
                </div>
                <DatePicker
                  selected={this.state.begin}
                  onChange={this.onChangeBegin}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-3">
              <div className="input-group m-2">
                <div className="input-group-append">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect03"
                  >
                    Ende
                  </label>
                </div>
                <DatePicker
                  selected={this.state.end}
                  onChange={this.onChangeEnd}
                />
              </div>
            </div>

            <div className="col-12 my-3">

            <Button variant="outline-info" onClick={this.onSubmit}>Änderung Speichern</Button>
              </div>
            </div>
     <br/>
        
      </div>
      </div>
    );
  }
}
