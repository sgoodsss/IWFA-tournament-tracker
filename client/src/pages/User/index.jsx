import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/getUserForms')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <h1>User Home</h1>
            <h2>View Previous Scoresheets</h2>
            <div className='w-50'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

            <Button>
                <Link to={"/form"} style={{ "textDecoration": "none", "color": "white" }}>
                    Fill out Daily Scoresheet
                </Link>
            </Button>
        </div>
    )

}

export default User;