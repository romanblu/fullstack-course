import MainPage from './Components/MainPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import SignIn from './Components/pages/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        
        <div className="navbar">
            <ul className="navbar-left">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>

            </ul>
            <ul className="navbar-right">
              <li><Link to="signin">Sign In</Link></li>
            </ul>
        </div>

        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>


      </Router>      
    </div>
  );
}

export default App;
