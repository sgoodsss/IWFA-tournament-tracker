import LoginForm from '../../components/LoginForm';
import "./Login.css"

function Login() {
    return (
        <div className='background-image'>
            <div>
                <h1>Login</h1>
                <div className="loginBox">
                    <LoginForm />
                </div>
            </div>
        </div>

    )

}

export default Login;