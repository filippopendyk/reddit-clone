import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { setFilterAsBest, setFilterAsDefault, setFilterAsNew, setFilterAsTop } from "../../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const FilterMenu: React.FC = () => {
    const filter = useAppSelector((state) => state.filter.filter);
    const dispatch = useAppDispatch();

    const handleBest = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsBest);
    }

    const handleTop = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsTop);
    } 

    const handleNew = (event: React.MouseEvent<HTMLButtonElement>) :void => {
        event.preventDefault();
        dispatch(setFilterAsNew);
    }

    return (
        <div>
            <button className={filter === 'best' ? 'activeClass' : undefined} onClick={handleBest}>Best</button>
            <button className={filter === 'top' ? 'activeClass' : undefined} onClick={handleTop}>Top</button>
            <button className={filter === 'new' ? 'activeClass' : undefined} onClick={handleNew}>New</button>
        </div>
    )
}