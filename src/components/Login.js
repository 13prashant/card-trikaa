import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './login.css'

const Login = ({ loadUser }) => {

    const [mobileNumber, setMobileNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleLogIn = () => {
        fetch('https://sheltered-plateau-48126.herokuapp.com/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobileNumber, username, email, password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    loadUser(data)
                    history.push(`/user/${data.username}`)
                } else alert('wrong credentials!')
            })
            .catch(error => console.log('error logging in!'))
    }

    return (
        <div className='login'>
            <div className="login__container container">
                <div className="login__logo">
                    <h1>card-trikaa</h1>
                </div>
                <div className="login__form form">
                    <input
                        onChange={(e) => {
                            if (isNaN(e.target.value)) {
                                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
                                    setEmail(e.target.value)
                                } else { setUsername(e.target.value) }
                            } else {
                                setMobileNumber(e.target.value.replace(/ /g, ""))
                            }
                        }}
                        type="text"
                        placeholder='Phone number, username or email'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                    />
                    <button
                        onClick={handleLogIn}
                        className='login__submit btn'
                    > Log In </button>
                </div>
            </div>
            <div className="login__register card">
                <span>Don't have an account?</span>
                <Link to='/register'>
                    <span className='login__line2'>&nbsp;Register</span>
                </Link>
            </div>
        </div>
    )
}

export default Login
