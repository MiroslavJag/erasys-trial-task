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
              <Route path="/profiles/profile/:id" component={ProfileDetails} />
              <Route path="/profiles" component={Profiles} />
          </Switch>
      </Layout>
    </div>
  )
}

export default App;
