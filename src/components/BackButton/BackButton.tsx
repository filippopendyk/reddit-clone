import './BackButton.css';
import { AiFillBackward } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <div className='button-container'>
            <button className='back-button' onClick={handleClick}>
            <IconContext.Provider value={{color: 'white'}}>
                <AiFillBackward className='back-icon'/>
                Go back
            </IconContext.Provider>
            </button>
        </div>
    )
}

export default BackButton;