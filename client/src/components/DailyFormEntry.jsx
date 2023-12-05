import { useState, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { saveForm } from '../utils/API';
import Auth from '../utils/auth';

const DailyFormEntry = () => {
    // set initial form state
    const [dailyFormData, setDailyFormData] = useState('');
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    // Here we set state variables for name, lastName, email, and message using `useState`

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDailyFormData({ ...dailyFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await saveForm(dailyFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setFormData({
            name: '',
            backcountrySlam: '',
            flatsSlam: '',
        });
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your form entry!
                </Alert>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your name'
                        name='name'
                        onChange={handleInputChange}
                        value={dailyFormData.name}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Your name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <h3> Spotted Sea Trout </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="25">1</option>
                            <option value="50">2</option>
                            <option value="75">3</option>
                            <option value="100">4</option>
                            <option value="125">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="35">1</option>
                            <option value="70">2</option>
                            <option value="105">3</option>
                            <option value="140">4</option>
                            <option value="175">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Jack Crevalle </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="15">1</option>
                            <option value="30">2</option>
                            <option value="45">3</option>
                            <option value="60">4</option>
                            <option value="75">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="30">1</option>
                            <option value="60">2</option>
                            <option value="90">3</option>
                            <option value="120">4</option>
                            <option value="150">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Ladyfish </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="10">1</option>
                            <option value="20">2</option>
                            <option value="30">3</option>
                            <option value="40">4</option>
                            <option value="50">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="15">1</option>
                            <option value="30">2</option>
                            <option value="45">3</option>
                            <option value="60">4</option>
                            <option value="75">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="20">1</option>
                            <option value="40">2</option>
                            <option value="60">3</option>
                            <option value="80">4</option>
                            <option value="100">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Snook </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="90">1</option>
                            <option value="180">2</option>
                            <option value="270">3</option>
                            <option value="360">4</option>
                            <option value="450">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="115">1</option>
                            <option value="230">2</option>
                            <option value="345">3</option>
                            <option value="460">4</option>
                            <option value="575">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="150">1</option>
                            <option value="300">2</option>
                            <option value="450">3</option>
                            <option value="600">4</option>
                            <option value="750">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Red Drum </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="70">1</option>
                            <option value="140">2</option>
                            <option value="210">3</option>
                            <option value="280">4</option>
                            <option value="350">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="100">1</option>
                            <option value="200">2</option>
                            <option value="300">3</option>
                            <option value="400">4</option>
                            <option value="500">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="120">1</option>
                            <option value="240">2</option>
                            <option value="360">3</option>
                            <option value="480">4</option>
                            <option value="600">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Tarpon 24" </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="185">1</option>
                            <option value="370">2</option>
                            <option value="555">3</option>
                            <option value="740">4</option>
                            <option value="925">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="210">1</option>
                            <option value="420">2</option>
                            <option value="630">3</option>
                            <option value="840">4</option>
                            <option value="1050">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="250">1</option>
                            <option value="500">2</option>
                            <option value="750">3</option>
                            <option value="1000">4</option>
                            <option value="1250">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Bonefish </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="150">1</option>
                            <option value="300">2</option>
                            <option value="450">3</option>
                            <option value="600">4</option>
                            <option value="750">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="200">1</option>
                            <option value="400">2</option>
                            <option value="600">3</option>
                            <option value="800">4</option>
                            <option value="1000">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="250">1</option>
                            <option value="500">2</option>
                            <option value="750">3</option>
                            <option value="1000">4</option>
                            <option value="1250">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Permit </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="225">1</option>
                            <option value="450">2</option>
                            <option value="675">3</option>
                            <option value="900">4</option>
                            <option value="1125">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="275">1</option>
                            <option value="550">2</option>
                            <option value="825">3</option>
                            <option value="1100">4</option>
                            <option value="1375">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="325">1</option>
                            <option value="650">2</option>
                            <option value="975">3</option>
                            <option value="1300">4</option>
                            <option value="1625">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Tripletail </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="60">1</option>
                            <option value="120">2</option>
                            <option value="180">3</option>
                            <option value="240">4</option>
                            <option value="300">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="90">1</option>
                            <option value="180">2</option>
                            <option value="270">3</option>
                            <option value="360">4</option>
                            <option value="450">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="125">1</option>
                            <option value="250">2</option>
                            <option value="375">3</option>
                            <option value="500">4</option>
                            <option value="625">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='backcountrySlam'>Backcountry Slam</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='0'
                        name='backcountrySlam'
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Number of Backcountry Slams is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='flatsSlam'>Flats Slam</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='0'
                        name='flatsSlam'
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Number of Flats Slams is required!</Form.Control.Feedback>
                </Form.Group>

                <Button
                    disabled={!(dailyFormData.name)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default DailyFormEntry;
