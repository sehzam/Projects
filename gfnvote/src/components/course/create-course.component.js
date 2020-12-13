import React, {useEffect, useState} from "react";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {Button} from "react-bootstrap";

import {Multiselect} from "multiselect-react-dropdown";

import {BsPersonFill} from "react-icons/bs";
import {IoIosPeople, IoIosRocket, IoIosFlag} from "react-icons/io";
import {GiOpenBook} from "react-icons/gi";

const CreateCourse = () => {

    const [trainerList, setTrainerList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [students] = useState([]);
    const [course, setCourse] = useState("");
    const [trainer, setTrainer] = useState("");
    const [begin, setBegin] = useState(new Date());
    const [end, setEnd] = useState(new Date());


    useEffect(() => {
        axios
            .get("http://localhost:5000/users")
            .then((response) => {

                let tList = [];
                let sList = [];

                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].role === "trainer") {
                        let result = response.data[i].email;
                        tList.push(result);
                    }
                    if (response.data[i].role === "student") {
                        sList.push(response.data[i]);
                    }
                }
                setTrainerList(tList)
                setStudentList(sList)

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onChangeCourse = (e) => {
        setCourse(e.target.value)
    }
    const onChangeTrainer = (e) => {
        setTrainer(e.target.value)
    }
    const onChangeBegin = (date) => {
        setBegin(new Date(date))
    }
    const onChangeEnd = (date) => {
        setEnd(new Date(date))
    }
    const onSelect = (selectedList, selectedItem) => {
        let arr = students;
        arr.push(selectedItem);

        setSelectedStudents(arr)
    }
    const onRemove = (selectedList, selectedItem) => {
        let arr = students;
        let index = arr.indexOf(selectedItem);
        delete arr[index];
        let filtered = arr.filter(function (el) {
            return el != null;
        });

        setSelectedStudents(filtered)
    }
    const onSubmit = () => {

        const c = {
            course: course,
            trainer: trainer,
            begin: begin.toUTCString(),
            end: end.toUTCString(),
            students: selectedStudents,
        };
        axios
            .post("http://localhost:5000/courses/add/", c)
            .then((res) => console.log(res.data))
            .then(console.log('Course Added'))
            .catch(err => {
                console.log(err);
            });


        window.location = "/";
    }

    return (
        <div className="bg-dark">
            <br/>
            <div className="container w-100 bg-white text-center border rounded">
                <Button className="mt-5 mb-2" variant="info" disabled>
                    <h4>
                        <b>
                            Kurs erstellen
                        </b>
                    </h4>
                </Button>
                <div className="row justify-content-md-center">
                    <div className="col-12 my-3">
                        <div className="input-group mt-3">
                            <div className="input-group-append">

                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect02"
                                >
                                    <IoIosPeople/>
                                </label>

                                <Multiselect
                                    selectedValues={students}
                                    options={studentList} // Options to display in the dropdown
                                    onSelect={onSelect} // Function will trigger on select event
                                    onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="email" // Property name to display in the dropdown options
                                />

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="input-group  my-3">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    <GiOpenBook/>
                                </label>
                            </div>
                            <select
                                required
                                autoFocus
                                className="custom-select"
                                value={course}
                                onChange={onChangeCourse}
                                id="inputGroupSelect00"
                            >
                                <option placeholder>wählen...</option>
                                <option value="BWL">BWL</option>
                                <option value="WISO">WISO</option>
                                <option value="GA 1">GA 1</option>
                                <option value="GA 2">GA 2</option>
                                <option value="Programmierung">Programmierung</option>
                                <option value="Netzwerk">Netzwerk</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="input-group  my-3">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    <GiOpenBook/>
                                </label>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                value={course}
                                onChange={onChangeCourse}
                            />
                        </div>
                    </div>
                    <hr/>

                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect01"
                                >
                                    <BsPersonFill/>
                                </label>
                            </div>
                            <select
                                required
                                className="custom-select"
                                value={trainer}
                                onChange={onChangeTrainer}
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

                    <div className="col-sm-12 col-12 col-md-4 col-lg-4">
                        <div className="input-group m-2">
                            <div className="input-group-append">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect03"
                                >
                                    <IoIosRocket/>
                                </label>
                            </div>
                            <DatePicker
                                selected={begin}
                                onChange={onChangeBegin}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-12 col-md-4 col-lg-4">
                        <div className="input-group m-2">
                            <div className="input-group-append">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect03"
                                >
                                    <IoIosFlag/>
                                </label>
                            </div>
                            <DatePicker
                                selected={end}
                                onChange={onChangeEnd}
                            />
                        </div>
                    </div>

                    <div className="form-group col-12 m-4">
                        <Button variant="outline-success" onClick={onSubmit}>
                            <b>

                                erstellen
                            </b>
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default CreateCourse;

