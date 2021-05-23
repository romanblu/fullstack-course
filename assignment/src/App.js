import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import MainPage from './Components/pages/MainPage';
import About from './Components/pages/About';
import SignIn from './Components/pages/SignIn';
import SignUp from './Components/pages/SignUp';
import PostPage from './Components/pages/PostPage';
import NewPost from './Components/pages/NewPost';
import axios from 'axios';
import { Button } from '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      userLoggedIn: false, 
      user: null  
    };
}

 

  setLogin = (user) => {
    this.setState({
      userLoggedIn:true,
      user
    });
    console.log(this.state)
  }

  setLogout = () => {
    console.log("LOGGED OUT ")

    this.setState({
      userLoggedIn:false,
      user: null
    });  
  }


  render(){


    return (
      <div className="App">
        <Router>
          
          <div className="navbar">
              <ul className="navbar-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/new-post">New Post</Link></li>
              </ul>
              <ul className="navbar-right">
                { this.state.user != null ? <li><Link to={`/users/${this.state.user.user}`}>Hello {this.state.user.user}</Link></li>  :
                ""
                }
                { this.state.user != null ? <li><Link to="/logout" onClick={this.setLogout}>Logout</Link></li>  :
                <li><Link to="signin">Sign In</Link></li>
                }
              </ul>
          </div>
         
          <Switch>
            
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/signin">
              <SignIn onSignIn={this.setLogin} onLogout={this.setLogout} />
              {this.state.user != null ? <Redirect to="/" /> : "" }
            </Route>
            <Route path="/signup">
              <SignUp onSignIn={this.setLogin}/>
              {this.state.user != null ? <Redirect to="/" /> : "" }
            </Route>
            <Route path="/post/:id" component={PostPage}>
            </Route>
            
            <Route path="/new-post">
              <NewPost />
            </Route>
            <Route path="/logout">
                {this.setLogout}
              <Redirect to="/"></Redirect>
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
  
  
        </Router>      
  
  
  
      </div>
    );
  }
  
}

export default App;
