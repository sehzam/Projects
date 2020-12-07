import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ChartAdmin from "./chart-admin.component";
const ChartPreGate = (props) => {
  const [trainer1, setTrainer1] = useState("")
  const [trainer2, setTrainer2] = useState("")
  const [users, setUsers] = useState(props.location.state.users)
  const [forms, setForms] = useState(props.location.state.forms)
  const [trainerList, setTrainerList] = useState([])


  useEffect( () => {
    const result =  axios(
      'http://localhost:5000/users',
    );
    setUsers(result.data);
  },[]);
  useEffect(()=>{
    users.map(f => {
      if (f.role === "trainer") {
        trainerList.push(f.email);
      }
    })
  },[])



    return (
      <>
        <div className="bg-dark">
          <br />
          <div className="container w-100 text-center bg-white border border-dark rounded">
          <Button className="m-5" variant="info" disabled>
        <h4>
        <b>
            Diagramme
            </b>
        </h4>
        </Button>

        <div className="row justify-content-md-center">
              <div className="col-lg-6 col-sm-12">
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Trainer 1
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    value={trainer1}
                    onChange={(e) => setTrainer1(e.target.value)}
                    id="inputGroupSelect01"
                  >
                    <option placeholder>wählen...</option>
                    {trainerList.map((list) => (
                      <option key={list._id} value={list.email}>
                        {list}
                      </option>
                    ))}
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
                      Trainer 2
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    value={trainer2}
                    onChange={(e) => setTrainer2(e.target.value)}
                    id="inputGroupSelect01"
                  >
                    <option placeholder>wählen...</option>
                    {trainerList.map((list) => (
                      <option key={list._id} value={list.email}>
                        {list}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-12 my-3">
                <div className="form-group">
                  <div className="input-group-prepend"></div>
                  <NavLink
                    activeStyle={{ color: "skyblue" }}
                    exact
                    strict
                    className="nav-link font-weight-bolder text-white"
                    to={{
                      pathname: "/chart_admin",
                      state: {
                        trainer1: trainer1,
                        trainer2: trainer2,
                        forms: forms,
                      },
                    }}
                  >
                    <Button className="mb-2" variant="outline-success">
                      <b>Vergleichen</b>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          
          </div>
        
        </div>
      </>
    );

}
export default ChartPreGate;
