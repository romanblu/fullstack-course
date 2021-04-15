import React from 'react';
import Navbar from '../Navbar';
import Post from '../Post';
import PostsList from '../PostsList';

class MainPage extends React.Component{

    render() {
        const leftLinks = [
            {title:"Home", url: "#"}, 
            {title:"About Us", url: "#"},
            {title:"Contact Me", url: "#"}
        ];

        const rightLinks = [
            {title:"Sign In", url: "#"}
        ];

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
            
        const postItems = posts.map(post => (
            <Post {...post} />
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
                <Navbar leftLinks={leftLinks} rightLinks={rightLinks}/>
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