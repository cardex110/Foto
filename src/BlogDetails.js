import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useState } from 'react'
import CommentList from "./CommentList";

const BlogDetails = () => {
  const [comment, setComment] = useState('')
  const { id } = useParams();
  const pub = Number(id)
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const { data: comments, error1, isPending1 } = useFetch('http://localhost:8000/comments/');
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const c = { comment , pub};

    fetch('http://localhost:8000/comments/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => {
      window.location.reload();
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <h6>Written by { blog.author }</h6>
          <img src={blog.image} style={{ width: '300px' }} /><br/><br/><br/>
          <h6> Description : {blog.body}</h6><br/>
          <h6> Category : {blog.category}</h6><br/><br/><br/>
        </article>
      )}
        <div >
          <h6>Comments : </h6>
        { error1 && <div>{ error }</div> }
        { isPending1 && <div>Loading...</div> }
        { comments && <CommentList idd={pub} comments={comments}/> }
      </div>
          <div>
            <form onSubmit={handleSubmit}>       
              <label>Comment </label>
              <input 
                type="text" 
                required 
                onChange={(e) => setComment(e.target.value)}
              /><br/><br/>
              <button>submit</button>
            </form>
            
          </div>
    </div>

  );
}
 
export default BlogDetails;