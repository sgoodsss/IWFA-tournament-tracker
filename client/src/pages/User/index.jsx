import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { getMe } from '../../utils/API';
import Auth from '../../utils/auth';
import Background from '../../assets/sebastian-pena-lambarri-YV593oyMKmo-unsplash.jpg';

function User() {
    // Set state variables
    const style = {
        backgroundSize: "cover",
        backgroundImage: `url(${Background})`
    };

    const [userData, setUserData] = useState('')
    const [day1, setDay1] = useState([{}])
    const [day2, setDay2] = useState([{}])
    const [day3, setDay3] = useState([{}])

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const user = await response.json();

                setDay1(user.day1Entry);
                setDay2(user.day2Entry);
                setDay3(user.day3Entry);
                console.log(day2)
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    });

    return (
        <div style={style}>
            <h1 style={{color: 'white'}}>User Home</h1>
            <h2 style={{color: 'white'}}>Previous Scoresheets</h2>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "90%", margin: "auto" }}>

                <div>
                    <h4 style={{color: "white", fontSize: "xx-large" }}>Day 1 Scores</h4>
                    {day1.map(
                        currentDay => (
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <h5>Spotted Sea Trout: {currentDay.spottedSeaTrout} </h5>
                                            <h5>Jack Crevalle: {currentDay.jackCrevalle} </h5>
                                            <h5>Ladyfish: {currentDay.ladyfish} </h5>
                                            <h5>Snook: {currentDay.snook} </h5>
                                            <h5>Red Drum: {currentDay.redDrum} </h5>
                                            <h5>Tarpon 24": {currentDay.tarpon} </h5>
                                            <h5>Bonefish: {currentDay.bonefish} </h5>
                                            <h5>Permit: {currentDay.permit} </h5>
                                            <h5>Tripletail: {currentDay.tripletail} </h5>
                                            <h5>Backcountry Slam: {currentDay.slam} </h5>
                                            <h5>Flats Slam: {currentDay.flatsSlam} </h5>
                                            <h5>Daily Points Total: {currentDay.dailyTotal} </h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    )}
                </div>

                <div>
                    <h4 style={{color: "white", fontSize: "xx-large" }}>Day 2 Scores</h4>
                    {day2.map(
                        currentDay => (
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <h5>Spotted Sea Trout: {currentDay.spottedSeaTrout} </h5>
                                            <h5>Jack Crevalle: {currentDay.jackCrevalle} </h5>
                                            <h5>Ladyfish: {currentDay.ladyfish} </h5>
                                            <h5>Snook: {currentDay.snook} </h5>
                                            <h5>Red Drum: {currentDay.redDrum} </h5>
                                            <h5>Tarpon 24": {currentDay.tarpon} </h5>
                                            <h5>Bonefish: {currentDay.bonefish} </h5>
                                            <h5>Permit: {currentDay.permit} </h5>
                                            <h5>Tripletail: {currentDay.tripletail} </h5>
                                            <h5>Backcountry Slam: {currentDay.slam} </h5>
                                            <h5>Flats Slam: {currentDay.flatsSlam} </h5>
                                            <h5>Daily Points Total: {currentDay.dailyTotal} </h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    )}
                </div>

                <div>
                    <h4 style={{color: "white", fontSize: "xx-large" }}>Day 3 Scores</h4>
                    {day3.map(
                        currentDay => (
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <h5>Spotted Sea Trout: {currentDay.spottedSeaTrout} </h5>
                                            <h5>Jack Crevalle: {currentDay.jackCrevalle} </h5>
                                            <h5>Ladyfish: {currentDay.ladyfish} </h5>
                                            <h5>Snook: {currentDay.snook} </h5>
                                            <h5>Red Drum: {currentDay.redDrum} </h5>
                                            <h5>Tarpon 24": {currentDay.tarpon} </h5>
                                            <h5>Bonefish: {currentDay.bonefish} </h5>
                                            <h5>Permit: {currentDay.permit} </h5>
                                            <h5>Tripletail: {currentDay.tripletail} </h5>
                                            <h5>Backcountry Slam: {currentDay.slam} </h5>
                                            <h5>Flats Slam: {currentDay.flatsSlam} </h5>
                                            <h5>Daily Points Total: {currentDay.dailyTotal} </h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    )}
                </div>
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