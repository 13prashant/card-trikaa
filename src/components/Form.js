import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './form.css'

const Form = ({ createdUser, loadUser }) => {

    const [formUser, setFormUser] = useState({
        userName: '',
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

    const {
        userName,
        firstName,
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
        address
    } = formUser

    const history = useHistory()
    const handleOnSubmit = () => {
        fetch(`http://localhost:5000/${createdUser.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: createdUser.id,
                userName,
                firstName,
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
                address
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    loadUser(data)
                    history.push(`/${data.username}`)
                }
            })

        // uploadedImage(image)
    }


    return (
        <div className='userform'> {/* form className is already in use in index.css */}
            <div className='personal-details card--bg'>
                <label htmlFor="firstName">First Name</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, firstName: e.target.value })}
                    // value={createdUser.firstName}
                    type="text"
                    placeholder='eg. Prashant'
                /><br />
                <label htmlFor="lastName">Last Name</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, lastName: e.target.value })}
                    // value={createdUser.lastName}
                    type="text"
                    placeholder='eg. Patel'
                /><br />
                <label htmlFor="username">Create desired username</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, userName: e.target.value })}
                    // value={createdUser.username}
                    type="text"
                    placeholder='eg. prashant.patel'
                /><br />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, mobileNumber: e.target.value })}
                    // value={createdUser.mobileNumber}
                    type="number"
                    placeholder='eg. 9876543210'
                /><br />
                <label htmlFor="whatsappNumber">Whatsapp Number</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, whatsappNumber: e.target.value })}
                    type="number"
                    placeholder='If diffrent from main Mobile Number...'
                /><br />
                <label htmlFor="image">Upload your image</label>
                <input
                    // onChange={handleOnChange}
                    type='file'
                />
                {/* <div className="output-img">
                    {error && <div className="error">{error}</div>}
                    {image && <div>{image.name}</div>}
                </div> */}
            </div>

            <div className="company-details card--bg">
                <label htmlFor="companyName">Company Name</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, companyName: e.target.value })}
                    type="text"
                    placeholder='eg. prashaant.in'
                /><br />
                <label htmlFor="designation">Designation</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, designation: e.target.value })}

                    type="text"
                    placeholder='eg. web developer'
                /><br />
                <label htmlFor="designation">Description, Your role...</label>
                <textarea id='role'
                    onChange={(e) => setFormUser({ ...formUser, role: e.target.value })}
                    type="text"
                    placeholder='eg. Developing web apps for high tech companies with a focus of delivering a superior brand experience'
                />
            </div>

            <div className='social-handles card--bg'>
                <label htmlFor="instagram">www.instagram.com/</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, instagramHandle: e.target.value })}
                    type="text"
                    placeholder='eg. 13.prashant'
                /><br />
                <label htmlFor="facebook">www.facebook.com/</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, facebookHandle: e.target.value })}
                    type="text"
                    placeholder='eg. pacific1392'
                /><br />
                <label htmlFor="twitter">www.twitter.com/</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, twitterHandle: e.target.value })}
                    type="text"
                    placeholder='eg. 13prashaant'
                /><br />
                <label htmlFor="linkedin">www.linkedin.com/</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, linkedinHandle: e.target.value })}
                    type="text"
                    placeholder='eg. pacific1392'
                />
            </div>

            <div className="card--bg">

                <label htmlFor="website">Website</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, website: e.target.value })}
                    type="text"
                    placeholder='Your Website'
                /><br />
                <label htmlFor="email">Email Address</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
                    // value={createdUser.email}
                    type="email"
                    placeholder='eg. pacific1392@gmail.com'
                /><br />
                <label htmlFor="email">Office Address</label>
                <input
                    onChange={(e) => setFormUser({ ...formUser, address: e.target.value })}
                    type="text"
                    placeholder='Offic Address'
                /><br />
            </div>

            <button
                onClick={handleOnSubmit}
                className='form__submit btn'
                type="submit"
            > Submit </button>
            <Link to={`/${createdUser.username}`}>
                <p className='header__get-card'>Cancel</p>
            </Link>
        </div>
    )
}

export default Form
