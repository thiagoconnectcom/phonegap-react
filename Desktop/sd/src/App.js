import React, {Component,Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 

//component
import Header from './components/Header';

//Pages
import Login from './pages/Login';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Fragment>
            <Router> 
              <Header/>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/Home" component={Home} />
                </Switch>
            </Router>
        </Fragment> 
      </div>
    );
  }
}

export default App;







