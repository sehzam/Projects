import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import axios from "axios";
import {TiUser} from "react-icons/ti";
import {RiLockPasswordLine} from "react-icons/ri";
import {AiOutlineMail} from "react-icons/ai";
import {FaPassport} from "react-icons/fa";
import {GrPowerReset} from "react-icons/gr";

const CreateUser = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("student")
    const [isReg, setIsReg] = useState(false)

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeRole = (e) => {
        setRole(e.target.value)
    }
    const onChangeIsReg = (e) => {
        setIsReg(e.target.value)
    }

    const onSubmit = () => {
        let passwordHash = require("password-hash");
        let hashedPassword = passwordHash.generate(password);
        const user = {
            username: username,
            email: email,
            role: role,
            isReg: isReg,
            password: hashedPassword,
        };
        axios
            .post("http://localhost:5000/users/add", user)
            .then(console.log("User added"));

        window.location = "/u_list";
    }

    return (
        <div className="bg-dark">
            <br/>
            <div className="container w-100 bg-white text-center border border-dark rounded">
                <Button className="mt-5 mb-4" variant="info" disabled>
                    <h4>
                        <b>
                            Benutzer erstellen
                        </b>
                    </h4>
                </Button>

                <div className="row justify-content-center">
                    <div className="form-group col-sm-6 col-md-6 col-lg-6 my-3">
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
                                autoFocus
                                className="form-control"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                    </div>

                    <div className="form-group col-sm-12 col-md-6 col-lg-6 my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    <AiOutlineMail/>
                                </label>
                            </div>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                    </div>

                    <div className="form-group col-sm-6 col-md-6 col-lg-6 my-3">
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
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                    </div>


                    <div className="form-group col-3 my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    <FaPassport/>
                                </label>
                            </div>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="admin">Admin</option>
                                <option value="trainer">Trainer</option>
                                <option selected value="student">
                                    Student
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-3 my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    <GrPowerReset/>
                                </label>
                            </div>
                            <select
                                value={isReg}
                                onChange={onChangeIsReg}
                            >
                                <option value={false}>false</option>
                                <option value={true}>true</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-12 mb-4 mt-3">
                        <Button variant="outline-success" onClick={() => onSubmit()}>
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

export default CreateUser;