import './header.css'
import { Link } from 'react-router-dom'

const Header = ({ loadUser }) => {

    const handleShare = () => {
        fetch(`http://localhost:3000/${loadUser.username}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className='header'>
            <div className="header__logo">
                <span>Logo</span>
            </div>
            <Link to={`/${loadUser.id}`}>
                <p className='header__get-card'>Edit your card</p>
            </Link>
            <Link to={`/login`}>
                <p className='header__logout'>Logout</p>
            </Link>
            <button
                onClick={handleShare}
                className='header__logout'
            >Share</button>
        </div>
    )
}

export default Header
