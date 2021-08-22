import React, { useState } from 'react'

import './App.css'


const Upload = () => {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('image');
  const [body, setBody] = useState('description');
  const [author, setAuthor] = useState('user1');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('Landscape');

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'foto_lab8')
    setLoading(true)
    const res = await fetch(
      '      https://api.cloudinary.com/v1_1/da98bqdyn/image/upload',
      {
        method: 'POST',
        body: data
      }
    )

    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)

  }
  const upload = async e => {
    e.preventDefault();
    const f = {title,image,body,author,category};
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(f)
    })
    setStatus("upload success !")
  }

  return (
    <div className="App">
      <h1>Upload Image</h1><br/><br/><br/>
      <form onSubmit={upload}>
      <label>Image title:</label>
        <input 
        placeholder="Enter image title"
          type="text" 
          required 
          onChange={(e) => setTitle(e.target.value)}
        /><br/><br/><br/>
              <label>Description</label>
        <input 
          type="text" 
          placeholder="Enter description"
          required 
          onChange={(e) => setBody(e.target.value)}
        /><br/><br/><br/>
              <label>Author</label>
        <input 
          type="text" 
          required 
          placeholder="Enter image author"
          onChange={(e) => setAuthor(e.target.value)}
        /><br/><br/><br/>
              <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Landscape">Landscape</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Pets">Pets</option>
          <option value="Other">Other</option>
        </select><br/><br/><br/>      <input
        type="file"
        name="file"
        required
        placeholder="Upload an image"
        onChange={uploadImage}
      /><br/><br/><br/>
                  <button className="cat"
        >Upload</button><br/><br/><br/>
        <p>{status}</p><br/><br/><br/>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )} <br/><br/><br/>
          <div class="container bg-light">
        <div class="col-md-12 text-center">
        </div>
        
    </div>
    </form>
    </div>
  )
}

 
export default Upload;