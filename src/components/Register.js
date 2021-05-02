import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './register.css'

const Register = ({ loadUser }) => {

    const [mobileNumber, setMobileNumber] = useState('')
    // const [email, setEmail] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleRegister = () => {
        fetch('https://sheltered-plateau-48126.herokuapp.com/register', {
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
                if (data.id) {
                    loadUser(data)
                    history.push(`/user/${data.username}`)
                } else {
                    alert('cannot register this user!')
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
