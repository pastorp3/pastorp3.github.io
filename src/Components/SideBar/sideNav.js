import React from 'react';
import './sideNav.css'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/alfonsoMarinaLogo.png'
import { MdSpaceDashboard } from 'react-icons/md'
import { BsBarChartFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa';

const SideNav = ({user}) => {
    let location = useLocation();
    const { pathname } = location;
    const iconsSTyle = {
        color: '#867971',
    }
    return(
        <div className="w-15 h-100 min-vh-100 sideNavPadding">
            <div className="text-center logoContainer">
                <img src={Logo} alt="Alfonso Marina Logo" className="w-25" />
            </div>
            <div>
                <div className={ (pathname === '/dashboard' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/dashboard' style={{ textDecoration: 'none', color: '#867971' }}>
                            <MdSpaceDashboard style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">DASHBOARD</span>
                        </Link>
                    </div>
                </div>
                <div className={ (pathname === '/rate' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/rate' style={{ textDecoration: 'none', color: '#867971' }}>
                            <BsBarChartFill style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">RATE</span>
                        </Link>
                    </div>
                </div>
                <div className={ (pathname === '/profile' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/profile' style={{ textDecoration: 'none' , color: '#867971' }}>
                            <FaUserAlt style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">PROFILE</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center logOutContainer'>
                <Link to='/auth/login' style={{ textDecoration: 'none', color: '#867971' }}>
                    <span className="fs-3 ps-2">Log Out</span>
                </Link>
            </div>
        </div>
    )
}

export default SideNav

