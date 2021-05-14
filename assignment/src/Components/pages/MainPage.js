import React from 'react';
import Post from '../Post';
import PostsList from '../PostsList';
import axios from 'axios';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { data: []  };
    }


    getUserById =async (id) => {
        const url  = "/users/" + id;
        axios.get(url).then((res) => {
            return res.data;
        });
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
    

      getAuthorNameById = (id) => {

      }
    
      componentDidMount(){
        this.getAllPosts();
      }

    render() {

        console.log(this.state.data);

        const postItems = this.state.data.map(post => (
            
            <Post title={post.title} description={post.content} image={post.image}
                 authorName={"Roman"}
                imageSrc={post.image}
            id={post.id} name={this.getAuthorNameById(post.authorId)} />
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