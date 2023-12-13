import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Home.css"
import Background from '../../assets/257E7716-FAAB-4D55-8748-0126478EAE60_1_201_a.jpeg';

function Home() {
    const style = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundImage: `url(${Background})`
    };

    return (
        <div>
            <div style={style}>
                <h1>Welcome Anglers!</h1>
                <h2>
                    What would you like to do?
                </h2>
                <div  className="btnBox">
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

                <footer id="footer">
                    Photo by <a href="https://unsplash.com/@hiro0718?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hiroko Yoshii</a> on <a href="https://unsplash.com/photos/school-of-fish-in-body-of-water-9y7y26C-l4Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </footer>

            </div>
        </div>
    )

}

export default Home;
