import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='your-card'>
            <Link to="/">Logo</Link>
            <Link
                to="/form"
            >Get your card</Link>
        </div>
    )
}

export default Header
