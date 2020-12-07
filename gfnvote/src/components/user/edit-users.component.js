import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      email: "",
      password: "",
      hashedPassword: "",
      role: "student",
      isReg: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          hashedPassword: response.data.password,
          password: response.data.password,
          role: response.data.role,
          isReg: response.data.isReg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.username);
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }
  onChangeIsReg() {
    this.setState((prevState) => ({
      isReg: !prevState.isReg,
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    var passwordHash = require("password-hash");
    var password = this.state.password;
    var hashedPassword = password;
    if(password !== this.state.hashedPassword){
    hashedPassword = passwordHash.generate(password)

    }
    const user = {
      username: this.state.username,
      email: this.state.email,
      role: this.state.role,
      isReg: this.state.isReg,
      password: hashedPassword,
    };

    console.log(user);

    axios
      .post(
        "http://localhost:5000/users/update/" + this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
      email: "",
      password: "",
      role: "",
      isReg: false,
    });
    window.location = "/";  }

  render() {
    return (
<div className="bg-dark">
        <br/>
      <div className="container w-50 bg-white text-center border border-dark rounded">
      <Button className="my-5"variant="outline-info">
        <h2>
        <b>
            Benutzer ändern
            </b>
        </h2>
        </Button>
        
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
                  value={this.state.username}
                  onChange={this.onChangeUsername.bind(this)}
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
                  value={this.state.email}
                  onChange={this.onChangeEmail.bind(this)}
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
                  value={this.state.password}
                  onChange={this.onChangePassword.bind(this)}
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
                  value={this.state.role}
                  onChange={this.onChangeRole.bind(this)}
                >
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                  <option selected value="student">
                    Student
                  </option>
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
                  value={this.state.isReg}
                  onChange={this.onChangeIsReg.bind(this)}
                >
                  <option value={false}>false</option>
                  <option value={true}>true</option>
                </select>
              </div>
            </div>

            <div className="form-group col-12 my-5 mb-5">

            <Button variant="outline-info" onClick={this.onSubmit.bind(this)}>Änderung Speichern</Button>
            </div>
          </div>
        
      </div>
      </div>
    );
  }
}
