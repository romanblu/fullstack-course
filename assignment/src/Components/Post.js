import React from 'react';
import './post.css';

class Post extends React.Component {

    render() {
        return (
                <div className="post">
                    <div className="content">
                        <div className="content-holder">
                            <h3 className="blog-title">{this.props.title}</h3>
                            <p className="description">{this.props.description}</p>
                        </div>
                        <div className="post-date">Posted {this.props.dateNumber} {this.props.dateUnit} by {this.props.authorName}</div>
                    </div>
                    <div className="post-image">
                        <img src={this.props.imageSrc} alt="nice alpaca"/>
                    </div>

                </div>
            );
    }

}

export default Post;