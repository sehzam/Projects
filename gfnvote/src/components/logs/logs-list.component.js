import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BsPersonFill } from "react-icons/bs";


const Users = props => (
    <tr>
        <td>{props.user.email}</td>
        <td>{props.user.isStudent ? "true" : "false"}</td>
        <td>{props.user.isTrainer ? "true" : "false"}</td>
        <td>{props.user.isAd ? "true" : "false"}</td>
        
    </tr>
)
const UserList = (props) => {
    const [logs, setLogs] = useState([])

    useEffect(()=>{
        axios
          .get("http://localhost:5000/log")
          .then((result) => {setLogs(result.data)})
          
      },[])

    const userList = () => {
        return logs.map(currentUser => {
            return <Users 
            user={currentUser}/>       
        })
    }
   return (
        <div className="bg-dark">
            <br/>
            <div className="container bg-white text-center border rounded">
            <Button className="m-5" variant="info" disabled>
                <h4>
                    <b>
                        Angemeldete User
                    </b>
                </h4>
            </Button>
                <table className="table table-bordered table-striped table-hover text-body text-center" >
                    <thead className="thead-dark">
                    <tr className="">
                        <th><BsPersonFill /></th>
                        <th>Student</th>
                        <th>Trainer</th>
                        <th>Admin</th>
                    </tr>
                    </thead>
                    <tbody>
                        { userList()}
                    </tbody>
                </table>
            </div>
            </div>
        );
    
}
export default UserList;