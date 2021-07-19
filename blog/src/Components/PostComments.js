import React, {useState} from 'react'

export default function PostComments() {
    const [showComments, setShowComments] = useState(false)
    const demoComments = [
        {
            authorName: 'Ricardo',
            authorId:12,
            postId:10,
            content: 'Whats up',
            date: "Today at 15:03"
        },
        {
            authorName: 'Ricardo2',
            authorId:12,
            postId:10,
            content: 'Whats up',
            date: "Today at 15:03"
        },
        {
            authorName: 'Ricardo3',
            authorId:12,
            postId:10,
            content: 'Whats up',
            date: "Today at 15:03"
        },
        {
            authorName: 'Ricardo4',
            authorId:12,
            postId:10,
            content: 'Whats up5',
            date: "Today at 15:03"
        },
        {
            authorName: 'Ricardo6',
            authorId:12,
            postId:10,
            content: 'Whats up',
            date: "Today at 15:03"
        }
    ]

    const onShowComments = () => {
        setShowComments(true);
    }

    const onHideComments = () => {
        setShowComments(false);
    }

    const Comments = demoComments.map(comment => 
         (<div className="comment">
             <div className="user-avatar">
                    <img src="https://assets.atdw-online.com.au/images/9a9e6bc10a768c84cb66b7fda9149e2a.jpeg?rect=0,1071,3672,2754&w=745&h=559&&rot=360" alt="" />
                </div>
            <div className="comment-details">
                <div className="comment-author-date">
                    <p className="comment-author-name">{comment.authorName}</p>
                    <p className="comment-date">{comment.date}</p>
                </div>
                
                <p className="comment-content">{comment.content}</p>
            </div>
            
        </div>)
    ) 
    
    const showCommentsButton = <a className="show-hide-comments" onClick={onShowComments}>Show Comments</a>;
    const hideCommentsButton = <a className="show-hide-comments" onClick={onHideComments}>Hide Comments</a>;

    return (


        <div className="post-comments">
            
            {showComments ? hideCommentsButton : showCommentsButton}
            {showComments ? Comments : '' }
            <div className="user-comment">
                <div className="user-avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06esYfQM8YO9mUMLqyA3hGkivXdCdry8I_Q&usqp=CAU" alt="" />
                </div>
                <div className="user-comment-input">
                    <input type="text" placeholder="Say something smart please..." />
                    <button class="send-comment">Send</button>
                </div>

            </div>
        </div>
    )
}