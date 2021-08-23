import { Link } from 'react-router-dom';
import { useState } from "react";

const BlogList = ({ blogs }) => {
  
  const [landscape, setLandscape] = useState(true)
  const [food, setFood] = useState(true)
  const [travel, setTravel] = useState(true)
  const [pets, setPets] = useState(true)
  const [other, setOther] = useState(true)

  const [tLandscape, settLandscape] = useState("Landscape")
  const [tFood, settFood] = useState("Food")
  const [tTravel, settTravel] = useState("Travel")
  const [tPets, settPets] = useState("Pets")
  const [tOther, settOther] = useState("Other")
  const [tAll, settAll] = useState("All")
  
  const showLandscape = () =>{
    setLandscape(true)
    setFood(false)
    setTravel(false)
    setPets(false)
    setOther(false)
  }

  const showFood = () =>{
    setLandscape(false)
    setFood(true)
    setTravel(false)
    setPets(false)
    setOther(false)
  }

  const showTravel = () =>{
    setLandscape(false)
    setFood(false)
    setTravel(true)
    setPets(false)
    setOther(false)
  }

  const showPets = () =>{
    setLandscape(false)
    setFood(false)
    setTravel(false)
    setPets(true)
    setOther(false)
  }

  const showOther = () =>{
    setLandscape(false)
    setFood(false)
    setTravel(false)
    setPets(false)
    setOther(true)
  }

  const showAll = () =>{
    setLandscape(true)
    setFood(true)
    setTravel(true)
    setPets(true)
    setOther(true)
  }

  const changeFrench = () =>{
    settLandscape("Paysage")
    settFood("Cuisine")
    settTravel("Voyage")
    settPets("Animaux")
    settOther("Autre")
    settAll("Tout")
  }

  const changeEnglish = () =>{
    settLandscape("Landscape")
    settFood("Food")
    settTravel("Travel")
    settPets("Pets")
    settOther("Other")
    settAll("All")
  }

  return (
    <div><div>
      <button className = "cat1" onClick={changeFrench}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626465303/foto/larogjrvn9dvrbhe0l5w.png"width="20" height="20"></img>&ensp;Francais</button>&ensp;&ensp;
      <button className = "cat1" onClick={changeEnglish}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626465303/foto/larogjrvn9dvrbhe0l5w.png"width="20" height="20"></img>&ensp;Anglais</button>&ensp;&ensp;<br/><br/>
      <button className = "cat" onClick={showLandscape}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626456186/foto/l3cduvzqmuzbpevahg9o.png"width="20" height="20"></img>&ensp;{tLandscape}</button>&ensp;&ensp;
      <button className = "cat"  onClick={showFood}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626456565/foto/c73tivo28xa6oyvgb6f4.png"width="20" height="20"></img>&ensp;{tFood}</button>&ensp;&ensp;
      <button className = "cat" onClick={showTravel}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626456238/foto/txj4ymkpoghwhp9lbhrw.png"width="20" height="20"></img>&ensp;{tTravel}</button>&ensp;&ensp;
      <button className = "cat" onClick={showPets}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626455955/foto/pau5kcmxfyektcry83s2.png"width="20" height="20"></img>&ensp;{tPets}</button>&ensp;&ensp;
      <button className = "cat" onClick={showOther}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626457088/foto/padvjjjcfyqzmrqrpynd.png"width="20" height="20"></img>&ensp;{tOther}</button>&ensp;&ensp;
      <button className = "cat" onClick={showAll}><img src="https://res.cloudinary.com/da98bqdyn/image/upload/v1626456474/foto/nbs8kovjao0dpgjybx73.png"width="20" height="20"></img>&ensp;{tAll}</button>&ensp;&ensp;
    </div>
      {landscape?(
    <div className="blog-list-landscape">
      {blogs.filter(blog => blog.category=="Landscape").map(blog=> (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Photo by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>):null}
    {food?(
    <div className="blog-list-landscape">
      {blogs.filter(blog => blog.category=="Food").map(blog=> (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Photo by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>):null}
    {travel?(
    <div className="blog-list-landscape">
      {blogs.filter(blog => blog.category=="Travel").map(blog=> (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Photo by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>):null}
    {pets?(
    <div className="blog-list-landscape">
      {blogs.filter(blog => blog.category=="Pets").map(blog=> (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Photo by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>):null}
    {other?(
    <div className="blog-list-landscape">
      {blogs.filter(blog => blog.category=="Other").map(blog=> (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Photo by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>):null}
</div>
  );
}
 
export default BlogList;