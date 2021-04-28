import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './form.css'

const Form = ({ createUser, uploadedImage }) => {

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

    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/jpeg', 'image/jpg']

    const handleOnChange = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setImage(selected)
            setError(null)
        } else {
            setImage(null)
            setError('Please select a valid JPEG file type!')
        }
    }

    const history = useHistory()
    const handleOnClick = () => {
        // e.preventDefault()
        createUser(user)
        uploadedImage(image)
        history.push('/card')
    }


    return (
        <div className='userform'> {/* form className is already in use in index.css */}
            <div className='personal-details card--bg'>
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
                <input
                    onChange={handleOnChange}
                    type='file'
                />
                <div className="output-img">
                    {error && <div className="error">{error}</div>}
                    {image && <div>{image.name}</div>}
                </div>
            </div>

            <div className="company-details card--bg">
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
                />
            </div>

            <div className='social-handles card--bg'>
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
                />
            </div>

            <div className="card--bg">

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
            </div>

            <button
                onClick={handleOnClick}
                className='form__submit btn'
                type="submit"
            > Submit </button>
        </div>
    )
}

export default Form
