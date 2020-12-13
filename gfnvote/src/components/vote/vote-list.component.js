import React, {useState, useEffect} from "react"
import axios from "axios"
import {Button, Modal} from "react-bootstrap"
import {BsPersonFill, BsThreeDots} from "react-icons/bs"
import {IoIosRocket, IoIosFlag} from "react-icons/io"


const VoteList = (props) => {

    const [votes, setVotes] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/votes")
            .then((result) => {
                setVotes(result.data)
            })

    }, [])

    const Delete = (props) => {
        const [show, setShow] = useState(false)

        const handleClose = () => setShow(false)
        const handleShow = () => setShow(true)

        return (
            <>
                <Button variant="outline-danger" onClick={handleShow}>
                    <b>löschen</b>
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Warnung Löschvorgang</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Sind Sie sich sicher das Sie dieses Formular löschen möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={() => {
                            props.deleteVote(props.vote._id)
                        }}>
                            Ja, <b>sicher</b>
                        </Button>
                        <Button variant="outline-info" onClick={handleClose}>Nein</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const Change = (props) => {
        const [show, setShow] = useState(false)

        const handleClose = () => setShow(false)
        const handleShow = () => setShow(true)

        return (
            <>
                <Button variant="outline-success" onClick={handleShow}>
                    <b>ändern</b>
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Warnung Änderungsvorgang</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Sind Sie sich sicher das Sie dieses Formular ändern möchten ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Delete
                            vote={props.vote}
                            deleteVote={props.deleteVote}
                        />

                        <Button variant="outline-info"
                                onClick={handleClose}>
                            <b>Nein, abbrechen</b>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const Vote = (props) => (
        <tr>
             <td>{props.vote.course}</td>
            <td>{props.vote.trainer}</td>
            <td>
                {(+props.vote.q1 +
                    +props.vote.q2 +
                    +props.vote.q3 +
                    +props.vote.q4 +
                    +props.vote.q5 +
                    +props.vote.q6 +
                    +props.vote.q7 +
                    +props.vote.q8 +
                    +props.vote.q9 +
                    +props.vote.q10) / 10
                }
            </td>

            <td>{props.vote.q11}</td>

            <td>{props.vote.email}</td>
            <td>
                <Change
                    vote={props.vote}
                    deleteVote={props.deleteVote}
                />
            </td>
        </tr>
    )

    const deleteVote = (id) => {
        axios
            .delete("http://localhost:5000/votes/", id)
            .then((result) => console.log("x : " + result.data))

        setVotes(votes.filter((el) => el._id !== id))
    }

    const voteList = () => {
        return votes.map((currentVote) => {
            return (
                <Vote
                    key={currentVote._id.toString()}
                    vote={currentVote}
                    deleteVote={() => {
                        deleteVote(currentVote._id.toString())
                    }}
                />
            )
        })
    }

    return (
        <div>
            <div className="bg-dark">
                <br/>
                <div className="container text-center bg-white border rounded">
                    <Button className="m-5" variant="info" disabled>
                        <h4>
                            <b>
                                Bewertungen
                            </b>
                        </h4>
                    </Button>
                    <table className="table table-bordered table-striped table-hover text-body text-center">
                        <thead className="thead-dark">
                        <tr>
                            <th>Course</th>
                            <th>trainer</th>
                            <th>
                                <IoIosRocket/>
                            </th>
                            <th>
                                <IoIosFlag/>
                            </th>
                            <th>
                                <BsPersonFill/>
                            </th>
                            <th>
                                <BsThreeDots/>
                            </th>
                        </tr>
                        </thead>
                        <tbody>{voteList()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VoteList