import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"


import "bootstrap/dist/css/bootstrap.min.css"
import {MdFiberNew} from "react-icons/md"
import {TiUser} from "react-icons/ti"
import {RiLockPasswordLine, RiLoginCircleLine} from "react-icons/ri"
import axios from "axios"

import CreateUser from "./components/user/create-user.component"
import CreateCourse from "./components/course/create-course.component"

import CourseListAdmin from "./components/course/course-list-admin.component"
import CourseListTrainer from "./components/course/course-list-trainer.component"
import CourseList from "./components/course/course-list.component"
import VoteList from "./components/vote/vote-list.component"
import UsersList from "./components/user/users-list.component"

import Vote from "./components/vote/vote.component"
import Chart from "./components/chart/chart.component"
import ChartAll from "./components/chart/chart-all.component"
import ChartAdmin from "./components/chart/chart-admin.component"
import ChartCompare from "./components/chart/chart-compare.component"

import EditUser from "./components/user/edit-users.component"
import EditCourse from "./components/course/edit-courses.component"
import ResetPassword from "./components/user/reset-password.component"
import {Nav, Navbar, Button, Image, Collapse} from "react-bootstrap"


function Help() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <br/>
            <Button
                variant={open ? "secondary" : "danger"}
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
            >
                <b>Hilfe</b>
            </Button>
            <br/>
            <br/>
            <Collapse in={open}>
                <div id="collapse-text">Wenden Sie sich bitte an die Leitung.</div>
            </Collapse>
            <br/>
        </>
    )
}

const App = () => {
    const [isOnline, setIsOnline] = useState(localStorage.getItem("isOnline"))
    const [isStudent, setIsStudent] = useState(localStorage.getItem("isStudent"))
    const [isTrainer, setIsTrainer] = useState(localStorage.getItem("isTrainer"))
    const [isAd, setIsAd] = useState(localStorage.getItem("isAd"))

    const [users, setUsers] = useState([])
    const [courses, setCourses] = useState([])
    const [votes, setVotes] = useState([])

    const [id, setId] = useState(localStorage.getItem("id"))
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [password, setPassword] = useState(localStorage.getItem("password"))
    const [role, setRole] = useState(localStorage.getItem("role"))
    const [isReg, setIsReg] = useState(false)



    useEffect(() =>
    {

         axios
            .get("http://localhost:5000/users")
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

         axios
            .get("http://localhost:5000/votes")
            .then((response) => {
                setVotes(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

         axios
            .get("http://localhost:5000/courses")
            .then((response) => {
                setCourses(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const loginHandle = () => {
        setIsOnline(true)
        localStorage.setItem("isOnline", true)
    }

    const onSignOut = () => {
        localStorage.clear()
        window.location = "/"
    }


    const studentHandle = () => {
        loginHandle()
        setIsStudent(isStudent ? false : true)
        localStorage.setItem("isStudent", isStudent)

    }

    const trainerHandle = () => {
        loginHandle()
        setIsTrainer(isTrainer ? false : true)
        localStorage.setItem("isTrainer", isTrainer )
    }

    const adminHandle = () => {
        loginHandle()
        setIsAd(isAd ? false : true)
        localStorage.setItem("isAd", isAd)
    }


    const onSubmit = () => {
        let passwordHash = require("password-hash")

        users.map((user) => {
            if (
                user.email === email.trim() ||
                user.username === email.trim()
            ) {
                console.log("Login successful")
                if (true === passwordHash.verify(password, user.password)) {
                    console.log("Password successful")

                    localStorage.setItem("id", user._id)
                    localStorage.setItem("username", user.username)
                    localStorage.setItem("email", user.email)
                    localStorage.setItem("password", user.password)
                    setId(user._id)
                    setUsername(user.username)
                    setEmail(user.email)
                    setPassword(user.password)
                    setIsReg(user.isReg)

                    if (user.role === "student") {

                        setRole(user.role)
                        studentHandle()


                    }
                    if (user.role === "trainer") {

                        setRole(user.role)
                        trainerHandle()

                    }
                    if (user.role === "admin") {

                        setRole(user.role)
                        adminHandle()

                    }
                }
                if (true !== passwordHash.verify(password, user.password)) {
                    console.log("Password failed")
                }
            }
        })

    }

    return (

        <Router>
            <>
                {isReg ? (
                    <>
                        <ResetPassword id={id} username={username} email={email} role={role} />
                        <div className="justify-content-center d-flex flex-row bg-dark vh-100"></div>
                    </>
                ) : (
                    <div className="App">

                        <div className="App-header ">

                            {!isOnline ? (

                                <div className="col-12 text-center bg-dark">
                                    <br/>
                                    <div
                                        className="container text-center bg-secondary w-100 border border-dark rounded-circle">
                                        <div
                                            className="container text-center text-white font-weight-bolder bg-dark w-75 my-5 px-5 border border-dark rounded-circle ">
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
                                                            onChange={onChangeEmail}
                                                        />
                                                    </div>
                                                </div>

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
                                                            onChange={onChangePassword}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group col-12 mb-5 m-3">
                                                    <Button
                                                        className="m-1"
                                                        variant="secondary"
                                                        onClick={onSubmit}
                                                    >
                                                        <h5>
                                                            <b><RiLoginCircleLine/> login</b>
                                                        </h5>
                                                    </Button>
                                                </div>

                                            </div>


                                            <Help className="text-white"/>


                                        </div>

                                    </div>
                                </div>
                            ) : null}

                            {isOnline && isStudent ? (
                                <>
                                    <Navbar
                                        collapseOnSelect
                                        expand="lg"
                                        bg="dark"
                                        variant="dark"
                                        className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
                                    >
                                        {isStudent ? (
                                            <>
                                                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                                <NavLink
                                                    activeStyle={{color: "skyblue"}}
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
                                                {isOnline ? (
                                                    <>
                                                        <Button
                                                            onClick={onSignOut}
                                                            variant={
                                                                isOnline
                                                                    ? "outline-danger"
                                                                    : "outline-primary"
                                                            }
                                                            className="m-1 mr-3"
                                                        >
                                                            <b>
                                                                {isOnline ? "Ausloggen" : "Einloggen"}
                                                            </b>
                                                        </Button>{" "}
                                                    </>
                                                ) : null}
                                                <>
                                                    <Navbar.Text>
                                                        Angemeldet als :{" "}
                                                        <b>
                                                            <a className="text-success">
                                                                {username}
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
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder "
                                                        to={{
                                                            pathname: "/c_list",

                                                            state: {
                                                                email: email,
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
                            {isOnline && isTrainer ? (
                                <>
                                    <Navbar
                                        collapseOnSelect
                                        expand="lg"
                                        bg="dark"
                                        variant="dark"
                                        className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
                                    >
                                        {isTrainer ? (
                                            <>
                                                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                                <NavLink
                                                    activeStyle={{color: "skyblue"}}
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
                                                {isOnline ? (
                                                    <>
                                                        <Button
                                                            onClick={onSignOut}
                                                            variant={
                                                                isOnline
                                                                    ? "outline-danger"
                                                                    : "outline-primary"
                                                            }
                                                            className="m-1 mr-5"
                                                        >
                                                            <b>
                                                                {isOnline ? "Ausloggen" : "Einloggen"}
                                                            </b>
                                                        </Button>{" "}
                                                        <Navbar.Text>
                                                            Angemeldet als :{" "}
                                                            <b>
                                                                <a className="text-success">
                                                                    {username}
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
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder "
                                                        to={{
                                                            pathname: "/chart_all",
                                                            state: {
                                                                email: email,
                                                                trainer: email,
                                                                votes: votes,
                                                            },
                                                        }}
                                                    >
                                                        Gesamtdiagramm
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item font-weight-bold xxl">
                                                    <NavLink
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder "
                                                        to={{
                                                            pathname: "/c_list_trainer",
                                                            state: {
                                                                email: email,
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

                            {isOnline && isAd ? (
                                <>
                                    <Navbar
                                        collapseOnSelect
                                        expand="lg"
                                        bg="dark"
                                        variant="dark"
                                        className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
                                    >
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                                        <NavLink
                                            activeStyle={{color: "skyblue"}}
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
                                                <a className="text-success">{username}</a>
                                            </b>
                                        </Navbar.Text>

                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <ul className="navbar-nav justify-content-end mx-auto col-12">
                                                <li className="nav-item font-weight-bold xxl">
                                                    <NavLink
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder text-white50"
                                                        to={{
                                                            pathname: "/f_list",
                                                            state: {
                                                                votes: votes,
                                                            },
                                                        }}
                                                    >
                                                        Bewertungen
                                                    </NavLink>
                                                </li>

                                                <li className="nav-item font-weight-bold xxl">
                                                    <NavLink
                                                        activeStyle={{color: "skyblue"}}
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
                                                        activeStyle={{color: "skyblue"}}
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
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder text-white50"
                                                        to={{
                                                            pathname: "/chart_compare",
                                                            state: {
                                                                votes: votes,
                                                                users: users,
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

                            {isOnline && isAd ? (
                                <>
                                    <Navbar
                                        collapseOnSelect
                                        expand="lg"
                                        bg="dark"
                                        variant="dark"
                                        className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center"
                                    >
                                        {isAd ? (
                                            <>
                                                <nav
                                                    className="navbar navbar-dark bg-dark navbar-expand-md justify-content-start">

                                                    {isOnline ? (
                                                        <>
                                                            <Button
                                                                onClick={onSignOut}
                                                                variant={
                                                                    isOnline
                                                                        ? "outline-danger"
                                                                        : "outline-primary"
                                                                }
                                                                className="mx-1"
                                                            >
                                                                <b>
                                                                    {isOnline
                                                                        ? "Ausloggen"
                                                                        : "Einloggen"}
                                                                </b>
                                                            </Button>{" "}
                                                        </>
                                                    ) : null}
                                                    <>
                                                        <Button
                                                            disabled
                                                            className="mx-1"
                                                            onClick={adminHandle}
                                                            variant={
                                                                isAd
                                                                    ? "outline-primary"
                                                                    : "outline-danger"
                                                            }
                                                        >
                                                            <b>{isAd ? "Admin" : ""}</b>
                                                        </Button>{" "}
                                                    </>
                                                </nav>
                                            </>
                                        ) : null}

                                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                                        <Navbar.Collapse className="collapse navbar-collapse">
                                            <ul className="navbar-nav justify-content-end mx-auto col-12">

                                                <li className="nav-item font-weight-bold xxl">
                                                    <NavLink
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        className="nav-link font-weight-bolder "
                                                        to={{
                                                            pathname: "/c_create",
                                                            state: {},
                                                        }}
                                                    >
                                                        <MdFiberNew size={28}/> Kurs
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item font-weight-bold xxl">
                                                    <NavLink
                                                        activeStyle={{color: "skyblue"}}
                                                        exact
                                                        strict
                                                        to="/u_create"
                                                        className="nav-link font-weight-bolder"
                                                    >
                                                        <MdFiberNew size={28}/> Benutzer
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </>
                            ) : null}
                        </div>

                        {isStudent && isOnline ? (

                            <>
                                <Route path="/c_list" component={CourseList}/>
                                <Route path="/votes" component={Vote}/>
                            </>
                        ) : null}

                        {isTrainer && isOnline ? (
                            <>
                                <Route path="/c_list_trainer" component={CourseListTrainer}/>
                                <Route path="/chart_all" component={ChartAll}/>
                                <Route path="/chart" component={Chart}/>
                            </>
                        ) : null}

                        {isAd && isOnline ? (
                            <>
                                <Route path="/c_list_admin" component={CourseListAdmin}/>
                                <Route path="/c_create" component={CreateCourse}/>
                                <Route path="/c_edit/:id" component={EditCourse}/>
                                <Route path="/u_create" component={CreateUser}/>
                                <Route path="/u_list" component={UsersList}/>
                                <Route path="/f_list" component={VoteList}/>
                                <Route path="/u_edit/:id" component={EditUser}/>
                                <Route path="/chart_admin" component={ChartAdmin}/>
                                <Route path="/chart_compare" component={ChartCompare}/>
                            </>
                        ) : null}

                        <div className="justify-content-center d-flex flex-row bg-dark vh-100"></div>

                    </div>
                )}
            </>
        </Router>
    )
}

export default App








