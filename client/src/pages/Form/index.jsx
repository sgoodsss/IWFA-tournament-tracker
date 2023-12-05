// import DailyFormEntry from '../../components/DailyFormEntry';
import { useState, useRef } from 'react';

function Form() {
    // Set state variables for firstName, lastName, email, and message using `useState`
    const [name, setName] = useState('');
    const [sstBait, setSSTBait] = useState('');
    const [sstArt, setSSTArt] = useState('');
    const [sstFly, setSSTFly] = useState('');
    const form = useRef();

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value)
        } else if (name === `sstBait`) {
            setSSTBait(value)
        } else if (name === `sstArt`) {
            setSSTArt(value)
        } else if (name === `sstFly`) {
            setSSTFly(value)
        } 

        console.log(name, value)
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        console.log("Your form was submitted!")
        // Add logic to send to the server

        // Clear the inputs
        setName('');
        setSSTBait('');
        setSSTArt('');
        setSSTFly(``);
    };


    return (
        <div>
            <h1>Daily Fishing Scoresheet</h1>
            {/* <DailyFormEntry /> */}
            <div className="container text-center">
                <form ref={form} className="form" onSubmit={handleFormSubmit}>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Your name"
                    /> <br />
                    <label>
                        Spotted Sea Trout:
                        <select value={sstBait} name="sstBait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>

                        <select value={sstArt} name="sstArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="25">1</option>
                            <option value="50">2</option>
                            <option value="75">3</option>
                            <option value="100">4</option>
                            <option value="125">5</option>
                        </select>

                        <select value={sstFly} name="sstFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="35">1</option>
                            <option value="70">2</option>
                            <option value="105">3</option>
                            <option value="140">4</option>
                            <option value="175">5</option>
                        </select>
                    </label> <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Form;