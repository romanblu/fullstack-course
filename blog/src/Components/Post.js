import React from 'react';
import './post.css';
import {Link} from 'react-router-dom';

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
            image: this.props.imageSrc,
            loggedUser : this.props.currentUser, // issue - not rerendering when app gets current user 
            isAuthor: false,
            hasUpdated: false
        }
    } 


    componentDidMount(){
        if(!this.props.currentUser){
            this.setState({isAuthor:false});
        }else{
            
            if(this.props.currentUser.userId === this.state.authorId){
                this.setState({isAuthor:true});
            }
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentUser !== this.props.currentUser){
            if(!this.props.currentUser){
                this.setState({isAuthor:false});
            }else{
                if(this.props.currentUser.userId === this.state.authorId){
                    this.setState({isAuthor:true});
                }
            }
        }
    }

    handlePostDelete = () => {
        this.props.deletePost(this.state.id);
        this.props.hasUpdated();
    }

    handlePostEdit = () => {
        this.props.editPost(this.state.id);
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
                        {this.state.isAuthor ? <div className="edit-delete">
                            <button onClick={this.handlePostDelete} className="delete-post">Delete</button> 
                            <button onClick={this.handlePostEdit} className="edit-post">Edit</button>
                        </div> : ''}
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