import React from 'react';
import {  Link } from 'react-router-dom';
import './style.css'
// import logo from '../public/logo.png'
const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue">
                <svg href="/" img="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
   
                    <Link to="/" className="navbar-brand">Home</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            {/* < to="/aboutUs"> Home </> */}

                             <Link to="/aboutUs" className="navbar-brand" >About Us</Link>
            
                        </li>
                        <li className="nav-item">
  
                            <Link to="/aboutUs" className="navbar-brand" to="/contactUs" >Contact Us</Link>
           
                        </li>

                            <Link to="/aboutUs" className="navbar-brand" to="/login" >Login</Link>
      
              
                            <Link to="/aboutUs" className="navbar-brand" to="/SignUp" >Sign Up</Link>
             
                        {/* <li className="nav-item dropdown">
                            <a className="navbar-brand dropdown-toggle" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                             </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href >Action</a>
                                <a className="dropdown-item" >Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" >Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand disabled" >Disabled</a>
                        </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </>
    );
}

export default Header;