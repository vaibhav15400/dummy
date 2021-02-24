import React from 'react';
import './Content.css';
import heart from '../../../assests/heart.png'
import viewer from '../../../assests/viewer.png'

 
const Content=()=>{

            return(
                    <>
                         <div className="Outter-Most">
                             {/*BLOGS*/}

                             <div className="Main-Head">
                             <div className="Left">
                                <h1>Blogs</h1>
                                </div>
                                <div className="Right" >
                                 <button className="Change-button">></button></div>
                             </div>
                                    
                                <div className="Inner-card">

                                    <div className="Blogs">
                                            {/*BLLOG 1 */}
                                        <div className="Blog-Post">
                                        <img src="data:image/png;base64,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"
                                         className="Blog-Image1"/>
                                        <h4>Wein Bridge Oscillator</h4>
                                        <hr />
                                        <div className="Blog-Main">
                                        <img src={viewer}  className="Blog-Logo"/>
                                        <input type="text"  placeholder="comment" className="comment"/>
                                        <img src={heart} className="Blog-Logo" /></div>
                                        </div>
                                        {/*BLLOG 2 */}
                                            <div className="Blog-Post1">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uT8bBpMfWfW-1hC8HJyeebcPnbS9jc_idg&usqp=CAU"
                                            className="Blog-Image1"/>
                                            <h4>Carbon nanotubes - Synthesis, Properties and Applications</h4>
                                            <hr />
                                            <div className="Blog-Main">
                                            <img src={viewer}  className="Blog-Logo"/>
                                            <input type="text"  placeholder="comment" className="comment"/>
                                            <img src={heart} className="Blog-Logo" /></div>
                                            </div>
                                        {/*BLLOG 3 */}
                                            <div className="Blog-Post3">
                                                <img src="https://blog.serverdensity.com/wp-content/uploads/2017/02/Blog_TCP_IP_V2.png"
                                                className="Blog-Image1"/>
                                                <h4>TCP/IP - Internet Protocol Suite</h4>
                                                <hr />
                                                <div className="Blog-Main">
                                                <img src={viewer}  className="Blog-Logo"/>
                                                <input type="text"  placeholder="comment" className="comment"/>
                                                <img src={heart} className="Blog-Logo" /></div>
                                                </div>
                                    </div>
                                </div>
                                                {/*DIY PROJECTS*/}
                                                <div className="Main-Head">
                                            <div className="Left">
                                                <h1>DIY PROJECTS</h1>
                                                </div>
                                                <div className="Right" >
                                                <button className="Change-button">></button></div>
                                            </div>
                                                <div className="DIY">
                                            {/*DIY PROJECTS 1 */}
                                        <div className="DIY-Post">
                                        <h2 className="DIY1">Interfacing Tilt Sensor with Arduino UNO</h2>
                                        <h5>Code: const int ledPin = 9;   //led is connected to arduino pin 9  const int sensorPin=8;    // tilt switch is connected to pin 8  void s...</h5>
                                        <hr />
                                        <div className="Blog-Main">
                                        <img src={viewer}  className="Blog-Logo"/>
                                        <input type="text"  placeholder="comment" className="comment"/>
                                        <img src={heart} className="Blog-Logo" /></div>
                                        </div>
                                        {/*DIY PROJECTS 2 */}
                                            <div className="DIY-Post1">
                                            <h2 className="DIY1">Controlling stepper motor with Joystick Sensor and Arduino</h2>
                                           <h5>Code: int s1 = 5; int s2 = 6; int s3 = 7; int s4 = 8; int x;  void setup()  // put your setup code here, to run once: pinMode(s1, OUTPUT...</h5>
                                            <hr />
                                            <div className="Blog-Main">
                                            <img src={viewer}  className="Blog-Logo"/>
                                            <input type="text"  placeholder="comment" className="comment"/>
                                            <img src={heart} className="Blog-Logo" /></div>
                                            </div>
                                        {/*DIY PROJECTS 3 */}
                                            <div className="DIY-Post3">
                                            {/* <img src="https://circuitdigest.com/sites/default/files/circuitdiagram_mic/Simple-Arduino-Digital-Voltmeter-Circuit-diagram.png " */}
                                             {/* className="DIY1"/> */}
                                                <h5>Building a Digital Voltmeter using Arduino UNO.</h5>
                                                <hr />
                                                <div className="Blog-Main">
                                                <img src={viewer}  className="Blog-Logo"/>
                                                <input type="text"  placeholder="comment" className="comment"/>
                                                <img src={heart} className="Blog-Logo" /></div>
                                                </div>
                                    </div>

                                    {/*ENGINEERING*/}
                                    
                             <div className="Main-Head">
                             <div className="Left">
                                <h1>ENGINEERING</h1>
                                </div>
                                <div className="Right" >
                                 <button className="Change-button">></button></div>
                             </div>
                                    
                                <div className="Inner-card">

                                    <div className="Blogs">
                                            {/*ENGINEERING 1 */}
                                        <div className="Blog-Post">
                                        <img src="https://static.wixstatic.com/media/59035a_dddad1f90c474a67958071b00499e041~mv2.png/v1/fill/w_389,h_484,al_c,lg_1,q_85/59035a_dddad1f90c474a67958071b00499e041~mv2.webp"
                                         className="Blog-Image1"/><br />
                                        <button className="btn">SUBJECT</button>
                                        </div>
                                        {/*ENGINEERING 2 */}
                                            <div className="Blog-Post1">
                                            <img src="https://static.wixstatic.com/media/59035a_7fb0c0b7f56a4294bba4aa3afa1a9018~mv2.png/v1/fill/w_389,h_484,al_c,q_85,usm_0.66_1.00_0.01/59035a_7fb0c0b7f56a4294bba4aa3afa1a9018~mv2.webp"
                                            className="Blog-Image1"/><br />
                                            <button className="btn">Interview</button>

                                            </div>
                                        {/*ENGINEERING 3 */}
                                            <div className="Blog-Post3">
                                                <img src="https://static.wixstatic.com/media/59035a_efd28dcdad87415a9cae77850de74b51~mv2.jpg/v1/fill/w_389,h_484,al_c,q_80,usm_0.66_1.00_0.01/59035a_efd28dcdad87415a9cae77850de74b51~mv2.webp"
                                                className="Blog-Image1"/><br />
                                                <button className="btn">PROJECTS</button>
                                                </div>
                                    </div>
                                </div>
                                {/*COURSES */}

                                <div className="Main-Head">
                             <div className="Left">
                                <h1>COURSES</h1>
                                </div>
                                <div className="Right" >
                                 <button className="Change-button">></button></div>
                             </div>
                                    
                                <div className="Inner-card">

                                    <div className="Blogs">
                                            {/*COURSES 1 */}
                                        <div className="Blog-Post">
                                        <img src="https://static.wixstatic.com/media/aa56b7_d37a79f544ac4a9286980580b19fddc3~mv2.png/v1/fill/w_300,h_376,al_c,lg_1,q_85/aa56b7_d37a79f544ac4a9286980580b19fddc3~mv2.webp"
                                         className="Blog-Image1"/><br />
                                        <button className="btn"> START  COURSE </button>
                                        <h3>PCB DESIGNING-BASICS</h3>
                                        </div>
                                        {/*COURSE 2 */}
                                            <div className="Blog-Post1">
                                            <img src="https://static.wixstatic.com/media/aa56b7_1974401435d7449ebfd450e84aed3fc3~mv2.png/v1/fill/w_389,h_486,al_c,q_85,usm_0.66_1.00_0.01/aa56b7_1974401435d7449ebfd450e84aed3fc3~mv2.webp"
                                            className="Blog-Image1"/><br />
                                            <button className="btn">START   COURSE</button>
                                            <h3>Raspberry Pi-Introduction</h3>
                                            </div>
                                        {/*COURSE 3 */}
                                            <div className="Blog-Post3">
                                                <img src="https://static.wixstatic.com/media/aa56b7_06f47dad65bb49cc85985f4efff627a5~mv2.png/v1/fill/w_389,h_486,al_c,q_85,usm_0.66_1.00_0.01/aa56b7_06f47dad65bb49cc85985f4efff627a5~mv2.webp" 
                                                className="Blog-Image1"/><br />
                                                <button className="btn">START  COURSE</button>
                                                <h3>ARDUNIO-Introduction</h3>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </>)
}


export default Content;