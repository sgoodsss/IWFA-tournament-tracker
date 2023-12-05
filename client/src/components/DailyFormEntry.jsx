import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { saveForm } from '../utils/API';
import Auth from '../utils/auth';

const DailyFormEntry = () => {
    // set initial form state
    const [dailyFormData, setDailyFormData] = useState();
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

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
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Jack Crevalle </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Ladyfish </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Snook </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Red Drum </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Tarpon 24" </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Bonefish </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Permit </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </Form.Group>

                <Form.Group>
                    <h3> Tripletail </h3>
                    <label>
                        Bait # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Art # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <label>
                        Fly # of fish:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
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
