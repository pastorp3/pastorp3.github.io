import React from 'react';
import './SideBarAdmin.css'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/alfonsoMarinaLogo.png'
import { MdSpaceDashboard } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { ImOffice } from 'react-icons/im';

const SideBarAdmin = () => {
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
                <div className={ (pathname === '/admin/dashboard' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/admin/dashboard' style={{ textDecoration: 'none', color: '#867971' }}>
                            <MdSpaceDashboard style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">DASHBOARD</span>
                        </Link>
                    </div>
                </div>
                <div className={ (pathname === '/admin/users' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/admin/users' style={{ textDecoration: 'none', color: '#867971' }}>
                            <ImUsers style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">Users</span>
                        </Link>
                    </div>
                </div>
                <div className={ (pathname === '/admin/departments' ? 'bg-lowBrown' : "bg-white") + " linkContainer"}>
                    <div className='paddingNav'>
                        <Link to='/admin/dashboard' style={{ textDecoration: 'none' , color: '#867971' }}>
                            <ImOffice style={iconsSTyle} size='1.2em'/><span className="fs-6 ps-2">Departments</span>
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

export default SideBarAdmin;

