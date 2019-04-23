import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout'
import Profiles from './pages/Profiles'
import ProfileDetails from './pages/ProfileDetails'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
              <Route path="/profile-details" component={ProfileDetails} />
              <Route path="/" component={Profiles} />
          </Switch>
      </Layout>
    </div>
  )
}

export default App;
