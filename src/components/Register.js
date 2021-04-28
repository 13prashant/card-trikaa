import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
    return (
        <div className='register'>
            <div className="register__container container">
                <div className="register__logo">
                    <h1>Logo</h1>
                </div>
                <div className="register__heading">
                    <h4>Register to make & share your smart card with friends.</h4>
                </div>
                <div className="register__form form">
                    <input
                        value=''
                        type="text"
                        placeholder='Mobile Number or Email'
                    />
                    <input
                        value=''
                        type="text"
                        placeholder='First Name'
                    />
                    <input
                        value=''
                        type="text"
                        placeholder='Last Name'
                    />
                    <input
                        value=''
                        type="password"
                        placeholder='Password' />
                    <button
                        className='register__submit btn'
                        type="submit"
                    > Register </button>
                    <p className='register__terms'>
                        By registering, you agree to our&nbsp;
                        <a href="#">Terms</a>.
                    </p>
                </div>
            </div>
            <div className="register__register card">
                <span>Have an account?</span>
                <Link to='/'>
                    <span className='register__line2'>&nbsp;Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Register
