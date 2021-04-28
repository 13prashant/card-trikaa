
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import blankProfile from '../assets/blank-profile.png'

import './card.css'

library.add(fab, faMapMarkedAlt, faMailBulk)
const Card = ({ user, recievedImage }) => {

    const { firstName,
        lastName,
        mobileNumber,
        whatsappNumber,
        companyName,
        designation,
        role,
        instagramHandle,
        facebookHandle,
        twitterHandle,
        linkedinHandle,
        website,
        email,
        address } = user
    return (
        <div className='smart'> {/* card className is already used in index.css */}
            <div className='smart__header'>
                {
                    recievedImage ?
                        <img
                            src={window.URL.createObjectURL(recievedImage)}
                            alt="profile"
                        />
                        : <img src={blankProfile} alt="blank" />
                }
                <div className='smart__title'>
                    <h1>{firstName} <br />{lastName}</h1>
                    {
                        companyName ? <p>{designation} <br />at {companyName}</p> : ' '
                    }
                </div>
            </div>
            <div className='btn'>
                <a
                    href="tel:8000432174"
                >{mobileNumber}</a><span>|</span>
                <FontAwesomeIcon
                    icon={["fab", "whatsapp"]}
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber ? whatsappNumber : mobileNumber}?text=Hi`, '_blank')}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <hr />
            <p className='smart__role'>{role}</p>
            <ul className="smart__social">
                {
                    instagramHandle ?
                        <li>
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                size="lg"
                                onClick={() => window.open(`https://www.instagram.com/${instagramHandle}`, '_blank')}
                            />
                        </li>
                        : ' '
                }
                {
                    facebookHandle ? <li>
                        <FontAwesomeIcon
                            icon={["fab", "facebook"]}
                            size="lg"
                            onClick={() => window.open(`https://www.facebook.com/${facebookHandle}`, '_blank')}
                        />
                    </li>
                        : ' '
                }
                {
                    twitterHandle ? <li>
                        <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            size="lg"
                            onClick={() => window.open(`https://www.twitter.com/${twitterHandle}`, '_blank')}
                        />
                    </li>
                        : ' '
                }
                {
                    linkedinHandle ? <li>
                        <FontAwesomeIcon
                            icon={["fab", "linkedin"]}
                            size="lg"
                            onClick={() => window.open(`https://www.linkedin.com/${linkedinHandle}`, '_blank')}
                        />
                    </li>
                        : ' '
                }
            </ul>
            <div className="smart__address">

                {
                    website ?
                        <div className="smart__website">
                            <FontAwesomeIcon
                                icon={["fab", "chrome"]}
                            />
                            <a href={`${website}`} target='_blank' >{website}</a >
                        </div>
                        : ''
                }
                {
                    email ?
                        <div className="smart__mail">
                            <FontAwesomeIcon icon="mail-bulk" />
                            <a href={`mailto:${email}`} >{email}</a>
                        </div>
                        : ''
                }
                {
                    address ?
                        <div className="smart__location">
                            <FontAwesomeIcon icon="map-marked-alt" />
                            <a
                                href={`https://www.google.com/maps/place/${address}`}
                                target='_blank'
                            >{address} </a>
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}

export default Card
