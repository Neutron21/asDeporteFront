import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import './header.css';

function Header() {

  const { kickOfUser } = React.useContext(AppContext);
  
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate('/');
    kickOfUser();
  }
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" >Bienvenido a la Shopping List</span>
        <span className="navbar-brand" onClick={logoutUser}>Logut</span>
      </div>
    
    </nav>
  );
}

export { Header }