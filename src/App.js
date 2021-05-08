import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Issues from './container/Issues';
import Comments from './container/Comments';

function App() {
  return (
    <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Issues}/>
          <Route path="/:number" component={Comments}/>
        </Switch>
    </Router>
  );
}

export default App;
