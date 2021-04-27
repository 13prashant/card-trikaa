import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './form.css'

const Form = ({ createUser }) => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mobileNuumber: '',
        whatsappNumber: '',
        companyName: '',
        designation: '',
        role: '',
        instagramHandle: '',
        facebookHandle: '',
        twitterHandle: '',
        linkedinHandle: '',
        website: '',
        email: '',
        address: ''
    })

    const history = useHistory()
    const handleOnClick = (e) => {
        e.preventDefault()
        createUser(user)
        history.push('/')
    }

    return (
        <div className='form'>
            <div className='personal-details'>
                <label htmlFor="firstName">First Name</label>
                <input
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    type="text"
                    placeholder='eg. Prashant'
                /><br />
                <label htmlFor="lastName">Last Name</label>
                <input
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    type="text"
                    placeholder='eg. Patel'
                /><br />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
                    type="number"
                    placeholder='eg. 9876543210'
                /><br />
                <label htmlFor="whatsappNumber">Whatsapp Number</label>
                <input
                    onChange={(e) => setUser({ ...user, whatsappNumber: e.target.value })}
                    type="number"
                    placeholder='If diffrent from main Mobile Number...'
                /><br />
                <label htmlFor="image">Upload your image</label>
                <input type='file' /><br />
                <label htmlFor="companyName">Company Name</label>
                <input
                    onChange={(e) => setUser({ ...user, companyName: e.target.value })}
                    type="text"
                    placeholder='eg. prashaant.in'
                /><br />
                <label htmlFor="designation">Designation</label>
                <input
                    onChange={(e) => setUser({ ...user, designation: e.target.value })}

                    type="text"
                    placeholder='eg. web developer'
                /><br />
                <label htmlFor="designation">Description, Your role...</label>
                <textarea id='role'
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    type="text"
                    placeholder='eg. Developing web apps for high tech companies with a focus of delivering a superior brand experience'
                /><br />
            </div>
            <div className='social-handles'>
                <label htmlFor="instagram">www.instagram.com/</label>
                <input
                    onChange={(e) => setUser({ ...user, instagramHandle: e.target.value })}
                    type="text"
                    placeholder='eg. 13.prashant'
                /><br />
                <label htmlFor="facebook">www.facebook.com/</label>
                <input
                    onChange={(e) => setUser({ ...user, facebookHandle: e.target.value })}
                    type="text"
                    placeholder='eg. pacific1392'
                /><br />
                <label htmlFor="twitter">www.twitter.com/</label>
                <input
                    onChange={(e) => setUser({ ...user, twitterHandle: e.target.value })}
                    type="text"
                    placeholder='eg. 13prashaant'
                /><br />
                <label htmlFor="linkedin">www.linkedin.com/</label>
                <input
                    onChange={(e) => setUser({ ...user, linkedinHandle: e.target.value })}
                    type="text"
                    placeholder='eg. pacific1392'
                /><br />
                <label htmlFor="website">Website</label>
                <input
                    onChange={(e) => setUser({ ...user, website: e.target.value })}
                    type="text"
                    placeholder='Your Website'
                /><br />
                <label htmlFor="email">Email Address</label>
                <input
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    type="email"
                    placeholder='eg. pacific1392@gmail.com'
                /><br />
                <label htmlFor="email">Office Address</label>
                <input
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                    type="text"
                    placeholder='Offic Address'
                /><br />
                <input
                    onClick={handleOnClick}
                    type="submit"
                    value='Submit'
                /><br />
            </div>
        </div>
    )
}

export default Form
