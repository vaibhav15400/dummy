import React from 'react';
import './Symbol.css';
import FB from '../../../assests/facebook.svg'
import instagram from '../../../assests/instagram.svg'
import twitter from '../../../assests/twitter.svg'
import linkedin from '../../../assests/linkedin.svg'

const Symbols=()=>(
    <><div className="symbols">
        <span><img className="FB" src={FB}/></span>
        <span><img className="insta" src={instagram}/></span>
        <span><img className="twitter" src={twitter}/></span>
        <span><img className="linkedin" src={linkedin}/></span>
    </div>

    </>
)


export default Symbols;