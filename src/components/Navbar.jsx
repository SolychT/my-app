import React from 'react';
import classes from './Navbar.module.css';

let classes = {
'nav': 'Navbar_nav__l62eJ',
'item':'Navbar_item__q4Q3t'

}

const Navbar = () => {
    return <nav className= {classes.nav}>
                <div className= {classes.item}>
                    <a>
                        Profile
                    </a>
                </div>
                <div className='item'>
                    <a>
                        Messages
                    </a>
                </div>
                <div className='item'>
                    <a>
                       News
                    </a>
                </div>
                <div className='item'>
                    <a>
                        Music
                    </a>
                </div>
                <div className='item'>
                    <a>
                        Settings
                    </a>
                </div>
            </nav>
}

export default Navbar;