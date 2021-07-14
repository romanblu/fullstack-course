import React from 'react';
import './post.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            date: this.props.datePosted,
            authorName: "",
            authorId: this.props.authorId,
            image: this.props.imageSrc
        }
    }

    componentDidMount(){
        // const url = "/api/posts/" + this.props.id;
        // axios.get(url).then((res) => {
        //     console.log("POST ",res)
        //     this.setState({ authorName: res.data.username,
        //                     authorId: res.data.userId,
        //                     description: res.data.content,
        //                     id: res.data.id,
        //                     image: res.data.image,
        //                     title: res.data
        //                 });
        // });
    }

    // getAuthorNameById = (id) => {
    //     const url = "/api/users/"+id;
    //     axios.get(url).then((res) => {
    //         this.setState({
    //             authorName: res.data.username
    //         });
    //     });
    // }

    getPost(){
        
    }

    render() {

        return (
                <div className="post" onClick={console.log("clicked ")}>
                    <div className="content">
                        <div className="content-holder">
                            <h3><Link to={`/post/${this.state.id}`} className="blog-title">{this.props.title}</Link></h3>
                            
                            <p className="description">{this.props.description}</p>
                        </div>
                        <div className="post-date">Posted {this.props.datePosted} by {this.state.authorName}</div>
                    </div>
                    <div className="post-image">
                        <img src={this.props.imageSrc} alt="nice alpaca"/>
                    </div>
                    <div className="post-comments">
                        
                    </div>
                </div>
            );
    }

}

export default Post;