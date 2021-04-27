import { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Card from './components/Card'
import Form from "./components/Form";
import Header from './components/Header'


function App() {

  const [user, setUser] = useState({})
  const [image, setImage] = useState(null)

  const handleCreateUser = (data) => {
    setUser(data)
  }

  const handleUploadedImage = (data) => {
    setImage(data)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/form">
            <Form
              createUser={handleCreateUser}
              uploadedImage={handleUploadedImage}
            />
          </Route>
          <Route path="/">
            <Card
              user={user}
              recievedImage={image}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
