import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function userHome () {
    return (
        <div>
            <h1>User Home</h1>
            <h2>View Previous Scoresheets</h2>
            <Button>
                <Link to={"/form"} style={{"textDecoration": "none", "color" : "white"}}>
                    Fill out Daily Scoresheet
                </Link>
             </Button>
        </div>
    )
    
}

export default userHome;