import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { MdFiberNew } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { RiLockPasswordLine, RiLoginCircleLine } from "react-icons/ri";
import axios from "axios";

import CreateUser from "./components/user/create-user.component";
import CreateCourse from "./components/course/create-course.component";
import GenerateForm from "./components/form/generate-form.component";

import CourseListAdmin from "./components/course/course-list-admin.component";
import CourseListTrainer from "./components/course/course-list-trainer.component";
import CourseList from "./components/course/course-list.component";
import FormList from "./components/form/form-list.component";
import UsersList from "./components/user/users-list.component";
import LogsList from "./components/logs/logs-list.component";

import Form from "./components/form/form.component";
import Chart from "./components/chart/chart.component";
import ChartAll from "./components/chart/chart-all.component";
import ChartAdmin from "./components/chart/chart-admin.component";
import ChartPreGate from "./components/chart/chart-pre-gate.component";

import EditUser from "./components/user/edit-users.component";
import EditCourse from "./components/course/edit-courses.component";
import ResetPassword from "./components/logs/reset-password.component";
import { Nav, Navbar, Button, Image, Collapse } from "react-bootstrap";



function Help() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <br />
      <Button
        variant={open ? "secondary" : "danger"}
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
      >
        <b>Hilfe</b>
      </Button>
      <br />
      <br />
      <Collapse in={open}>
        <div id="collapse-text">Wenden Sie sich bitte an die Leitung.</div>
      </Collapse>
      <br />
    </>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
      isStudent: false,
      isTrainer: false,
      isAd: false,
      isReg: false,
      users: [],
      courses: [],
      courseList: [],
      filteredList: [],
      filtered: [],
      filter: [],
      forms: [],
      logs: [],
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),

    };
  }


   componentDidMount() {
    

     axios
      .get("http://localhost:5000/logs")
      .then((response) => {
        // eslint-disable-next-line
        response.data.map((l) => {
          this.state.logs.push(l)
          if (l.email === this.state.email && l.isStudent === true) {
            this.setState({
              isOnline: true,
              isStudent: true,
            });
          }

          if (l.email === this.state.email && l.isTrainer === true) {
            this.setState({
              isOnline: true,
              isTrainer: true,
            });
          }

          if (l.email === this.state.email && l.isAd === true) {
    
            this.setState({
              isOnline: true,
              isAd: true,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });

     axios
      .get("http://localhost:5000/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

     axios
      .get("http://localhost:5000/forms")
      .then((response) => {
        this.setState({ forms: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

     axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    var email = this.state.email;
    var myForms = [];
    // eslint-disable-next-line
    this.state.forms.map((f) => {
      if (f.email === email) {
        myForms.push(f);
      }
    });
    // eslint-disable-next-line
    this.state.courses.map((c) => {
      if (new Date(c.end).getTime() < new Date().getTime()) {
        this.state.courseList.push(c);
      }
    });
    // eslint-disable-next-line
    this.state.courseList.map((cl) => {
      // eslint-disable-next-line
      cl.students.map((s) => {
        if (s.email === email) {
          this.state.filteredList.push(cl);
        }
      });
    });

    if (myForms.length === 0) {
      this.setState({ filtered: this.state.filteredList });
    }

    let darr = this.state.filteredList;

    if (myForms.length > 0) {
      // eslint-disable-next-line
      myForms.map((f) => {
        // eslint-disable-next-line
        this.state.filteredList.map((cl) => {
          // eslint-disable-next-line
          cl.students.map((s) => {
            if (f.courseId === cl._id && f.email === s.email) {
              let index = darr.indexOf(cl);
              delete darr[index];
            }

            if (f.email === s.email) {
              this.state.filtered.push(cl);
            }
          });
        });
      });
    }
    let filtered = darr.filter(function (el) {
      return el != null;
    });

    this.setState({ filter: filtered });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSignOut(e) {
    localStorage.clear();

    this.setState({
      password: "",
      isStudent: false,
      isTrainer: false,
      isAd: false,
    });

    axios
      .get("http://localhost:5000/logs")
      .then((response) => {
        // eslint-disable-next-line
        response.data.map((l) => {
          if (l.email === this.state.email) {
            axios
              .delete("http://localhost:5000/logs/" + l._id)
              .then((res) => console.log(res.data))
              .catch((err) => {
                console.log(err);
              });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.loginHandle(false);
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  loginHandle() {
    this.setState((prevState) => ({
      isOnline: !prevState.isOnline,
    }));
  }
  studentHandle() {
    this.setState((prevState) => ({
      isStudent: !prevState.isStudent,
    }));
  }
  trainerHandle() {
    this.setState((prevState) => ({
      isTrainer: !prevState.isTrainer,
    }));
  }
  adminHandle() {
    this.setState((prevState) => ({
      isAd: !prevState.isAd,
    }));
  }
  onSubmit(e) {
    e.preventDefault();

    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    var passwordHash = require("password-hash");
    // eslint-disable-next-line
    this.state.users.map((user) => {
      if (
        user.email === this.state.email.trim() ||
        user.username === this.state.email.trim() 
        ) {
        console.log("Login successful");
        if (true === passwordHash.verify(this.state.password, user.password)) {
          console.log("Password successful");
          this.loginHandle(true);


          if (user.role === "student") {
            localStorage.setItem("id", user._id);
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("password", user.password);
            this.setState({
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role,
              isReg: user.isReg,
              isOnline: true,
              isStudent: true,
              isTrainer: false,
              isAd: false,
            });

            const log = {
              email: user.email,
              isOnline: true,
              isStudent: true,
              isTrainer: false,
              isAd: false,
            };
            axios
              .post("http://localhost:5000/logs/add/", log)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          }
          if (user.role === "trainer") {
            localStorage.setItem("id", user._id);
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("password", user.password);
            this.setState({
              id: user._id,
              username: user.username,
              email: user.email,
              password: user.password,
              role: user.role,
              isReg: user.isReg,
              isOnline: true,
              isStudent: false,
              isTrainer: true,
              isAd: false,
            });

            const log = {
              email: user.email,
              isOnline: true,
              isStudent: false,
              isTrainer: true,
              isAd: false,
            };

            axios
              .post("http://localhost:5000/logs/add/", log)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          }
          if (user.role === "admin") {
            localStorage.setItem("id", user._id);
            localStorage.setItem("username", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("password", user.password);
            this.setState({
              id: user._id,
              username: user.username,
              email: user.email,
              password: user.password,
              role: user.role,
              isReg: user.isReg,
              isOnline: true,
              isStudent: false,
              isTrainer: false,
              isAd: true,
            });
            const log = {
              email: user.email,
              isOnline: true,
              isStudent: false,
              isTrainer: false,
              isAd: true,
            };

            axios
              .post("http://localhost:5000/logs/add/", log)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          }
        }
        if (true !== passwordHash.verify(this.state.password, user.password)) {
          console.log("Password failed");
        }
      }
    });
  }
  render() {
    return (
      <Router>
<>
{this.state.isReg ? (
  <>
<ResetPassword {... this.state}/>
<div className="justify-content-center d-flex flex-row bg-dark vh-100"></div>
</>
) : (
  <div className="App">
  {/* app header start */}
  <div className="App-header ">

    {!this.state.isOnline ? (
      
      <div className="col-12 text-center bg-dark">
        <br />
        <div className="container text-center bg-secondary w-100 border border-dark rounded-circle">
        <div className="container text-center text-white font-weight-bolder bg-dark w-75 my-5 px-5 border border-dark rounded-circle ">
            <Image
            className="mt-5"
            width="128"
            height="128"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKWX3SpqrJ_PfusnsexLllwUGF0UD8hF7EdAyKaRLvVXihJDQ3xw3o4g&usqp=CAU"
            roundedCircle
          />
          <h3 className="text-white m-1 mt-4"><b>TRAINER</b></h3>
          <h3 className="text-white mb-4"><b>BEWERTUNG</b></h3>

          <div className="row justify-content-center">
            {/* input email */}
            <div className="form-group col-10 col-sm-8 col-md-6 col-lg-4 m-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text "
                    htmlFor="inputGroupSelect00"
                  >
                    <TiUser/>
                  </label>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail.bind(this)}
                />
              </div>
            </div>
            {/* end input email */}
            {/* input password */}
            <div className="form-group col-10 col-sm-8 col-md-6 col-lg-4 m-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text "
                    htmlFor="inputGroupSelect00"
                  >
                    <RiLockPasswordLine/>
                  </label>
                </div>
                <input
                  type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword.bind(this)}
                />
              </div>
            </div>
            {/* end input password */}
            {/* input submit */}
            <div className="form-group col-12 mb-5 m-3">      
              <Button
                className="m-1"
                variant="secondary"
                onClick={this.onSubmit.bind(this)}
              >
                <h5>
                  <b><RiLoginCircleLine/> login</b>
                </h5>
              </Button>
            </div>
            {/* end input submit */}
          </div>
          


<Help className="text-white"/>


        </div>

          {/* end form group */}
        </div>
      </div>
    ) : null}

    {this.state.isOnline && this.state.isStudent ? (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
        >
          {!this.state.isAd ? (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <NavLink
                activeStyle={{ color: "skyblue" }}
                exact
                strict
                to="/"
                className="m-4 navbar-brand"
              >
                <Image
                  className="mr-3"
                  width="32"
                  height="32"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKWX3SpqrJ_PfusnsexLllwUGF0UD8hF7EdAyKaRLvVXihJDQ3xw3o4g&usqp=CAU"
                  roundedCircle
                />
                <b> Trainer Bewertung</b>
              </NavLink>
              {this.state.isOnline ? (
                <>
                  <Button
                    onClick={this.onSignOut.bind(this)}
                    variant={
                      this.state.isOnline
                        ? "outline-danger"
                        : "outline-primary"
                    }
                    className="m-1 mr-3"
                  >
                    <b>
                      {this.state.isOnline ? "Ausloggen" : "Einloggen"}
                    </b>
                  </Button>{" "}
                </>
              ) : null}
              <>
                <Navbar.Text>
                  Angemeldet als :{" "}
                  <b>
                    <a className="text-success">
                      {this.state.username}
                    </a>
                  </b>
                </Navbar.Text>
              </>
            </>
          ) : null}

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <ul className="navbar-nav active justify-content-end mx-auto col-12">
              
                <li className="nav-item font-weight-bold xxl">
                  <NavLink
                    activeStyle={{ color: "skyblue" }}
                    exact
                    strict
                    className="nav-link font-weight-bolder text-white50  mt-2"
                    to={{
                      pathname: "/c_list",
                      state: {... this.state},
                    }}
                  >
                    <Button
                      disabled={this.state.filter.length === 0}
                      variant={
                        this.state.filter.length === 0
                          ? "outline-danger"
                          : "outline-primary"
                      }
                    >
                      <b>{this.state.filter.length}{this.state.filter.length === 1 ? "Kurs" : "Kurse"}</b>
                    </Button>
                  </NavLink>
                </li>

            </ul>
          </Navbar.Collapse>
        </Navbar>
      </>
    ) : null}
    {this.state.isOnline && this.state.isTrainer ? (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
        >
          {!this.state.isAd ? (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <NavLink
                activeStyle={{ color: "skyblue" }}
                exact
                strict
                to="/"
                className="m-4 navbar-brand"
                >
                  <Image
                    className="mr-3"
                  width="32"
                  height="32"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKWX3SpqrJ_PfusnsexLllwUGF0UD8hF7EdAyKaRLvVXihJDQ3xw3o4g&usqp=CAU"
                  roundedCircle
                />
                <b>Trainer Bewertung</b>
              </NavLink>
              {this.state.isOnline ? (
                <>
                  <Button
                    onClick={this.onSignOut.bind(this)}
                    variant={
                      this.state.isOnline
                        ? "outline-danger"
                        : "outline-primary"
                    }
                    className="m-1 mr-5"
                  >
                    <b>
                      {this.state.isOnline ? "Ausloggen" : "Einloggen"}
                    </b>
                  </Button>{" "}
                  <Navbar.Text>
                    Angemeldet als :{" "}
                    <b>
                      <a className="text-success">
                        {this.state.username}
                      </a>
                    </b>
                  </Navbar.Text>
                </>
              ) : null}
            </>
          ) : null}
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav justify-content-end mx-auto col-12">
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder "
                  to={{
                    pathname: "/chart_all",
                    state: {
                      email: this.state.email,
                      trainer: this.state.email,
                      forms: this.state.forms,
                    },
                  }}
                >
                  Gesamtdiagramm
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder "
                  to={{
                    pathname: "/c_list_trainer",
                    state: {
                      email: this.state.email,
                    },
                  }}
                >
                  Kurse
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </>
    ) : null}

    {this.state.isOnline && this.state.isAd ? (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavLink
            activeStyle={{ color: "skyblue" }}
            exact
            strict
            to="/"
            className="m-4 navbar-brand"
            >
              <Image
                className="mr-3"
              width="32"
              height="32"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKWX3SpqrJ_PfusnsexLllwUGF0UD8hF7EdAyKaRLvVXihJDQ3xw3o4g&usqp=CAU"
              roundedCircle
            />
            <b>Trainer Bewertung</b>
          </NavLink>
          <Navbar.Text>
            Angemeldet als :{" "}
            <b>
              <a className="text-success">{this.state.username}</a>
            </b>
          </Navbar.Text>

          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav justify-content-end mx-auto col-12">
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder text-white50"
                  to={{
                    pathname: "/f_list",
                    state: {
                      forms: this.state.forms,
                    },
                  }}
                >
                  Formulare
                </NavLink>
              </li>

              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  to="/c_list_admin"
                  className="nav-link font-weight-bolder text-white50"
                >
                  Kurse
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  to="/u_list"
                  className="nav-link font-weight-bolder text-white50"
                >
                  Benutzer
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder text-white50"
                  to={{
                    pathname: "/l_list",
                    state: {
                      logs: this.state.logs
                    },
                  }}
                >
                  Logs
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder text-white50"
                  to={{
                    pathname: "/c_pre_gate",
                    state: {
                      forms: this.state.forms,
                      users: this.state.users,
                    },
                  }}
                >
                  Diagramme
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </>
    ) : null}

    {this.state.isOnline && this.state.isAd ? (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
        >
          {this.state.isAd ? (
            <>
              <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-start">
                {this.state.isOnline ? (
                  <>
                    <Button
                      onClick={this.onSignOut.bind(this)}
                      variant={
                        this.state.isOnline
                          ? "outline-danger"
                          : "outline-primary"
                      }
                      className="mx-1"
                    >
                      <b>
                        {this.state.isOnline
                          ? "Ausloggen"
                          : "Einloggen"}
                      </b>
                    </Button>{" "}
                  </>
                ) : null}
                <>
                  {/* <Button
                    className="mx-1"
                    onClick={this.studentHandle.bind(this)}
                    variant={
                      this.state.isStudent
                        ? "outline-primary"
                        : "outline-danger"
                    }
                  >
                    <b>
                      {this.state.isStudent ? "Student" : "Student"}
                    </b>
                  </Button>{" "}
                  <Button
                    className="mx-1"
                    onClick={this.trainerHandle.bind(this)}
                    variant={
                      this.state.isTrainer
                        ? "outline-primary"
                        : "outline-danger"
                    }
                  >
                    <b>
                      {this.state.isTrainer ? "Trainer" : "Trainer"}
                    </b>
                  </Button>{" "} */}
                  <Button
                    disabled
                    className="mx-1"
                    onClick={this.adminHandle.bind(this)}
                    variant={
                      this.state.isAd
                        ? "outline-primary"
                        : "outline-danger"
                    }
                  >
                    <b>{this.state.isAd ? "Admin" : ""}</b>
                  </Button>{" "}
                </>
              </nav>
            </>
          ) : null}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="collapse navbar-collapse">
            <ul className="navbar-nav justify-content-end mx-auto col-12">
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder"
                  to={{
                    pathname: "/f_generate",
                    state: {
                      forms: this.state.forms,
                      users: this.state.users,
                    },
                  }}
                >
                  <MdFiberNew size={32} /> Formular
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  className="nav-link font-weight-bolder "
                  to={{
                    pathname: "/c_create",
                    state: {
                      state: this.state
                    },
                  }}
                >
                  <MdFiberNew size={32} /> Kurs
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold xxl">
                <NavLink
                  activeStyle={{ color: "skyblue" }}
                  exact
                  strict
                  to="/u_create"
                  className="nav-link font-weight-bolder"
                >
                  <MdFiberNew size={32} /> Benutzer
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </>
    ) : null}
  </div>
  {/* app header end */}
  {/* app router start */}

  {this.state.isStudent && this.state.isOnline ? (
    <>
      <Route path="/c_list" component={CourseList} />
      <Route path="/forms" component={Form} />
    </>
  ) : null}
  {this.state.isTrainer && this.state.isOnline ? (
    <>
      <Route path="/c_list_trainer" component={CourseListTrainer} />
      <Route path="/chart_all" component={ChartAll} />
      <Route path="/chart" component={Chart} />
    </>
  ) : null}
  {this.state.isAd && this.state.isOnline ? (
    <>
      <Route path="/c_list_admin" component={CourseListAdmin} />
      <Route path="/c_create" component={CreateCourse} />
      <Route path="/c_edit/:id" component={EditCourse} />
      <Route path="/u_create" component={CreateUser} />
      <Route path="/u_list" component={UsersList} />
      <Route path="/l_list" component={LogsList} />
      <Route path="/f_list" component={FormList} />
      <Route path="/f_generate" component={GenerateForm} />
      <Route path="/u_edit/:id" component={EditUser} />
      <Route path="/chart_admin" component={ChartAdmin} />
      <Route path="/c_pre_gate" component={ChartPreGate} />
    </>
  ) : null}
  {/* app router end */}
  <div className="justify-content-center d-flex flex-row bg-dark vh-100"></div>
</div>
)}
</>
      </Router>
    );
  }
}
