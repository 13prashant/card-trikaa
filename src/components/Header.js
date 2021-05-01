import './header.css'
import { Link } from 'react-router-dom'

const Header = ({ loadUser }) => {

    // const handleShare = () => {
    //     const userUrl = `http://localhost:3000/${loadUser.username}`

    // }

    return (
        <div className='header'>
            <div className='header__upper'>
                <div className="header__logo">
                    <span>card-trikaa</span>
                </div>
                <Link to={`/login`}>
                    <p className='header__logout'>Logout</p>
                </Link>
            </div>
            <div className="header__bottom card--bg">
                <Link to={`/${loadUser.id}`}>
                    <p className='header__edit-card'>
                        Edit your card
                    </p>
                </Link>
                <button
                    // onClick={handleShare}
                    className='header__share'
                >Share</button>
            </div>
        </div>
    )
}

export default Header
