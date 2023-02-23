import React from "react";
import { Link } from "react-router-dom";
import './CategoryItem.css';
import { BiCategory, BiHomeAlt } from 'react-icons/bi';

type Props = {
    topCategory: string;
}

const CategoryItem: React.FC<Props> = ({topCategory}) => {
    const categoryPath = `${topCategory}`

    if(topCategory === 'Home' || topCategory  === 'home'){
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
            <Link to={categoryPath} className='menu-bars'>
                <BiCategory/>
                <span>{topCategory}</span>
            </Link>
        </li>
    )
}

export default CategoryItem;