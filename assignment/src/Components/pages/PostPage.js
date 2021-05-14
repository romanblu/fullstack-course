import React from 'react';
import PostsList from '../PostsList';
import Post from '../Post';
import axios from 'axios';

class PostPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            user: {
                name: "",
                username:"",
                password:""
            }
        };
    }
    
    
    posts = [
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
            description:"My first blog post is all about my blog post and how to write a new post in my blog, find it heret",
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

    getUserById = (id) => {
        const url  = "/users/" + id;
        axios.get(url).then((res) => {
            this.setState({
              user:res.data,
              resp:"Successfully got user"
            });
            console.log(this.state);
            
          });
    }

    getPostById = (id) => {
        const url = "/posts/" + id;
        axios.get(url).then((res) => {
          this.setState({
            data:res.data,
            resp:null
          });

          this.getUserById(this.state.data.author_id);
          console.log(this.state);
        });
      }


    componentDidMount (){
        const {id} = this.props.match.params;

        this.getPostById(id);

        console.log(this.state);
    }

    render () {
        
    const postsLinks1 = [
        {
            postTitle: "Blog post #1 ",
            destination:"#"
        },
        {
            postTitle: "Blog post #2 ",
            destination:"#"
        },
        {
            postTitle: "Blog post #3 ",
            destination:"#"
        }
    ];
    const postsLinks2 = [
        {
            postTitle: "Blog post #3 ",
            destination:"#"
        },
        {
            postTitle: "Blog post #1 ",
            destination:"#"
        },
        {
            postTitle: "Blog post #2 ",
            destination:"#"
        }
    ];
        
        return (
            <div>
                <div className="container">
                    <div className="blog-posts">
                           
                        <Post title={this.state.data.title} 
                        description={this.state.data.content} 
                        authorName={this.state.user.name}
                        imageSrc={this.state.data.image}
                        id={this.state.data.id} 
                        />
                    </div>

                    <div className="sidebar">
                        <PostsList title="Latest" postsLinks={postsLinks1}/>
                        <PostsList title="Popular" postsLinks={postsLinks2}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PostPage;