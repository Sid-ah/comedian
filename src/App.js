import React from 'react';
import Landing from './views/Components/Components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

const FourOhFour = () => <h1>404 we are out, so should you!</h1>
const Upcoming = () => <h1>We are working on updating this page, please come back later!</h1>
const Videos = () => <h1>We are currently uploading the videos, please come back later!</h1>
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Landing}/>
        <Route exact path="/upcoming"  component={Upcoming}/>
        <Route exact path="/videos" component={Videos} />
        <Route component={FourOhFour}/>
      </Switch>
    </Router>
  );
}

export default App;
