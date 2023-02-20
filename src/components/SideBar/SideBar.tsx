import { Link } from "react-router-dom";
import CategoryItem from "../CategoryItem/CategoryItem";
import navLinks from "./SideBarMockData";
import { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.css';
import { IconContext } from "react-icons";

const SideBar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="header-container">
                    <h1>Popditt</h1>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {navLinks.map(navLink => {
                        return <CategoryItem categoryName={navLink}/>
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default SideBar;