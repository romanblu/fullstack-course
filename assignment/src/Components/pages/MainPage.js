import React from 'react';
import Post from '../Post';
import PostsList from '../PostsList';
import axios from 'axios';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { data: []  };
    }

    getAllPosts = () => {
        const url = "/posts";
        axios.get(url).then((res) => {
          console.log(res.data);
          this.setState({
            data:res.data,
            resp:null
          });
        });
      }
    
      componentDidMount(){
        this.getAllPosts();
      }

    render() {
        this.state.data.forEach(post => {
            
        });

        const posts = [
            {
                id:0,
                title:"Blog post #1",
                description:"My  first blog post  is all about my  blog post  and how to write a new post in my blog, find it here",
                dateNumber: 2 ,
                dateUnit:"days",
                authorName:"Israel",
                imageSrc:"https://cdn.pixabay.com/photo/2015/10/12/20/52/alpaca-985158_960_720.jpg"
            },
            {
                id:1,
                title:"Blog post #2",
                description:"My second blog post is all about my blog post",
                dateNumber: 2 ,
                dateUnit:"days",
                authorName:"Joe",
                imageSrc:"https://images.unsplash.com/photo-1511885663737-eea53f6d6187?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            },
            {
                id: 2,
                title:"Blog post #3",
                description:"My third blog post is all about my blog post",
                dateNumber: 3 ,
                dateUnit:"days",
                authorName:"Israel",
                imageSrc:"https://images.unsplash.com/photo-1534615098829-958121bcc188?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            
        ];
        console.log(this.state.data);
        console.log(posts);
        // const postItems = posts.map(post => (
        //     <Post {...post} id={post.id} />
        // ));
        const postItems = this.state.data.map(post => (
            <Post {...post} id={post.id} />
        ));
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
                        <div className="header"><h1>This is my blog</h1></div>
                        {postItems}
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

export default MainPage;