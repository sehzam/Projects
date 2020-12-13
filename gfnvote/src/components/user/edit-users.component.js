import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

const EditUser = (props) => {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hashedPassword, setHashedPassword] = useState("")
    const [role, setRole] = useState("")
    const [isReg, setIsReg] = useState(false)

    useEffect(() => {
        axios
            .get("http://localhost:5000/users/" + props.match.params.id)
            .then((response) => {
                console.log(response.data.username)
                setId(response.data._id)
                setUsername(response.data.username)
                setEmail(response.data.email)
                setHashedPassword(response.data.password)
                setRole(response.data.role)
                setIsReg(response.data.isReg)
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

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
        let passwordHash = require("password-hash")
        console.log('password: ' + password);
        console.log('hashedPassword: ' + hashedPassword);
        if (!passwordHash.verify(password, hashedPassword ) && password.length != 0) {
            console.log('True ' + true);

            setHashedPassword(passwordHash.generate(password));
        }

        const user = {
            username: username,
            email: email,
            password: hashedPassword,
            role: role,
            isReg: isReg,
        };

        console.log(user);

        axios
            .post(
                "http://localhost:5000/users/update/" + props.match.params.id,
                user
            )
            .then((res) => console.log(res.data));


        window.location = "/u_list";
    }

    return (
        <div className="bg-dark">
            <br/>
            <div className="container w-50 bg-white text-center border border-dark rounded">
                <Button className="my-5" variant="outline-info">
                    <h2>
                        <b>
                            Benutzer ändern
                        </b>
                    </h2>
                </Button>
<form>
                <div className="row justify-content-center">
                    <div className="form-group col-sm-12 col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Username</label>
                            </div>
                            <input
                                autoFocus
                                type="text"
                                required
                                className="form-control"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                    </div>
                    <div className="form-group col-sm-12 col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Email</label>
                            </div>
                            <input
                                autoFocus
                                type="text"
                                required
                                className="form-control"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                    </div>

                    <div className="form-group  col-sm-12 col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Passwort</label>
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
                    <div className="form-group col-sm-3 col-md-3 col-lg-3 my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    ROLE
                                </label>
                            </div>
                            <select
                                value={role}
                                onChange={onChangeRole}
                            >
                                <option value="admin">Admin</option>
                                <option value="trainer">Trainer</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-sm-3 col-md-3 col-lg-3 my-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    isReg
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

                    <div className="form-group col-12 my-5 mb-5">

                        <Button variant="outline-info" onClick={onSubmit}>Änderung Speichern</Button>
                    </div>
                </div>
</form>
            </div>


        </div>
    );
}

export default EditUser;