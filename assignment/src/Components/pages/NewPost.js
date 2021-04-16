import React from 'react';

class NewPost extends React.Component {
    render  (){
        return (
            <div>
                <div className="container">
                    <div className="new-post">
                        <h1>New Post</h1>

                        <label htmlFor="post-title">Title: </label>
                        <input type="text"id="post-title"/>
                        <label htmlFor="post-content">Write Post Content:</label>
                        <textarea name="content" id="post-content" cols="30" rows="10" className="post-content"></textarea>
                        <p className="characters-left smaller-font">256 characters left</p>
                        <input type="submit" value="Send Post" className="submit-post"/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NewPost;