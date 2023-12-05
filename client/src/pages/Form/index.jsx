// import DailyFormEntry from '../../components/DailyFormEntry';
import { useState, useRef } from 'react';

function Form() {
    // Set state variables
    const [name, setName] = useState('');
    const [sstBait, setSSTBait] = useState('');
    const [sstArt, setSSTArt] = useState('');
    const [sstFly, setSSTFly] = useState('');

    const [jcBait, setJCBait] = useState('');
    const [jcArt, setJCArt] = useState('');
    const [jcFly, setJCFly] = useState('');

    const [ladyBait, setLadyBait] = useState('');
    const [ladyArt, setLadyArt] = useState('');
    const [ladyFly, setLadyFly] = useState('');

    const [snookBait, setSnookBait] = useState('');
    const [snookArt, setSnookArt] = useState('');
    const [snookFly, setSnookFly] = useState('');

    const [rdBait, setRDBait] = useState('');
    const [rdArt, setRDArt] = useState('');
    const [rdFly, setRDFly] = useState('');

    const [tarponBait, setTarponBait] = useState('');
    const [tarponArt, setTarponArt] = useState('');
    const [tarponFly, setTarponFly] = useState('');

    const [bonefishBait, setBonefishBait] = useState('');
    const [bonefishArt, setBonefishArt] = useState('');
    const [bonefishFly, setBonefishFly] = useState('');
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
        } else if (name === `jcBait`) {
            setJCBait(value)
        } else if (name === `jcArt`) {
            setJCArt(value)
        } else if (name === `jcFly`) {
            setJCFly(value)
        } else if (name === `ladyBait`) {
            setLadyBait(value)
        } else if (name === `ladyArt`) {
            setLadyArt(value)
        } else if (name === `ladyFly`) {
            setLadyFly(value)
        } else if (name === `snookBait`) {
            setSnookBait(value)
        } else if (name === `snookArt`) {
            setSnookArt(value)
        } else if (name === `snookFly`) {
            setSnookFly(value)
        } else if (name === `rdBait`) {
            setRDBait(value)
        } else if (name === `rdArt`) {
            setRDArt(value)
        } else if (name === `rdFly`) {
            setRDFly(value)
        } else if (name === `tarponBait`) {
            setTarponBait(value)
        } else if (name === `tarponArt`) {
            setTarponArt(value)
        } else if (name === `tarponFly`) {
            setTarponFly(value)
        } else if (name === `bonefishBait`) {
            setBonefishBait(value)
        } else if (name === `bonefishArt`) {
            setBonefishArt(value)
        } else if (name === `bonefishFly`) {
            setBonefishFly(value)
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
        setJCBait('');
        setJCArt('');
        setJCFly(``);
        setLadyBait('');
        setLadyArt('');
        setLadyFly(``);
        setSnookBait('');
        setSnookArt('');
        setSnookFly(``);
        setRDBait('');
        setRDArt('');
        setRDFly(``);
        setTarponBait('');
        setTarponArt('');
        setTarponFly(``);
        setBonefishBait('');
        setBonefishArt('');
        setBonefishFly(``);
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

                    <label>
                        Jack Crevalle:
                        <select value={jcBait} name="jcBait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="15">1</option>
                            <option value="30">2</option>
                            <option value="45">3</option>
                            <option value="60">4</option>
                            <option value="75">5</option>
                        </select>

                        <select value={jcArt} name="jcArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>

                        <select value={jcFly} name="jcFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="30">1</option>
                            <option value="60">2</option>
                            <option value="90">3</option>
                            <option value="120">4</option>
                            <option value="150">5</option>
                        </select>
                    </label> <br />

                    <label>
                        Ladyfish:
                        <select value={ladyBait} name="ladyBait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="10">1</option>
                            <option value="20">2</option>
                            <option value="30">3</option>
                            <option value="40">4</option>
                            <option value="50">5</option>
                        </select>

                        <select value={ladyArt} name="ladyArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="15">1</option>
                            <option value="30">2</option>
                            <option value="45">3</option>
                            <option value="60">4</option>
                            <option value="75">5</option>
                        </select>

                        <select value={ladyFly} name="ladyFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>
                    </label> <br />

                    <label>
                        Snook:
                        <select value={snookBait} name="snookBait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="90">1</option>
                            <option value="180">2</option>
                            <option value="270">3</option>
                            <option value="360">4</option>
                            <option value="450">5</option>
                        </select>

                        <select value={snookArt} name="snookArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="115">1</option>
                            <option value="230">2</option>
                            <option value="345">3</option>
                            <option value="460">4</option>
                            <option value="575">5</option>
                        </select>

                        <select value={snookFly} name="snookFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="150">1</option>
                            <option value="300">2</option>
                            <option value="450">3</option>
                            <option value="600">4</option>
                            <option value="750">5</option>
                        </select>
                    </label> <br />

                    <label>
                        Red Drum:
                        <select value={rdBait} name="rdbait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="70">1</option>
                            <option value="140">2</option>
                            <option value="210">3</option>
                            <option value="280">4</option>
                            <option value="350">5</option>
                        </select>

                        <select value={rdArt} name="rdArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="100">1</option>
                            <option value="200">2</option>
                            <option value="300">3</option>
                            <option value="400">4</option>
                            <option value="500">5</option>
                        </select>

                        <select value={rdFly} name="rdFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="185">1</option>
                            <option value="370">2</option>
                            <option value="555">3</option>
                            <option value="740">4</option>
                            <option value="925">5</option>
                        </select>
                    </label> <br />

                    <label>
                        Tarpon 24":
                        <select value={tarponBait} name="tarponbait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="185">1</option>
                            <option value="370">2</option>
                            <option value="555">3</option>
                            <option value="740">4</option>
                            <option value="925">5</option>
                        </select>

                        <select value={tarponArt} name="tarponArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="210">1</option>
                            <option value="420">2</option>
                            <option value="630">3</option>
                            <option value="840">4</option>
                            <option value="1050">5</option>
                        </select>

                        <select value={tarponFly} name="tarponFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="250">1</option>
                            <option value="500">2</option>
                            <option value="750">3</option>
                            <option value="1000">4</option>
                            <option value="1250">5</option>
                        </select>
                    </label> <br />

                    <label>
                        Bonefish:
                        <select value={bonefishBait} name="bonefishbait" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Bait # of fish: 0</option>
                            <option value="150">1</option>
                            <option value="300">2</option>
                            <option value="450">3</option>
                            <option value="600">4</option>
                            <option value="750">5</option>
                        </select>

                        <select value={bonefishArt} name="bonefishArt" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Art # of Fish: 0</option>
                            <option value="200">1</option>
                            <option value="400">2</option>
                            <option value="600">3</option>
                            <option value="800">4</option>
                            <option value="1000">5</option>
                        </select>

                        <select value={bonefishFly} name="bonefishFly" onChange={handleInputChange} defaultValue={0}>
                            <option value="0">Fly # of Fish:0</option>
                            <option value="250">1</option>
                            <option value="500">2</option>
                            <option value="750">3</option>
                            <option value="1000">4</option>
                            <option value="1250">5</option>
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