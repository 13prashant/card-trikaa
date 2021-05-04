import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'
import './header.css'

const Header = ({ loadedUser }) => {
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
                <Link to={`/${loadedUser.id}`}>
                    <p className='header__edit-card'>
                        Edit your card
                    </p>
                </Link>
                <WhatsappShareButton url={`https://card-trikaa.herokuapp.com/${loadedUser.username}`}>
                    <button
                        className='header__share'
                    >Share</button>
                </WhatsappShareButton>
            </div>
        </div >
    )
}

export default Header
