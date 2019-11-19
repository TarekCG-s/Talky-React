import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TalksPage from './pages/TalksPage';
import TalkDetails from './pages/TalkDetails';
import AddTalk from './pages/AddTalk';

class App extends Component {

  render() {
    return(
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={TalksPage} />
            <Route exact path='/:talkID' component={TalkDetails} />
            <Route exact path='/new/message' component={AddTalk} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;
