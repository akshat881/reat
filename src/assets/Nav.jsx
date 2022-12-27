import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
export default function Nav(){
    const [ico,icon]=useState('');
    const [ic,io]=useState('');
    function reloadPage(){ 
        window.location.reload(); 
    }
useEffect(()=>{
    if(ic=='active'){
        io('active')
    }
    else{
        io('')
    }
},[])
    return(
        
        <header className="header" id="navbar-collapse-toggle">

    <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
        <li className={`icon-box ${ic}`} onClick={ ()=>{reloadPage();  io('active')}}>
            <i className="fa fa-home"></i>
            <Link to="/">
                <h2>Home</h2>
            </Link>
        </li>
        <li className={`icon-box ${ic}`} onClick={()=>{reloadPage();io('active') }}>
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
                <li className="active" onClick={ reloadPage }><Link to="/"><i className="fa fa-home"></i><span>Home</span></Link></li>
                <li onClick={ reloadPage }><Link to="/about"><i className="fa fa-user"></i><span>About</span></Link></li>
                <li onClick={ reloadPage }><Link to="/portfolio"><i className="fa fa-folder-open"></i><span>Portfolio</span></Link></li>
                <li onClick={ reloadPage }><Link to="/contact"><i className="fa fa-envelope-open"></i><span>Contact</span></Link></li>
               
            </ul>
        </div>
    </nav>
  
</header>
        
    )
}