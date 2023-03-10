import { Link } from "react-router-dom";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.css';
import '../CategoryItem/CategoryItem.css';
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

type Props = {
    topCategories: string[];
    isLoading: boolean;
    error: string | null;
}

const SideBar: React.FC<Props> = ({topCategories, isLoading, error}) => {
    
    // Showing and hiding sidebar functions
    const [sidebar, setSidebar] = useState(false);
    const [value, setValue] = useState("");

    const showSidebar = () => setSidebar(!sidebar);

    // Integrating the searchbar with the state
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/' + value);
        setValue('');
    }    
    // Returns "Loading categories when they are being loaded"

    if(isLoading){
        return (
            <>
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="navbar">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars data-testid='open-btn'onClick={showSidebar}/>
                        </Link>
                        <div className="header-container">
                            <h1>Popditt</h1>
                        </div>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} data-testid='nav-menu'>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" data-testid='close-btn' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                                onClick={e => {
                                e.stopPropagation();
                            }}>
                                <form className="input-form" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search" onChange={handleChange} value={value}/>
                                </form>
                            </li>
                            <li>
                            <p>Loading categories...</p> 
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        )
    }

    // Returns the sidebar with error message if app wasnt able to load the categories

    if(error){
        return (
            <>
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="navbar">
                        <Link to='#' data-testid='open-btn' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                        <div className="header-container">
                            <h1>Popditt</h1>
                        </div>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} data-testid='nav-menu'>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" data-testid='close-btn' className='menu-bars'>
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            <li
                                className="nav-item"
                                onClick={e => {
                                e.stopPropagation();
                            }}>
                                <form className="input-form" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Search" onChange={handleChange} value={value}/>
                                </form>
                            </li>
                            <li>
                            <p>Error while loading categories! Try again.</p>
                            <p>Error: {error}</p> 
                            </li>
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        )
    }

    // Returns sidebar with top categories mapped when loaded succesfully and no error is present

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to='#' data-testid='open-btn' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className="header-container">
                        <h1>Popditt</h1>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} data-testid='nav-menu'>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" data-testid='close-btn' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <li
                            className="nav-item"
                            onClick={e => {
                            e.stopPropagation();
                        }}>
                            <form className="input-form" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Search" onChange={handleChange} value={value}/>
                            </form>
                        </li>
                        {    
                        topCategories.map((topCategory, index): JSX.Element => {
                            return (
                            <CategoryItem key={index} topCategory={topCategory}/>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default SideBar;