import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

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
    </div>
  );
}

export default App;
