import React, {useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

import {TiUser} from "react-icons/ti";
import {RiLockPasswordLine} from "react-icons/ri";

const ResetPassword = (props) => {
    const [username, setUsername] = useState(props.username)
    const [email] = useState(props.email)
    const [password, setPassword] = useState("")
    const [role] = useState(props.role)


    const onSubmit = () => {
        let passwordHash = require("password-hash");
        let hashedPassword = passwordHash.generate(password)

        const user = {
            username: username,
            email: email,
            role: role,
            isReg: false,
            password: hashedPassword,
        };

        axios.post("http://localhost:5000/users/update/" + props.id, user)
            .then((res) => console.log(res.data))
            .catch(err => console.log(err));

        window.location.replace("/");
    }


    return (
        <div className="bg-dark">
            <br/>
            <div className="container w-50 bg-white text-center border border-dark rounded">
                <Button className="m-5" variant="info" disabled>
                    <h4>
                        <b>
                            Benutzerdaten ändern
                        </b>
                    </h4>
                </Button>

                <div className="row justify-content-center">

                    <div className="form-group  col-sm-12 col-md-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text"><TiUser/></label>
                            </div>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group  col-sm-12 col-md-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text"><RiLockPasswordLine/></label>
                            </div>
                            <input
                                type="password"
                                required
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-group col-12 my-5 mb-5">

                        <Button variant="outline-info" onClick={() => onSubmit()}>Änderung Speichern</Button>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default ResetPassword;