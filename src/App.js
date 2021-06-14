import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BecomeVirtualFoster from './pages/BecomeVirtualFoster'
import Home from './pages/Home';
import About from "./pages/About";
import Education from "./pages/Education";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Adopt from "./pages/Apopt";
// import Urgently from "./pages/Urgently";
// import VirtualFoster from "./pages/VirtualFoster";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
          <Header />
          <div className="body-wrapper">
            <Switch>
              <Route exact path={'/become-virtual-foster/:name'} component={BecomeVirtualFoster}/>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/education'} component={Education}/>
              <Route exact path={'/membership'} component={Membership}/>
              <Route exact path={'/shop'} component={Shop}/>
              <Route exact path={'/contact'} component={Contact}/>
              <Route exact path={'/adopt'} component={Adopt}/>
              {/* <Route exact path={'/urgently'} component={Urgently}/> */}
              {/* <Route exact path={'/virtual-foster'} component={VirtualFoster}/> */}
            </Switch>
            </div> 
          <Footer />
      </div>
    </Router>
  );
}

export default App;
