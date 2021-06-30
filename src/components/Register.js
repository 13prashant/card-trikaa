import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './register.css'
import config from '../config';

const Register = ({ loadUser, isLoggedIn }) => {

    const [mobileNumber, setMobileNumber] = useState('')
    // const [email, setEmail] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleRegister = () => {
        fetch(`${config.card_tricka_api_url}/register`, {    /* */
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobileNumber,
                // email,
                firstName,
                lastName,
                username,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data === 'This mobile number is already registered!') {
                    alert('This mobile number is already registered!')
                } else if (data === 'This username is not available!') {
                    alert('This username is not available!')
                } else if (data === 'success'){
                    loadUser(data)
                    history.push(`/${username}`)
                    isLoggedIn(true)
                } 
                else if (data.id) {
                    loadUser(data)
                    history.push(`/${data.username}`)
                    isLoggedIn(true)
                }
            })
            .catch(error => console.log('error registering user!'))
    }
    return (
        <div className='register'>
            <div className="register__container container">
                <div className="register__logo">
                    <h1>card-trikaa</h1>
                </div>
                <div className="register__heading">
                    <h4>Register to make & share your smart card with friends.</h4>
                </div>
                <div className="register__form form">
                    <input
                        onChange={(e) => setMobileNumber(e.target.value)}
                        type="text"
                        placeholder='Mobile Number'
                    />
                    <input
                        onChange={(e) => setfirstName(e.target.value)}
                        type="text"
                        placeholder='First Name'
                    />
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder='Last Name'
                    />
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder='Username'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password' />
                    <button
                        onClick={handleRegister}
                        className='register__submit btn'
                    > Register </button>
                    <p className='register__terms'>
                        By registering, you agree to our terms.&nbsp;
                        {/* <a href="#">Terms</a>. */}
                    </p>
                </div>
            </div>
            <div className="register__register card">
                <span>Have an account?</span>
                <Link to='/login'>
                    <span className='register__line2'>&nbsp;Login</span>
                </Link>
            </div>
        </div>
    )
}

export default Register
