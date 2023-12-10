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

                <div class="container">
                    <div class="center">
                        <Button className="btnz">
                            <Link to={"/login"} style={{ "textDecoration": "none", "color": "white" }}>
                                Login
                            </Link>
                        </Button>

                        <Button className='btnz'>
                            <Link to={"/signup"} style={{ "textDecoration": "none", "color": "white" }}>
                                Sign Up
                            </Link>
                        </Button>
                    </div>
                </div>

                <footer id="footer">
                    Photo by <a href="https://unsplash.com/@hiro0718?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hiroko Yoshii</a> on <a href="https://unsplash.com/photos/school-of-fish-in-body-of-water-9y7y26C-l4Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </footer>

            </div>
        </div>
    )

}

export default Home;
