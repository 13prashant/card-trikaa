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

  const handleCreateUser = (data) => {
    setUser(data)
  }
  console.log(user)
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/form">
            <Form createUser={handleCreateUser} />
          </Route>
          <Route path="/">
            <Card user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
