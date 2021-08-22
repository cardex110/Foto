import React from 'react'

const CommentList = (props) => {
    const comments = props.comments
    const idd = props.idd
    
    return ( 
        <div className="blog-list-landscape">
        {comments.filter(blog => blog.pub==idd).map(blog=> (
          <div className="blog-preview" key={blog.id} >
              <p>{ blog.comment }</p>
          </div>
          
        ))}</div>
     );
}
 
export default CommentList;