import { Link } from 'react-router-dom'
import welcomePicture from '../assets/welcome.png'
import './welcome.css'

const Welcome = () => {

    return (
        <div className='welcome'>
            <div className="welcome__container">
                <div className="welcome__logo">
                    <h1>card-trikaa</h1>
                </div>
                <div className="welcome__heading">
                    <h4>Never run out of your business cards.</h4>
                </div>
            </div>
            <div className="welcome__image">
                <img src={welcomePicture} alt="" />
            </div>
            <div className="welcome__register card">
                <Link to='/register'>
                    <span className='welcome__line2'>&nbsp;Next</span>
                </Link>
            </div>
        </div>
    )
}

export default Welcome
