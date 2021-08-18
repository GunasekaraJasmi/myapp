import React from 'react'
import{BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Unit from './components/Unit'
import Footer from './components/Footer'
import Health from './components/Health'
import Login from './components/Login.js'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    
    <Router>
      <Header />

    <Switch>
      <Route exact path='/'>
        <Unit />
        <Health />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/signup'>
        <SignUp />
      </Route>
      </Switch>
      </Router>

      <Router>
      <Footer/>  
        <Switch>
          <Route path='/' exact/>
        </Switch>
    </Router>
    </div> 
    </div>
  );
}

export default App;
