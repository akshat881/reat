import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
export default function Nav(){
    function reloadPage(){ 
        window.location.reload(); 
    }
    return(
        
        <header className="header" id="navbar-collapse-toggle">

    <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <li className="icon-box active" onClick={ reloadPage }>
            <i className="fa fa-home"></i>
            <Link to="/">
                <h2>Home</h2>
            </Link>
        </li>
        <li className="icon-box" onClick={ reloadPage }>
            <i className="fa fa-user"></i>
            <Link to="/about">
                <h2>About</h2>
            </Link>
        </li>
        <li className="icon-box" onClick={ reloadPage }>
            <i className="fa fa-briefcase"></i>
            <Link to="/portfolio">
                <h2>Portfolio</h2>
            </Link>
        </li>
        <li className="icon-box" onClick={ reloadPage }>
            <i className="fa fa-envelope-open"></i>
            <Link to='/contact'>
                <h2>Contact</h2>
            </Link>
        </li>

    </ul>

    <nav role="navigation" className="d-block d-lg-none">
        <div id="menuToggle">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
            <ul className="list-unstyled" id="menu">
                <li className="active"><a href="index.html"><i className="fa fa-home"></i><span>Home</span></a></li>
                <li><a href="about.html"><i className="fa fa-user"></i><span>About</span></a></li>
                <li><a href="portfolio.html"><i className="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                <li><a href="contact.html"><i className="fa fa-envelope-open"></i><span>Contact</span></a></li>
               
            </ul>
        </div>
    </nav>
  
</header>
        
    )
}