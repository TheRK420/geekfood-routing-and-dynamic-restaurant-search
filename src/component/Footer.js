import './Footer.css'
import './Button'
import { Button } from './Button';

import logo from './.././assest/image/geekster-logo.png';

function Footer (){
    return (
        <>
            <footer>
                <div className='contentfoot'>
                    <img src={logo} alt='hii'/>
                    <span className='fndspan'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                    <span className='tndspan'> Incidunt consequuntur amet culpa cum itaque neque.</span>
                    <div className='listlinks'>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>History</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='listsocials'>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Github</li>
                            <li>Bing</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;