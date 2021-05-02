import { Link } from 'react-router-dom'
import { WhatsappShareButton, WhatsappIcon } from 'react-share'
import './header.css'

const Header = ({ loadUser }) => {

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
                <WhatsappShareButton url={`https://card-trikaa.herokuapp.com/${loadUser.username}`}>
                    <button
                        className='header__share'
                    >Share</button>
                </WhatsappShareButton>
            </div>
        </div >
    )
}

export default Header
