import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Foto</h1>
      <div className="links">
        <Link to="/"style={{ 
          color: 'black'}}>Home</Link>
                  <Link to="/help"style={{ 
          color: 'black'}}>How to upload ?</Link>
        <Link to="/upload" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Upload</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;