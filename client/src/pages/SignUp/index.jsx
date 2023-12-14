import SignUpForm from '../../components/SignUpForm.jsx';
import "./SignUp.css"


function Signup() {
    return (
        <div className='background-image'>
            <div>
                <h1>Sign Up</h1>
                <div className="signUpBox">
                    <SignUpForm />
                </div>
            </div>
        </div>
    )

}

export default Signup;