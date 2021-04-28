import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <span>Logo</span>
            </div>
            <Link to="/form">
                <p className='header__get-card'>Get your card</p>
            </Link>
        </div>
    )
}

export default Header
