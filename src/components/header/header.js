import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import './header.css';

function Header() {
  const { kickOfUser,token, currentUser } = React.useContext(AppContext);
  
  
  const navigate = useNavigate();
  
  const logoutUser = () => {
    navigate('/');
    kickOfUser();
  }
  
  React.useEffect(() => {
    
  }, []);
  
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {token && <span className="navbar-brand camel-case" >Bienvenid@ {currentUser.name}</span>}
        {!token && <span className="navbar-brand" >Bienvenido a Shopping List</span>}
        {token && <span className="navbar-brand pointer" onClick={logoutUser}>Logout</span>}
        
      </div>
    
    </nav>
  );
}

export { Header }