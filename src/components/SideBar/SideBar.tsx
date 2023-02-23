import { Link, redirect } from "react-router-dom";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.css';
import '../CategoryItem/CategoryItem.css';
import { IconContext } from "react-icons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchMostPopularCategories } from "../../features/topCategories/topCategoriesSlice";

type TopCategories = {
    topCategories: string[]
}

type TopCategory = {
    topCategory: string
}

const SideBar: React.FC<TopCategories> = ({topCategories}) => {

    // Showing and hiding sidebar functions
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    // Integrating the searchbar with the state
    const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.stopPropagation();
    }
    

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
                    <li
                        className="nav-item"
                        onClick={e => {
                        e.stopPropagation();
                    }}>
                        <form className="input-form">
                            <input type="text" placeholder="Search" onChange={handleSearchBar}/>
                        </form>
                    </li>
                    {topCategories.map((navLink, index): JSX.Element => {
                        return (
                        <CategoryItem key={index} categoryName={navLink}/>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default SideBar;