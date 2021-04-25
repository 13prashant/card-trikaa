import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './card.css'

library.add(fab)

const Card = () => {
    return (
        <div className='card-wrapper'>
            <div className='your-card'>
                <a
                    href=""
                >Get your card</a>
            </div>
            <div className='card'>
                <img
                    src="https://scontent.fstv1-1.fna.fbcdn.net/v/t1.6435-9/32337093_2132215526997824_458626331672838144_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fBlsQdDvb9QAX_ZkXcQ&_nc_ht=scontent.fstv1-1.fna&oh=571d1bc21652952bcfc5ea692cd5f401&oe=60AA55FA"
                    alt="profile-picture"
                />
                <div className='title'>
                    <h1>Prashant <br />Patel</h1>
                    <p>Web Developer <br />at prashaant.in</p>
                </div>
            </div>
            <div className='btn'>
                <a
                    href="tel:8000432174"
                >8000432174</a>
            </div>
            <ul className="social">
                <li>
                    <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                        size="lg"
                        onClick={() => window.open('https://www.instagram.com/', '_blank')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        size="lg"
                        onClick={() => window.open('https://www.facebook.com/', '_blank')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        size="lg"
                        onClick={() => window.open('https://www.twitter.com/', '_blank')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        size="lg"
                        onClick={() => window.open('https://www.linkedin.com/', '_blank')}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Card
