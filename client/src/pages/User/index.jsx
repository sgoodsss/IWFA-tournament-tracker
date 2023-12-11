import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getMe } from '../../utils/API';
import Auth from '../../utils/auth';

function User() {
 // Set state variables
 const [userData, setUserData] = useState('')
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
             setUserData(user);
         } catch (err) {
             console.error(err);
         }
     };

     getUserData();
 });
    // console.log(userData.day1Entry)
    return (
        <div>
            <h1>User Home</h1>
            <h2>View Previous Scoresheets</h2>

            {/* <div>
                <h3>Day 1</h3>
                {userData.day1Entry.map(
                    day1 => (<h4>{day1.dailyTotal}</h4>)
                )}
            </div>

            <div>
                <h3>Day 2</h3>
                {userData.day2Entry.map(
                    day2 => (<h4>{day2.dailyTotal}</h4>)
                )}
            </div>

            <div>
                <h3>Day 3</h3>
                {userData.day3Entry.map(
                    day3 => (<h4>{day3.dailyTotal}</h4>)
                )}
            </div> */}

            <Button>
                <Link to={"/form"} style={{ "textDecoration": "none", "color": "white" }}>
                    Fill out Daily Scoresheet
                </Link>
            </Button>
        </div>
    )

}

export default User;