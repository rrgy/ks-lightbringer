import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <header>
            <div className='header-container'>
                <div>
                    <img className='logo' src='KS_Art-01_compressed.png' alt='Kinda Serious guild logo'/>
                </div>
                <div>
                    <Link to='/'><button className='header-button'>LATEST NEWS</button></Link>
                    <Link to='/raid'><button className='header-button'>RAID INFO</button></Link>
                    <Link to='/podcast'><button className='header-button'>PODCAST</button></Link>
                    <Link to='/recruitment'><button className='header-button'>RECRUITMENT</button></Link>
                    <Link to='/contact'><button className='header-button'>CONTACT</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header