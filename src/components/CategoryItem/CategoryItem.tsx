import React from "react";
import { Link } from "react-router-dom";
import './CategoryItem.css';
import { BiCategory, BiHomeAlt } from 'react-icons/bi';

interface Props {
    categoryName: string;
}

const CategoryItem: React.FC<Props> = ({categoryName}) => {
    const categoryPath = `${categoryName}`

    if(categoryName === 'Home' || categoryName === 'home'){
        return (
            <li className="nav-item">
                <Link to='/' className='menu-bars'>
                    <BiHomeAlt/>
                    <span>Home</span>
                </Link>
            </li>
        )
    }

    return (
        <li className="nav-item">
            <Link to={categoryName} className='menu-bars'>
                <BiCategory/>
                <span>{categoryName}</span>
            </Link>
        </li>
    )
}

export default CategoryItem;