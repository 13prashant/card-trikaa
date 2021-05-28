import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Card from './components/Card'
import Form from "./components/Form";
import Header from './components/Header'
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleIsLoggedIn = (data) => {
    setIsLoggedIn(data)
  }

  const [user, setUser] = useState({
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    // image: null,
    mobileNumber: '',
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
    address: '',
    joined: ''
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      username: data.username,
      firstName: data.firstname,
      lastName: data.lastname,
      image: data.image,
      mobileNumber: data.mobilenumber,
      whatsappNumber: data.mobilenumber,
      companyName: data.companyname,
      designation: data.designation,
      role: data.role,
      instagramHandle: data.instagramhandle,
      facebookHandle: data.facebookhandle,
      twitterHandle: data.twitterhandle,
      linkedinHandle: data.linkedinhandle,
      website: data.website,
      email: data.email,
      address: data.address,
      joined: data.joined
    })
  }

  // const [image, setImage] = useState(null)

  // const handleUploadedImage = (data) => {
  //   setImage(data)
  // }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/register'>
            <Register
              loadUser={loadUser}
              isLoggedIn={handleIsLoggedIn}
            />
          </Route>
          <Route path='/login'>
            <Login
              loadUser={loadUser}
              isLoggedIn={handleIsLoggedIn}
            />
          </Route>
          <Route exact path={`/${user.id}`}>
            <Header
              loadedUser={user}
            />
            <Form
              loadUser={loadUser}
              createdUser={user}
            // uploadedImage={handleUploadedImage}
            />
          </Route>
          <Route path={`/:user`} >
            <div>
              <Header
                loadedUser={user}
                isLoggedIn={isLoggedIn}
              />
              <Card
                loadUser={loadUser}
                loadedUser={user}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
