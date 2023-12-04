import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home () {

    return (
        <div>
            <h1>Welcome!</h1>
            <h2> What would you like to do?</h2>
            <Button>
                <Link to={"/login"} style={{"textDecoration": "none", "color" : "white"}}>
                    Login
                </Link>
             </Button>

             <Button>
                <Link to={"/signup"} style={{"textDecoration": "none", "color" : "white"}}>
                    Sign Up
                </Link>
             </Button>
        </div>
    )
    
}

export default Home;