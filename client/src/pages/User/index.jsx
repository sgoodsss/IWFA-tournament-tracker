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
        <div>
            <h1>User Home</h1>
            <h2>View Previous Scoresheets</h2>

            <Button>
                <Link to={"/form"} style={{ "textDecoration": "none", "color": "white" }}>
                    Fill out Daily Scoresheet
                </Link>
            </Button>
        </div>
    )

}

export default User;