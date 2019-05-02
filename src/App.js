import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout'
import Profiles from './pages/Profiles'
import ProfileDetails from './pages/ProfileDetails'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFire, faDotCircle, faFireAlt, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

library.add(faFire, faDotCircle, faFireAlt, faMapMarkerAlt, faLocationArrow)

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
              <Route path="/profiles/profile/:id" component={ProfileDetails} />
              <Route path="/" component={Profiles} />
          </Switch>
      </Layout>
    </div>
  )
}

export default App;
