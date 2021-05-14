import React from 'react';
import './post.css';
import {Link} from 'react-router-dom';

class Post extends React.Component {

    render() {
        return (
                <div className="post" onClick={console.log("clicked ")}>
                    <div className="content">
                        <div className="content-holder">
                            <h3><Link to={`/post/${this.props.id}`} className="blog-title">{this.props.title}</Link></h3>
                            
                            <p className="description">{this.props.description}</p>
                        </div>
                        <div className="post-date">Posted {this.props.datePosted} by {this.props.authorName}</div>
                    </div>
                    <div className="post-image">
                        <img src={this.props.imageSrc} alt="nice alpaca"/>
                    </div>

                </div>
            );
    }

}

export default Post;