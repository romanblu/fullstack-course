import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './Components/pages/MainPage';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import SignIn from './Components/pages/SignIn';
import PostPage from './Components/pages/PostPage';
import NewPost from './Components/pages/NewPost';


function App() {

  const posts = [
    {
        title:"Blog post #1",
        description:"My  first blog post  is all about my  blog post  and how to write a new post in my blog, find it here",
        dateNumber: 2 ,
        dateUnit:"days",
        authorName:"Israel",
        imageSrc:"https://cdn.pixabay.com/photo/2015/10/12/20/52/alpaca-985158_960_720.jpg"
    },
    {
        title:"Blog post #2",
        description:"My second blog post is all about my blog post",
        dateNumber: 2 ,
        dateUnit:"days",
        authorName:"Joe",
        imageSrc:"https://images.unsplash.com/photo-1511885663737-eea53f6d6187?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
    },
    {
        title:"Blog post #3",
        description:"My third blog post is all about my blog post",
        dateNumber: 3 ,
        dateUnit:"days",
        authorName:"Israel",
        imageSrc:"https://images.unsplash.com/photo-1534615098829-958121bcc188?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
    
];

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
              <li><Link to="signin">Sign In</Link></li>
            </ul>
        </div>

        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/signin">
            <SignIn />
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

export default App;
