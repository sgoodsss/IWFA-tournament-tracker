import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

    return (
        <div>
            <div className='background-image'>
                <h1>Welcome Anglers!</h1>
                <h2>
                    {" "}
                    What would you like to do?
                </h2>

                <Button id="btn">
                    <Link to={"/login"} style={{ "textDecoration": "none", "color": "white" }}>
                        Login
                    </Link>
                </Button>

                <Button id="btn" className='btn1'>
                    <Link to={"/signup"} style={{ "textDecoration": "none", "color": "white" }}>
                        Sign Up
                    </Link>
                </Button>

                <footer id="footer">
                    Photo by <a href="https://unsplash.com/@hiro0718?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hiroko Yoshii</a> on <a href="https://unsplash.com/photos/school-of-fish-in-body-of-water-9y7y26C-l4Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </footer>

            </div>
        </div>
    )

}

export default Home;
