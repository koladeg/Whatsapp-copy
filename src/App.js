import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
  
      ):(
        <Router>
          <div className="app__body">
          <Sidebar />
            <Switch> 
              <Route path = '/rooms/:roomId'>
                <Chat /> 
              </Route>
              <Route path = '/'> 
                <Chat /> 
              </Route>
              
            </Switch>
        
          </div>
        </Router>
      )}
      <h1>Lets gooo</h1>
      
    </div>
  );
}

export default App;
