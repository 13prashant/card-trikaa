import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './login.css'

const Login = () => {
    const history = useHistory()

    const handleLogIn = () => {
        history.push('/card')
    }
    return (
        <div className='login'>
            <div className="login__container container">
                <div className="login__logo">
                    <h1>Logo</h1>
                </div>
                <div className="login__form form">
                    <input
                        value=''
                        type="text"
                        placeholder='Phone number, username or email'
                    />
                    <input
                        value=''
                        type="password"
                        placeholder='Password'
                    />
                    <button
                        onClick={handleLogIn}
                        className='login__submit btn'
                        type="submit"
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
