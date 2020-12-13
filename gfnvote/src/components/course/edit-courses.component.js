import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Multiselect} from "multiselect-react-dropdown";

const EditCourse = (props) => {


    const [trainerList, setTrainerList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState("");
    const [trainer, setTrainer] = useState("");
    const [begin, setBegin] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    useEffect(() => {
        axios
            .get("http://localhost:5000/courses/" + props.match.params.id)
            .then((response) => {
                setCourse(response.data.course)
                setTrainer(response.data.trainer)
                setBegin(new Date(response.data.begin))
                setEnd(new Date(response.data.end))
                setStudents(response.data.students)
                setSelectedStudents(response.data.students)
            })
            .catch((error) => {
                console.log(error);
            });

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
                        let result = response.data[i].email;
                        sList.push(response.data[i]);
                    }
                }
                setTrainerList(tList)
                setStudentList(sList)
            })
            .catch((error) => {
                console.log(error);
            })
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
            .post("http://localhost:5000/courses/update/" + props.match.params.id, c)
            .then((res) => console.log(res.data))
            .then(console.log('Course Editted'))
            .catch(err => {
                console.log(err);
            });


        window.location = "/";
    }
    return (

        <div className="bg-dark">
            <br/>
            <div className="container w-50 bg-white text-center border border-dark rounded">
                <Button className="mt-5 mb-2" variant="outline-info">
                    <h2>
                        <b>
                            Kurs ändern
                        </b>
                    </h2>
                </Button>
                <div className="row justify-content-md-center">
                    <div className="col-12 my-3">
                        <div className="input-group mt-3">
                            <div className="input-group-append">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect02"
                                >
                                    Teilnehmer
                                </label>

                                <Multiselect
                                    selectedValues={students} // Preselected value to persist in dropdown
                                    options={studentList} // Options to display in the dropdown
                                    onSelect={onSelect} // Function will trigger on select event
                                    onRemove={onRemove} // Function will trigger on remove event
                                    displayValue="email" // Property name to display in the dropdown options
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="input-group  my-3">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    Kurs
                                </label>
                            </div>
                            <select
                                autoFocus
                                className="custom-select"
                                value={course}
                                onChange={onChangeCourse}
                                id="inputGroupSelect00"
                            >
                                <option defaultValue value="BWL" key="BWL">BWL</option>
                                <option value="WISO"key="WISO">WISO</option>
                                <option value="GA 1"key="GA 1">GA 1</option>
                                <option value="GA 2"key="GA 2">GA 2</option>
                                <option value="Programmierung" key="Programmierung">Programmierung</option>
                                <option value="Netzwerk" key="Netzwerk">Netzwerk</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="input-group  my-3">
                            <div className="input-group-prepend">
                                <label
                                    className="input-group-text "
                                    htmlFor="inputGroupSelect00"
                                >
                                    Kurs
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

                    <div className="col-lg-6 col-sm-12">
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
                                onChange={onChangeTrainer}
                                id="inputGroupSelect01"
                            >
                                <option selected>wählen...</option>
                                {trainerList.map((list) => (
                                    <option key={list._id} value={list.email}>
                                        {list}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 my-3">
                        <div className="input-group m-2">
                            <div className="input-group-append">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect03"
                                >
                                    Beginn
                                </label>
                            </div>
                            <DatePicker

                                selected={begin}
                                onChange={onChangeBegin}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 my-3">
                        <div className="input-group m-2">
                            <div className="input-group-append">
                                <label
                                    className="input-group-text"
                                    htmlFor="inputGroupSelect03"
                                >
                                    Ende
                                </label>
                            </div>
                            <DatePicker
                                selected={end}
                                onChange={onChangeEnd}
                            />
                        </div>
                    </div>

                    <div className="col-12 my-3">

                        <Button variant="outline-info" onClick={onSubmit}>Änderung Speichern</Button>
                    </div>
                </div>
                <br/>

            </div>
        </div>
    )
}

export default EditCourse;





