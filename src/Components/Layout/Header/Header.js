import React from 'react';
import './Header.css';
import Logo from '../../../assests/key.svg'
import {NavLink } from "react-router-dom";


const Header=()=>(
    <>
    <div className="line">
    <div>
        
            <div className ="Mix">
                <div className="Outter-most-header">
                <div className="Image">
                <img src="https://static.wixstatic.com/media/aa56b7_d264a1ed233a46ef815289d692bf8274~mv2.jpg/v1/fill/w_126,h_126,al_c,lg_1,q_80/logo_edited.webp"  className="Logo"/>
                </div>
                <div className="Text">
                <span className="Text1">LearnElectronics</span><br />
                <span className="Text2">-----------------------------------</span><br />
                <span className="Text3">Understanding Circuits</span><br />
                </div></div>
                <div className="Signup">
                    <img src={Logo}  className="Logo1"/>
                    <p>Signup</p>
                </div>
            </div>
    </div>
    <div className="Head">
                    <ul className="HeaderLinks">
                       <li ><NavLink exact className="HeaderLink" to='/'>Home</NavLink></li> 
                       <li ><NavLink exact className="HeaderLink" to="/About" >About-US</NavLink></li>
                       <li ><NavLink exact className="HeaderLink" to="/Online_Store" >Online_Store</NavLink></li>
                       <li ><NavLink exact className="HeaderLink" to="/Blogs" >Blogs</NavLink></li>
                       <li ><NavLink exact className="HeaderLink" to="/Project" >DIY Project</NavLink></li>
                       <li ><NavLink exact className="HeaderLink" to="/Quiz" >QUIZ</NavLink></li>
                    </ul>
                        <input className="input-container" type="text" required="" placeholder="FULL NAME"/>
                </div>
    </div>
    
    </>
)
export default Header;