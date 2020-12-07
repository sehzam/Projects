import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { generate } from "password-hash";
const GenerateForm = (props) => {
  const [trainer, setTrainer] = useState("")
  const [users, setUsers] = useState(props.location.state.users)
  const [forms, setForms] = useState([])
  const [trainerList, setTrainerList] = useState([])
  const [count1, setCount1] = useState(0)


useEffect(()=>{
  if(count1 < 1 ){
    setCount1(count1 + 1)
    
    users.map((f) => {
      if (f.role === "trainer") {
        trainerList.push(f.email);
      }
    });
  }
    
  
}, [])
    
  const reset = (e) => {
    for (let i = 0; i < forms.length; i++) {
      axios
        .delete("http://localhost:5000/forms/")
        .then((res) => console.log(res.data)) 
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < 10; i++) {
      const form = {
        email: "test",
        trainer: `${trainer}`,
        courseId: "test",
        good: "",
        bad: "",
        q1: `${Math.floor(Math.random() * Math.floor(6))}`,
        q2: `${Math.floor(Math.random() * Math.floor(6))}`,
        q3: `${Math.floor(Math.random() * Math.floor(6))}`,
        q4: `${Math.floor(Math.random() * Math.floor(6))}`,
        q5: `${Math.floor(Math.random() * Math.floor(6))}`,
        q6: `${Math.floor(Math.random() * Math.floor(6))}`,
        q7: `${Math.floor(Math.random() * Math.floor(6))}`,
        q8: `${Math.floor(Math.random() * Math.floor(6))}`,
        q9: `${Math.floor(Math.random() * Math.floor(6))}`,
        q10: `${Math.floor(Math.random() * Math.floor(6))}`,
        q11: `${Math.floor(Math.random() * Math.floor(6))}`,
      };
      
      axios
        .post("http://localhost:5000/forms/add", form)
        .then(console.log("Form added"));
    }
  }

  
    return (
      <div className="bg-dark">
        <br/>
        <div className="container w-100 bg-white text-center border border-dark rounded">
          
        <Button className="mt-5 mb-4"variant="info" disabled>
        <h4>
        <b>
            Formular erstellen
            </b>
        </h4>
        </Button>
          
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-sm-6 col-6">
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
                    value={trainer}
                    onChange={(e) => setTrainer(e.target.value)}
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

              <div className="form-group col-12 my-3">
              <Button variant="outline-success" onChange={() => generate()}>
                 10+ <b>GENERATE</b>
              </Button>
              </div>
            </div>
          

          <div className="form-group col-12 my-3">
                
                <Button variant="outline-danger" onChange={() => reset()}>
                Form <b>RESET</b>
              </Button>
              </div>
        </div>
      </div>
    );
  }

export default GenerateForm;