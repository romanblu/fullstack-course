import React from 'react';
import PostsList from '../PostsList';

class PostPage extends React.Component {
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
                    <div className="post-content">

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