import React from 'react'
import './Footer.css'

const Footer=()=>(
    <>
    <div className="Footer-Outter">
        <div className ="Footer">
        <div className ="Footer-Logo" >
        <div>
            <img className="Footer-Image" src="https://static.wixstatic.com/media/aa56b7_d264a1ed233a46ef815289d692bf8274~mv2.jpg/v1/fill/w_75,h_75,al_c,q_80,usm_0.66_1.00_0.01/logo_edited.webp"/>
        </div>
        <h2>LEARN ELECTRONICS</h2>
        </div>
        <span className="contacthead">
            CONTACT US
        </span>
        </div>
        <div className="Foot">   
        <div className="cente">
            <ul className="list-main">
                <li className="underline">HOME </li><br/>
                <li className="underline">Blogs</li><br/>
                <li className="underline">DIY PROJECT</li><br/>
                <li className="underline">  Team</li><br/>
                <li className="underline">About</li><br/>
                <li className="underline">Internship</li>
            </ul> 
        </div>
        <div >
            <table className="Contact">
                <tbody>
                <tr>
                <td><input type="text" placeholder=" FIRST NAME" className="Fname" className="transp"/></td>
                <td><input type="text" placeholder=" LAST NAME" className="Lname" className="transp"/></td>
                </tr>
                <tr>
                <td><input type="email" placeholder=" EMAIL" className="Email" className="transp"/></td>
                <td><input type="number" placeholder="NUMBER" className="Number" className="transp"/></td>
                </tr>
                </tbody>
            </table>

                    
                    <p>Message</p>
                        <div>
                        <textarea rows="4" className="review" className="transp"></textarea>
                        </div>
                        <button className="btn-submit">Submit</button>
        </div>
        </div>
    </div>
    </>
)
export default Footer;