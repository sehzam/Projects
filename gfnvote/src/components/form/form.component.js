import React, { useState, useEffect } from "react";
import axios from "axios";

import { IoIosRocket, IoIosFlag } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Title = (params) => {
  return (
    <>
      <div className="row bg-dark text-center">
        <hr />

        <div className="col-10">
          <div className="alert alert-primary" role="alert">
            <h1 className="font-weight-bolder text-dark">Trainerbewertung</h1>

            <p className="text-dark">
              Zur Verbesserung der Qualität unserer Kurse bitten wir Sie hier um
              Ihre Einschätzung.
              <br />
              Sollten Sie mit einzelnen Punkten <b>unzufrieden</b> gewesen sein,
              <br />
              wären wir dankbar für eine kurze Stellungnahme am Ende des
              Fragebogens.
            </p>
            <p className="text-dark">
              Natürlich freuen wir uns auch über <b>positive</b> Kommentare!
            </p>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

const Formular = (props) => {
  const [email, setEmail] = useState(props.location.state.email)
  const [trainer, setTrainer] = useState(props.location.state.trainer)
  const [courseId, setCourseId] = useState(props.location.state.id)
  const [good, setGood] = useState("")
  const [bad, setBad] = useState("")
  const [q1, setQ1] = useState("1")
  const [q2, setQ2] = useState("1")
  const [q3, setQ3] = useState("1")
  const [q4, setQ4] = useState("1")
  const [q5, setQ5] = useState("1")
  const [q6, setQ6] = useState("1")
  const [q7, setQ7] = useState("1")
  const [q8, setQ8] = useState("1")
  const [q9, setQ9] = useState("1")
  const [q10, setQ10] = useState("1")
  const [q11, setQ11] = useState("1")
  const [forms, setForms] = useState("1")
  const [courses, setCourses] = useState("1")

  useEffect( () => {
    const result =  axios(
      'http://localhost:5000/courses',
    );
    setCourses(result.data);
  },[]);
  useEffect( () => {
    const result =  axios(
      'http://localhost:5000/forms',
    );
    setForms(result.data);
  },[]);





  const onSubmit = (e) =>{
    e.preventDefault();
    const form = {
      courseId: courseId,
      trainer: trainer,
      email: email,
      good: good,
      bad: bad,
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      q6: q6,
      q7: q7,
      q8: q8,
      q9: q9,
      q10: q10,
      q11: q11,
  }
  console.log(form) 
    axios
      .post("http://localhost:5000/forms/add/", form)
      .then((result) => console.log( "x" +result.data));

    window.location = "/";
  }

  
    return (
      <div className="bg-dark">
        <Title />
        <br />
        <div className="container alert alert-secondary text-center border rounded">
          <div className="container bg-dark text-white border rounded ">
            <br />
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 text-center">
                <div className="alert alert-success" role="alert">

                  <div className="row">
<div className="col-3">

                    <GiOpenBook />
</div>
                    <h5 className="col-6 font-weight-bolder text-dark text-left">
                      {props.location.state.course}
                    </h5>
                    <div className="col-3">


</div>
                  </div>
                  
                  <div className="row">
                  <div className="col-3">

                  <BsPersonFill />
</div>
                    
                    <h5 className="col-6 font-weight-bolder text-dark text-left">
                      {props.location.state.trainer.substring(
              "0",
              `${trainer.indexOf("@")}`
            )}
                    </h5>
                    <div className="col-3">

                  
</div>
                  </div>
                  
                  <div className="row">
                  <div className="col-3">

                  <IoIosRocket />
</div>
                    
                    <h5 className="col-6 font-weight-bolder text-dark text-left">
                      {props.location.state.begin.substring(0, 10)}
                    </h5>
                    <div className="col-3">

                  
</div>
                  </div>
                  
                  <div className="row">
                  <div className="col-3">

                  <IoIosFlag />
</div>
                    <h5 className="col-6 font-weight-bolder text-dark text-left">
                      {props.location.state.end.substring(0, 10)}
                    </h5>
                    <div className="col-3">

                  
</div>
                  </div>
                
                </div>
                <div className="col-3"></div>
              </div>
              <div className="col-3"></div>
            </div>

            <hr />
            <div className="row mx-5">
              <div className="col-3"></div>
              <div className="col-6 text-center">
                <div className="alert alert-secondary" role="alert">
                  <h5>
                    <b>Methodik & Didaktik</b>
                  </h5>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Die zur Verfügung stehende{" "}
                  <b className="text-success">Lernzeit</b> wurde gut genutzt ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ1(e.target.value)}
                    checked={q1 === "5"}
                    inline
                    name="radio1"
                    label="5"
                    value="5"
                    type="radio"
                    id="q1"
                  />
                  <Form.Check
                    onChange={(e) => setQ1(e.target.value)}
                    checked={q1 === "4"}
                    inline
                    name="radio1"
                    label="4"
                    value="4"
                    type="radio"
                    id="q1"
                  />
                  <Form.Check
                    onChange={(e) => setQ1(e.target.value)}
                    checked={q1 === "3"}
                    inline
                    name="radio1"
                    label="3"
                    value="3"
                    type="radio"
                    id="q1"
                  />
                  <Form.Check
                    onChange={(e) => setQ1(e.target.value)}
                    checked={q1 === "2"}
                    inline
                    name="radio1"
                    label="2"
                    value="2"
                    type="radio"
                    id="q1"
                  />
                  <Form.Check
                    onChange={(e) => setQ1(e.target.value)}
                    checked={q1 === "1"}
                    inline
                    name="radio1"
                    label="1"
                    value="1"
                    type="radio"
                    id="q1"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Die <b className="text-success">Unterrichtsthemen</b> wurden
                  verständlich vermittelt ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio ">
                  <Form.Check
                    onChange={(e) => setQ2(e.target.value)}
                    checked={q2 === "5"}
                    inline
                    name="radio2"
                    label="5"
                    value="5"
                    type="radio"
                    id="q2"
                  />
                  <Form.Check
                    onChange={(e) => setQ2(e.target.value)}
                    checked={q2 === "4"}
                    inline
                    name="radio2"
                    label="4"
                    value="4"
                    type="radio"
                    id="q2"
                  />
                  <Form.Check
                    onChange={(e) => setQ2(e.target.value)}
                    checked={q2 === "3"}
                    inline
                    name="radio2"
                    label="3"
                    value="3"
                    type="radio"
                    id="q2-radio"
                  />
                  <Form.Check
                    onChange={(e) => setQ2(e.target.value)}
                    checked={q2 === "2"}
                    inline
                    name="radio2"
                    label="2"
                    value="2"
                    type="radio"
                    id="q2"
                  />
                  <Form.Check
                    onChange={(e) => setQ2(e.target.value)}
                    checked={q2 === "1"}
                    inline
                    name="radio2"
                    label="1"
                    value="1"
                    type="radio"
                    id="q2"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Die <b className="text-success">Lerninhalte</b> wurden
                  praxisnah erläutert ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ3(e.target.value)}
                    checked={q3 === "5"}
                    name="radio3"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q3"
                  />
                  <Form.Check
                    onChange={(e) => setQ3(e.target.value)}
                    checked={q3 === "4"}
                    name="radio3"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q3"
                  />
                  <Form.Check
                    onChange={(e) => setQ3(e.target.value)}
                    checked={q3 === "3"}
                    name="radio3"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q3"
                  />
                  <Form.Check
                    onChange={(e) => setQ3(e.target.value)}
                    checked={q3 === "2"}
                    name="radio3"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q3"
                  />
                  <Form.Check
                    onChange={(e) => setQ3(e.target.value)}
                    checked={q3 === "1"}
                    name="radio3"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q3"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Bei Fragen oder Problemen gab es{" "}
                  <b className="text-success">Hilfestellung</b> ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ4(e.target.value)}
                    checked={q4 === "5"}
                    name="radio4"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q4"
                  />
                  <Form.Check
                    onChange={(e) => setQ4(e.target.value)}
                    checked={q4 === "4"}
                    name="radio4"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q4"
                  />
                  <Form.Check
                    onChange={(e) => setQ4(e.target.value)}
                    checked={q4 === "3"}
                    name="radio4"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q4"
                  />
                  <Form.Check
                    onChange={(e) => setQ4(e.target.value)}
                    checked={q4 === "2"}
                    name="radio4"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q4"
                  />
                  <Form.Check
                    onChange={(e) => setQ4(e.target.value)}
                    checked={q4 === "1"}
                    name="radio4"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q4"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Zur <b className="text-success">Wissensvermittlung</b> wurden
                  Medien sinnvoll genutzt ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ5(e.target.value)}
                    checked={q5 === "5"}
                    name="radio5"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q5"
                  />
                  <Form.Check
                    onChange={(e) => setQ5(e.target.value)}
                    checked={q5 === "4"}
                    name="radio5"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q5"
                  />
                  <Form.Check
                    onChange={(e) => setQ5(e.target.value)}
                    checked={q5 === "3"}
                    name="radio5"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q5"
                  />
                  <Form.Check
                    onChange={(e) => setQ5(e.target.value)}
                    checked={q5 === "2"}
                    name="radio5"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q5"
                  />
                  <Form.Check
                    onChange={(e) => setQ5(e.target.value)}
                    checked={q5 === "1"}
                    name="radio5"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q5"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Die <b className="text-success">Lernziele</b> klar erläutert ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ6(e.target.value)}
                    checked={q6 === "5"}
                    name="radio6"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q6"
                  />
                  <Form.Check
                    onChange={(e) => setQ6(e.target.value)}
                    checked={q6 === "4"}
                    name="radio6"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q6"
                  />
                  <Form.Check
                    onChange={(e) => setQ6(e.target.value)}
                    checked={q6 === "3"}
                    name="radio6"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q6"
                  />
                  <Form.Check
                    onChange={(e) => setQ6(e.target.value)}
                    checked={q6 === "2"}
                    name="radio6"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q6"
                  />
                  <Form.Check
                    onChange={(e) => setQ6(e.target.value)}
                    checked={q6 === "1"}
                    name="radio6"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q6"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-3"></div>
              <div className="col-6 text-center">
                <div className="alert alert-secondary" role="alert">
                  <h5>
                    <b>Soziale Kompotenz</b>
                  </h5>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                Ist in<b className="text-success"> schwierigen Situationen </b> 
                  gut umgegangen worden?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ7(e.target.value)}
                    checked={q7 === "5"}
                    name="radio7"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q7"
                  />
                  <Form.Check
                    onChange={(e) => setQ7(e.target.value)}
                    checked={q7 === "4"}
                    name="radio7"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q7"
                  />
                  <Form.Check
                    onChange={(e) => setQ7(e.target.value)}
                    checked={q7 === "3"}
                    name="radio7"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q7"
                  />
                  <Form.Check
                    onChange={(e) => setQ7(e.target.value)}
                    checked={q7 === "2"}
                    name="radio7"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q7"
                  />
                  <Form.Check
                    onChange={(e) => setQ7(e.target.value)}
                    checked={q7 === "1"}
                    name="radio7"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q7"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Ist der Trainer{" "}
                  <b className="text-success">motiviert und motivierend</b> ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ8(e.target.value)}
                    checked={q8 === "5"}
                    name="radio8"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q8"
                  />
                  <Form.Check
                    onChange={(e) => setQ8(e.target.value)}
                    checked={q8 === "4"}
                    name="radio8"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q8"
                  />
                  <Form.Check
                    onChange={(e) => setQ8(e.target.value)}
                    checked={q8 === "3"}
                    name="radio8"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q8"
                  />
                  <Form.Check
                    onChange={(e) => setQ8(e.target.value)}
                    checked={q8 === "2"}
                    name="radio8"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q8"
                  />
                  <Form.Check
                    onChange={(e) => setQ8(e.target.value)}
                    checked={q8 === "1"}
                    name="radio8"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q8"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Engagierte{" "}
                  <b className="text-success">Unterrichtsgestaltung </b> angewendet ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ9(e.target.value)}
                    checked={q9 === "5"}
                    name="radio9"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q9"
                  />
                  <Form.Check
                    onChange={(e) => setQ9(e.target.value)}
                    checked={q9 === "4"}
                    name="radio9"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q9"
                  />
                  <Form.Check
                    onChange={(e) => setQ9(e.target.value)}
                    checked={q9 === "3"}
                    name="radio9"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q9"
                  />
                  <Form.Check
                    onChange={(e) => setQ9(e.target.value)}
                    checked={q9 === "2"}
                    name="radio9"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q9"
                  />
                  <Form.Check
                    onChange={(e) => setQ9(e.target.value)}
                    checked={q9 === "1"}
                    name="radio9"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q9"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-left">
                <h5>
                  Herrschte{" "}
                  <b className="text-success">respekt</b>voller Umgang ?
                </h5>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ10(e.target.value)}
                    checked={q10 === "5"}
                    name="radio10"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q10"
                  />
                  <Form.Check
                    onChange={(e) => setQ10(e.target.value)}
                    checked={q10 === "4"}
                    name="radio10"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q10"
                  />
                  <Form.Check
                    onChange={(e) => setQ10(e.target.value)}
                    checked={q10 === "3"}
                    name="radio10"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q10"
                  />
                  <Form.Check
                    onChange={(e) => setQ10(e.target.value)}
                    checked={q10 === "2"}
                    name="radio10"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q10"
                  />
                  <Form.Check
                    onChange={(e) => setQ10(e.target.value)}
                    checked={q10 === "1"}
                    name="radio10"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q10"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-5">
              <div className="col-8 text-center">
                <div className="alert alert-secondary" role="alert">
                  <h5>
                    <b className="text-dark">Gesamt</b>
                  </h5>
                </div>
              </div>

              <div className="col-4">
                <div key="inline-radio">
                  <Form.Check
                    onChange={(e) => setQ11(e.target.value)}
                    checked={q11 === "5"}
                    name="radio11"
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    id="q11"
                  />
                  <Form.Check
                    onChange={(e) => setQ11(e.target.value)}
                    checked={q11 === "4"}
                    name="radio11"
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    id="q11"
                  />
                  <Form.Check
                    onChange={(e) => setQ11(e.target.value)}
                    checked={q11 === "3"}
                    name="radio11"
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    id="q11"
                  />
                  <Form.Check
                    onChange={(e) => setQ11(e.target.value)}
                    checked={q11 === "2"}
                    name="radio11"
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    id="q11"
                  />
                  <Form.Check
                    onChange={(e) => setQ11(e.target.value)}
                    checked={q11 === "1"}
                    name="radio11"
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    id="q11"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    Ich empfehle den Trainer weiter, weil:
                  </Form.Label>
                  <Form.Control
                    placeholder="Geben Sie ein Feedback ..."
                    value={good}
                    onChange={(e) => setGood(e.target.value)}
                    id="good"
                    name="good"
                    as="textarea"
                    rows="5"
                  />
                </Form.Group>
              </div>

              <div className="col-6">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    Ich empfehle <u><b className="text-danger">nicht</b></u> den Trainer weiter, weil:
                  </Form.Label>
                  <Form.Control
                    placeholder="Geben Sie ein Feedback ..."
                    value={bad}
                    onChange={(e) => setBad(e.target.value)}
                    id="bad"
                    name="bad"
                    as="textarea"
                    rows="5"
                  />
                </Form.Group>
              </div>
            </div>

            <hr />
            <div className="col">
              <div className="form-group">
              <NavLink
        className="col-6"
        to={{
          pathname: "/c_list",
          state: {
            username: props.location.state.username,
            email: props.location.state.email,
            role: props.location.state.role,
            isOnline: props.location.state.isOnline,
            isStudent: props.location.state.isStudent,
            isTrainer: props.location.state.isTrainer,
            isAd: props.location.state.isAd,
          },
        }}
      >
         
      
                <Button
                  className="m-2 "
                  variant="outline-success"
                  onClick={onSubmit}
                >
                  <h5>
                    <b>senden</b>
                  </h5>
                </Button>
                </NavLink>
              </div>
            </div>
            <hr />
          </div>
        </div>-
      </div>
    )
  
}
export default Formular;