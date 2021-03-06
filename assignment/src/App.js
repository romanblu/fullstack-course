import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PostPage from './pages/PostPage';
import NewPost from './pages/NewPost';
import Logout from './pages/Logout';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      userLoggedIn: false, 
      user: null,
      newPost: {
        title: "",
        content: ""
      }
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

    const url = "/api/logout"
    const data = { }
    axios.post(url, data).then(res => {
      console.log("Logged out successfully");
        
      this.setState({
        userLoggedIn:false,
        user: null
      });  
    })

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
                <li><Link to="/signin">Sign In</Link></li>
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
            <Route path="/logout">  
              <Logout user={this.state.user}/>
            </Route>
            <Route path="/post/:id" component={PostPage}>
            </Route>
            
            <Route path="/new-post">
              <NewPost />
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
