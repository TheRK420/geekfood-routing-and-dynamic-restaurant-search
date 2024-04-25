import './Navbar.css'
import './Button'
import { Button } from './Button';
import {Link} from "react-router-dom";

import logo from './.././assest/logo/geekfood-brand-logo.svg';

function Navbar (){
    return (
        <>
            <nav className="navbar">

                <div className='vertical-center' style={{gap:"4px"}}>
                    <img src={logo} alt="GeekFood Logo"/>
                    <span>GeekFoods</span>
                </div>

                <div className='nav-links vertical-center'>
                    <div><Link to="/" style={{textDecoration:"none",color:"white",cursor:"pointer"}}><span>Home</span></Link></div>
                    <div><Link to="/quotes" style={{textDecoration:"none",color:"white",cursor:"pointer"}}><span>Quote</span></Link></div>
                    <div><Link to="/restaurants" style={{textDecoration:"none",color:"white",cursor:"pointer"}}><span>Restaurant</span></Link></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>

                <div className='vertical-center'>
                    <Button borderKaRadius="8px" backgroundKaColor="#1C4ED8" fontColor="#FFFFFF">
                        Get Started
                    </Button>
                </div>

            </nav>
        </>
    )
}

export default Navbar;