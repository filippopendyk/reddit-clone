import { setFilterAsBest, setFilterAsDefault, setFilterAsNew, setFilterAsTop } from "../../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import './FilterMenu.css';

const FilterMenu: React.FC = () => {
    const filter = useAppSelector((state) => state.filter.filter);
    const dispatch = useAppDispatch();
    console.log(filter);

    const handleBest = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsBest());
    }

    const handleTop = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsTop());
    } 

    const handleNew = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsNew());
    }

    return (
        <div className="filter-menu">
            <button className={filter === 'best' ? 'activeFilter' : undefined} onClick={handleBest}>Best</button>
            <button className={filter === 'top' ? 'activeFilter' : undefined} onClick={handleTop}>Top</button>
            <button className={filter === 'new' ? 'activeFilter' : undefined} onClick={handleNew}>New</button>
        </div>
    )
};

export default FilterMenu;