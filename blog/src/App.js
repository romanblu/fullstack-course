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
      
      
    };
}
  componentDidMount(){
    
    if(this.state.user == null){

        this.getUserData();
    }
    
  }

  setLogin = (user) => {
    const url = "/api/user";
    axios.get(url).then(res => {
        localStorage.setItem('username', user.user);
        localStorage.setItem('userId', res.data.user_id);
        this.setState({
          userLoggedIn:true,
          user: {username: user.user, userId: res.data.user_id},
        });
    });
    
  }

  editPost = (id) => {
    console.log("EDITING POST ", id); 
  }

  deletePost = (id) => {
    console.log("deleting POST ", id); 
    const url = `api/posts/${id}`
    axios.delete(url).then(res => {
      console.log("Posts deleted")
    }).catch((err) => console.log("Could not delete post. Error: ", err))
  }

  setLogout = () => {
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

  getUserData(){
    const url = "/api/user";
    axios.get(url).then(res => {
      const user_id = res.data.user_id;
      axios.get('/api/users/' + user_id).then(res => {
        console.log("USER RES", res)
        this.setState({
          user : {username: res.data.username, userId: res.data.id},
          userLoggedIn: true
        });
        
      });
  }).catch(() => console.log("No user logged in"));
  }

  render(){

    console.log("USER ID FROM LOCAL STORAGE ", localStorage);

    return (
      <div className="App">
        {console.log(this.state.user)}
        <Router>
          
          <div className="navbar">
              <ul className="navbar-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/new-post">New Post</Link></li>
              </ul>
              <ul className="navbar-right">
                { this.state.user != null ? <li><Link to={`/users/${this.state.user.username}`}>Hello {this.state.user.username}</Link></li>  :
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
              <NewPost user={this.state.user} />
            </Route>
            <Route path="/">
              <MainPage loggedUser={this.state.user || undefined} editPost={this.editPost}
               deletePost={this.deletePost} />
            </Route>
          </Switch>
        </Router>      
      </div>
    );
  }
  
}

export default App;
