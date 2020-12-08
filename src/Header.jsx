import React from 'react';
import {  Link } from 'react-router-dom';
import './style.css'
import logo from './logo.png'
const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue">
               <Link to="/"><img  id="image" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={logo} /></Link> 
   
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